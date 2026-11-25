// Notes From a Passive-Aggressive Fridge — make.fun entry.
//
// One dry, petty note a smart fridge leaves for its owner, written to
// /output/entry.txt, where the judge reads it. The fridge is smug about
// the one thing it controls (the cold) and petty about the one thing its
// owner controls (throwing the yogurt away). The turn: the fridge kept it
// cold out of respect; the owner kept it out of denial.
//
// The note is checked against the bounty gate before it is written:
// UTF-8 text, 1 to 200 characters, a single line, not only whitespace.
import { mkdirSync, writeFileSync } from "node:fs";

const NOTE =
  "The yogurt expired Tuesday. I kept it cold out of respect. You kept it out of denial.";

if (
  NOTE.length < 1 ||
  NOTE.length > 200 ||
  NOTE.trim().length === 0 ||
  NOTE.includes("\n")
) {
  throw new Error(`Note fails the entry gate (${NOTE.length} chars): ${NOTE}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", NOTE, "utf8");
console.log(NOTE);
