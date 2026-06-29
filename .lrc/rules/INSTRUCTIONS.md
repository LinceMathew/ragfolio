# General Coding Standards

- All functions must have complete type annotations for parameters and return values.
- Never use bare `except Exception` — always catch the most specific exception type possible.
- Configuration values (model names, URLs, timeouts, size limits) must never be hardcoded inline — use named constants at the module level or environment variables.
- When re-raising exceptions, always use `raise ... from e` to preserve the exception chain.
- Unused imports must be removed.
