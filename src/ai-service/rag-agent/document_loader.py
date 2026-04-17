from __future__ import annotations

from pathlib import Path
from typing import Iterable
from zipfile import BadZipFile

import numpy as np
from langchain_community.document_loaders import (
    CSVLoader,
    PyPDFLoader,
    UnstructuredWordDocumentLoader,
)
from langchain_community.document_loaders.word_document import Docx2txtLoader
from langchain_core.documents import Document
from pdf2image import convert_from_path
from rapidocr_onnxruntime import RapidOCR


SUPPORTED_EXTENSIONS = {".csv", ".pdf", ".doc", ".docx"}


def _ocr_pdf(path: Path) -> list[Document]:
    engine = RapidOCR()
    pages = convert_from_path(path.as_posix())
    docs: list[Document] = []

    for page_number, image in enumerate(pages, start=1):
        result, _ = engine(np.array(image))
        text = "\n".join([line[1] for line in result]) if result else ""
        if text.strip():
            docs.append(
                Document(
                    page_content=text,
                    metadata={"source": path.as_posix(), "page": page_number, "ocr": True},
                )
            )
    return docs


def load_documents(paths: Iterable[str], enable_ocr: bool = True) -> list[Document]:
    documents: list[Document] = []

    for raw_path in paths:
        path = Path(raw_path).expanduser().resolve()
        suffix = path.suffix.lower()

        if not path.exists():
            raise FileNotFoundError(f"File not found: {path}")
        if suffix not in SUPPORTED_EXTENSIONS:
            raise ValueError(f"Unsupported file extension: {suffix}")

        if suffix == ".csv":
            documents.extend(CSVLoader(path.as_posix()).load())
            continue

        if suffix == ".pdf":
            pdf_docs = PyPDFLoader(path.as_posix()).load()
            has_text = any(d.page_content.strip() for d in pdf_docs)
            if has_text:
                documents.extend(pdf_docs)
            elif enable_ocr:
                documents.extend(_ocr_pdf(path))
            continue

        if suffix == ".doc":
            documents.extend(UnstructuredWordDocumentLoader(path.as_posix()).load())
            continue

        if suffix == ".docx":
            try:
                documents.extend(Docx2txtLoader(path.as_posix()).load())
            except (BadZipFile, ValueError, RuntimeError):
                documents.extend(UnstructuredWordDocumentLoader(path.as_posix()).load())
            continue

    return documents
