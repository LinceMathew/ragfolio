# Security Standards

- Never log user-provided input (questions, answers, or any PII) — log only metadata such as request IDs or status codes.
- CORS must not use wildcard `allow_origins=["*"]` outside of local development. Production configs must restrict origins explicitly.
- All API endpoints that accept user input must enforce a maximum input length and return a 400 error if exceeded.
