## Hi, I'm Jeongun Ha 👋

I build LLM agents and verify them with evaluations — not just demos.

### Featured Projects

**[Marvia](https://github.com/HJU5022/Marvia)** — An LLM agent that takes a single B/L and judges whether import cargo at Busan Port will arrive on time (On track / Watch / Act), showing the evidence behind each verdict.
- Eval: 30-case set (8 normal · 14 edge · 8 failure-inducing), re-run 6×, 10 of 11 targets passed → [EVAL_REPORT](https://github.com/HJU5022/Marvia/blob/main/EVAL_REPORT.md)
- [Live](https://marvia.up.railway.app) · Agent API · MCP server
- My role: Built the agent's verdict backend (LLM calls, vessel identification, output validation & retry) and wired it to the MCP tool server with tool-call tracing in Langfuse. Also built the 30-case eval set with LLM-as-judge, DB/auth, and the frontend overhaul.

**[K-Menu Voice Guide](https://github.com/HJU5022/K_Menu_Voice_Guide)** — Snap a Korean menu, get each dish explained in English text and voice (pronunciation, spice level, ingredients, allergens).
- Eval: fine-tuned OCR menu-match recall 91.67% (33/36) vs. 0% (0/36) with off-the-shelf PaddleOCR
- [Live](https://hju5022-k-menu-react.static.hf.space)
- My role: Led OCR — PaddleOCR fine-tuning and line-level menu matching (0% → 91.67%). Co-developed Qwen3-TTS LoRA fine-tuning with a teammate and integrated it into serving. Also built the end-to-end pipeline, FastAPI server, Flutter mobile app, and HF Spaces deployment.

### Tech
- **LLM · Agent**: MCP · Langfuse (tracing, prompt management) · LLM evaluation design
- **Backend**: Python · FastAPI · PostgreSQL
- **Vision · Voice**: PaddleOCR · TTS
- **Deploy**: Docker · Railway · Hugging Face Spaces

### Contact
✉ dnsl0522@gmail.com
