# Local RAG Agent (Ollama + ChromaDB)

This folder provides a local-first RAG scaffold inspired by the setup style in:
- https://github.com/techwithtim/LocalAIAgentWithRAG

## Motivation

For reasoning-focused local inference, this setup uses a DeepSeek model through Ollama.  
As background motivation, see **DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning** (arXiv:2501.12948), also indexed on Hugging Face Papers:
- https://arxiv.org/abs/2501.12948
- https://huggingface.co/papers/2501.12948

## What it supports

- Local LLM inference with Ollama (`deepseek-r1:8b` by default)
- Local embeddings with Ollama (`nomic-embed-text` by default)
- ChromaDB persistent vector store
- File ingestion for:
  - `.csv`
  - `.pdf`
  - `.doc`
  - `.docx`
- OCR fallback for scanned PDFs via local OCR engine (`rapidocr-onnxruntime`)

## Setup

```bash
cd /home/runner/work/Hackathon-Template/Hackathon-Template/src/ai-service/rag-agent
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

Install and run Ollama locally, then pull models:

```bash
ollama pull deepseek-r1:8b
ollama pull nomic-embed-text
```

## Usage

Ingest files:

```bash
python main.py ingest /absolute/path/to/file.csv /absolute/path/to/file.pdf
```

Ask a question:

```bash
python main.py ask "What are the top risks listed in the documents?"
```

Disable OCR fallback if needed:

```bash
python main.py ingest /absolute/path/to/file.pdf --disable-ocr
```

## Notes

- The vector DB persists under `data/chromadb`.
- This is scaffold code meant for local iteration; model serving is expected on your laptop.
