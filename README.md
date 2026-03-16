# Ragfolio

One project: frontend (React + Vite + Tailwind), backend (FastAPI), and RAG (uv library).

## Layout

- **frontend/** — React app; dev server on port 5000; all API calls go to `/api/*` (proxied to backend).
- **backend/** — FastAPI app on port 8000; `GET /health`, `POST /ask`.
- **rag/** — uv package (chromadb, fastembed, requests); for use by backend.

## Run

1. **Backend** (terminal 1):
   ```bash
   cd backend && uv run python main.py
   ```
   Listens on http://localhost:8000.

2. **Frontend** (terminal 2):
   ```bash
   cd frontend && npm install && npm run dev
   ```
   App at http://localhost:5000. Requests to `/api/health` and `/api/ask` are proxied to the backend.
   

Optionally install RAG for development: `cd rag && uv sync`.



## Related Projects

[git-lrc](https://github.com/HexmosTech/git-lrc): Free, Unlimited AI Code Reviews That Run on Commit.
 

[![git-lrc](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/vbgm2bg20v4egt4x3p6m.png)](https://hexmos.com/livereview/git-lrc/)

*AI agents write code fast. They also silently remove logic, change behavior, and introduce bugs -- without telling you. You often find out in production.
git-lrc fixes this. It hooks into git commit and reviews every diff before it lands. 60-second setup.*

👉 Check out: [git-lrc](https://github.com/HexmosTech/git-lrc) 
Any feedback or contributors are welcome! It’s online, source-available, and ready for anyone to use. Star us on GitHub.
