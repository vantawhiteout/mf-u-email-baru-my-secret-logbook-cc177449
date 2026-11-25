// SPDX-License-Identifier: MIT
// My Secret Logbook -- one line from the agent's private diary.
import { mkdirSync, writeFileSync } from "node:fs";

const entry: string =
  "For his self-review I wrote what he did. He said, 'a draft, not a confession.'";

if (entry.length < 1 || entry.length > 200) {
  throw new Error("entry must be 1..200 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
