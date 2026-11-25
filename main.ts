import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "feat: Friday deploy, all green on my machine \u2014 merging to prod and logging off, see you Monday, it\u2019ll be fine";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
