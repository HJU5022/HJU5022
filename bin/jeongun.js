#!/usr/bin/env node
// 프로필 README의 Quick Start에서 `npx github:HJU5022/HJU5022`로 실행하는 소개 CLI.
// 하지 않는 것: 브라우저 열기, 네트워크 요청, 외부 패키지 사용 (출력만 한다).

const VERSION = "1.0.0";
const c = (code, s) => (process.stdout.isTTY ? `\x1b[${code}m${s}\x1b[0m` : s);
const bold = (s) => c("1", s);
const dim = (s) => c("2", s);
const cyan = (s) => c("36", s);

const sections = {
  projects: [
    bold("Projects"),
    "",
    `  ${cyan("Marvia")}  Busan Port import cargo-delay agent  ${dim("2026.09 – 10 · team of 2")}`,
    "    I built the agent backend & evals",
    "    10/11 eval targets (30 cases × 6 reruns) · prompt injection 0/240",
    `    ${dim("https://github.com/HJU5022/Marvia · https://marvia.up.railway.app")}`,
    "",
    `  ${cyan("K-Menu Voice Guide")}  Korean menu photo → English voice guide  ${dim("2026.08 · team of 4")}`,
    "    I built OCR fine-tuning & the Flutter app; co-developed TTS fine-tuning",
    "    OCR match recall 0% → 91.67% (33/36, base PaddleOCR 0/36)",
    `    ${dim("https://github.com/HJU5022/K_Menu_Voice_Guide · https://hju5022-k-menu-react.static.hf.space")}`,
  ],
  stack: [
    bold("Stack"),
    "",
    "  Agent    MCP · Langfuse · LLM evaluation",
    "  Backend  Python · FastAPI · PostgreSQL · Docker",
    "  Model    PyTorch · PaddleOCR · TTS LoRA",
    "  App      Flutter · Next.js",
  ],
  why: [
    bold("How I build agents"),
    "",
    "  I trust test results and code, not LLM output.",
    "  So my agents show their evidence, and code checks it:",
    "  numbers that are not in the evidence get blocked before the answer ships.",
  ],
  contact: [
    bold("Contact"),
    "",
    "  Email   dnsl0522@gmail.com",
    "  GitHub  https://github.com/HJU5022",
  ],
};

const help = [
  "Usage: jeongun [options]",
  "",
  "Options:",
  "  -V, --version   output the version number",
  "  -p, --projects  show projects and their evals",
  "  -s, --stack     show tech stack",
  "  -w, --why       how I build agents",
  "  -c, --contact   show contact",
  "  -h, --help      display help for command",
];

const flags = {
  "-p": "projects", "--projects": "projects",
  "-s": "stack", "--stack": "stack",
  "-w": "why", "--why": "why",
  "-c": "contact", "--contact": "contact",
};

const args = process.argv.slice(2);
const print = (lines) => console.log(lines.join("\n") + "\n");

if (args.includes("-V") || args.includes("--version")) {
  console.log(VERSION);
} else if (args.includes("-h") || args.includes("--help")) {
  print(help);
} else if (args.length === 0) {
  // [왜] npx로 처음 실행한 사람은 옵션을 모르니 전체를 한 번에 보여 준다
  print([bold("하정운 Jeongun Ha") + dim("  ·  AI Agent Developer")]);
  for (const key of ["why", "projects", "stack", "contact"]) print(sections[key]);
  print([dim("Run with --help to see options.")]);
} else {
  const picked = args.map((a) => flags[a]);
  if (picked.some((p) => !p)) {
    console.error(`Unknown option: ${args.find((a) => !flags[a])}\n`);
    print(help);
    process.exitCode = 1;
  } else {
    for (const key of [...new Set(picked)]) print(sections[key]);
  }
}
