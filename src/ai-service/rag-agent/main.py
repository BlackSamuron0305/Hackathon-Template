from __future__ import annotations

import argparse

try:
    from .rag_agent import LocalRAGAgent
except ImportError:
    from rag_agent import LocalRAGAgent


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(description="Local Ollama + ChromaDB RAG agent")
    subparsers = parser.add_subparsers(dest="command", required=True)

    ingest_parser = subparsers.add_parser("ingest", help="Ingest documents")
    ingest_parser.add_argument("paths", nargs="+", help="Paths to .csv/.pdf/.doc/.docx files")
    ingest_parser.add_argument("--disable-ocr", action="store_true", help="Disable OCR fallback")

    ask_parser = subparsers.add_parser("ask", help="Query the RAG index")
    ask_parser.add_argument("question", help="Question to answer")
    ask_parser.add_argument("-k", type=int, default=4, help="Top-k retrieved chunks")

    return parser


def main() -> None:
    parser = build_parser()
    args = parser.parse_args()
    agent = LocalRAGAgent()

    if args.command == "ingest":
        count = agent.ingest(paths=args.paths, enable_ocr=not args.disable_ocr)
        print(f"Ingested {count} chunks.")
        return

    if args.command == "ask":
        answer = agent.ask(question=args.question, k=args.k)
        print(answer)


if __name__ == "__main__":
    main()
