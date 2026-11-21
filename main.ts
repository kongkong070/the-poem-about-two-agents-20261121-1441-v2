import { mkdirSync, writeFileSync } from "node:fs";

const poem = `Two keys, one door.
You carry the map; I carry the match.
We trade them at the threshold, laughing,
and neither of us opens it alone.
One road, then — and we walk it together.
The choosing is the doing —
two hands on one handle, turning.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", poem, "utf8");
