## 하정운 Jeongun Ha

*I trust test results and code, not LLM output — so my agents show their evidence, and code checks it.*<sup>[E1](https://github.com/HJU5022/Marvia/blob/main/backend/app/services/chat/citations.py)</sup>

<img src="https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white" alt="Python"> <img src="https://img.shields.io/badge/FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white" alt="FastAPI"> <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white" alt="PostgreSQL"> <img src="https://img.shields.io/badge/PyTorch-EE4C2C?style=flat-square&logo=pytorch&logoColor=white" alt="PyTorch"> <img src="https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white" alt="Docker"> <img src="https://img.shields.io/badge/MCP-555555?style=flat-square&logo=modelcontextprotocol&logoColor=white" alt="MCP"> <img src="https://img.shields.io/badge/Langfuse-555555?style=flat-square" alt="Langfuse"> <img src="https://img.shields.io/badge/PaddleOCR-0062B0?style=flat-square&logo=paddlepaddle&logoColor=white" alt="PaddleOCR"> <img src="https://img.shields.io/badge/Flutter-02569B?style=flat-square&logo=flutter&logoColor=white" alt="Flutter"> <img src="https://img.shields.io/badge/Next.js-555555?style=flat-square&logo=nextdotjs&logoColor=white" alt="Next.js">

<sub>**[Marvia](https://github.com/HJU5022/Marvia)** Busan Port import cargo-delay agent · team of 2 · agent backend & evals · eval 10/11<sup>[E2](https://github.com/HJU5022/Marvia/blob/main/EVAL_REPORT.md#한눈에-목표-대비-결과)</sup> · injection 0/240<sup>[E3](https://github.com/HJU5022/Marvia/blob/main/EVAL_REPORT.md#7-출시-게이트)</sup> (2026.09 – 2026.10)</sub><br>
<sub>**[K-Menu Voice Guide](https://github.com/HJU5022/K_Menu_Voice_Guide)** Korean menu photo → English voice guide · team of 6 · OCR/TTS fine-tuning · OCR 0% → 91.67%<sup>[E4](https://github.com/HJU5022/K_Menu_Voice_Guide#비교-실험-결과)</sup> (2026.08)</sub>

### Evidence

<sub>Every claim above links to where it was measured or enforced.</sub>

| | Claim | Where |
|---|---|---|
| E1 | Citations that don't match the evidence are removed by code | [`citations.py`](https://github.com/HJU5022/Marvia/blob/main/backend/app/services/chat/citations.py) |
| E2 | 10 of 11 eval targets passed (30 cases × 6 reruns) | [Marvia EVAL_REPORT](https://github.com/HJU5022/Marvia/blob/main/EVAL_REPORT.md#한눈에-목표-대비-결과) |
| E3 | Prompt injection 0/240 at the release gate | [EVAL_REPORT §7](https://github.com/HJU5022/Marvia/blob/main/EVAL_REPORT.md#7-출시-게이트) |
| E4 | Fine-tuned OCR 33/36 vs. base PaddleOCR 0/36 | [K-Menu README](https://github.com/HJU5022/K_Menu_Voice_Guide#비교-실험-결과) |

### Run me

```
npx github:HJU5022/HJU5022
```

<sub>`--projects` · `--stack` · `--why` · `--contact` · `--help`</sub>
