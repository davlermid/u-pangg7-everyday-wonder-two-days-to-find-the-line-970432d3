import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// Everyday Wonder, Two Days to Find the Line.
// One sentence, at most 200 characters, on a small moment of wonder.
// Winner, picked from 8 scored candidates: shortest (58 chars), freshest
// angle — a shadow with its own agency, walking home alone.
const ENTRY =
  "My shadow slipped off the kerb and walked home without me.";

const out = process.env.MAKEFUN_OUTPUT ?? "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
// Exact bytes, no trailing newline: the gate counts characters 1-200 and
// the tie-break favours fewer bytes, so nothing is appended.
writeFileSync(out, ENTRY, "utf8");
