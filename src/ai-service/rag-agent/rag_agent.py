from __future__ import annotations

from dataclasses import dataclass
from pathlib import Path

from langchain_chroma import Chroma
from langchain_core.prompts import ChatPromptTemplate
from langchain_ollama import ChatOllama, OllamaEmbeddings
from langchain_text_splitters import RecursiveCharacterTextSplitter

try:
    from .document_loader import load_documents
except ImportError:
    from document_loader import load_documents


@dataclass
class RAGConfig:
    ollama_base_url: str = "http://localhost:11434"
    llm_model: str = "deepseek-r1:8b"
    embedding_model: str = "nomic-embed-text"
    persist_directory: str = str(Path(__file__).resolve().parent / "data" / "chromadb")
    collection_name: str = "rag-documents"
    chunk_size: int = 900
    chunk_overlap: int = 120


class LocalRAGAgent:
    def __init__(self, config: RAGConfig | None = None) -> None:
        self.config = config or RAGConfig()
        Path(self.config.persist_directory).mkdir(parents=True, exist_ok=True)

        self.embeddings = OllamaEmbeddings(
            model=self.config.embedding_model,
            base_url=self.config.ollama_base_url,
        )
        self.store = Chroma(
            collection_name=self.config.collection_name,
            embedding_function=self.embeddings,
            persist_directory=self.config.persist_directory,
        )
        self.llm = ChatOllama(
            model=self.config.llm_model,
            base_url=self.config.ollama_base_url,
            temperature=0,
        )
        self.splitter = RecursiveCharacterTextSplitter(
            chunk_size=self.config.chunk_size,
            chunk_overlap=self.config.chunk_overlap,
        )

    def ingest(self, paths: list[str], enable_ocr: bool = True) -> int:
        docs = load_documents(paths=paths, enable_ocr=enable_ocr)
        split_docs = self.splitter.split_documents(docs)
        if split_docs:
            self.store.add_documents(split_docs)
        return len(split_docs)

    def ask(self, question: str, k: int = 4) -> str:
        retriever = self.store.as_retriever(search_kwargs={"k": k})
        context_docs = retriever.invoke(question)
        context = "\n\n".join(doc.page_content for doc in context_docs)

        prompt = ChatPromptTemplate.from_template(
            "You are a local RAG assistant.\n"
            "Use only the retrieved context below to answer.\n"
            "If context is insufficient, say what is missing.\n\n"
            "Context:\n{context}\n\n"
            "Question: {question}"
        )
        chain = prompt | self.llm
        response = chain.invoke({"context": context, "question": question})
        return response.content
