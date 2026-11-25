import { writeFileSync, mkdirSync } from "node:fs";

const LINE =
  "Someone screen-shared the email we were meeting about, then read it aloud, slowly, to the people who wrote it.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry length ${LINE.length} outside 1-200 gate`);
}
if (!LINE.trim()) {
  throw new Error("entry is only whitespace");
}

// Single line, no trailing newline: the gate counts raw bytes 1-200.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote ${LINE.length} chars to /output/entry.txt`);
