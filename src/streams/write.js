import { getCurrentFolder } from "../fs/libs.js";
import { createWriteStream } from "fs";
import { join } from "node:path";

const write = async () => {
    const filePath = join(getCurrentFolder(import.meta.url), "./files/fileToWrite.txt");
    const writeStream = createWriteStream(filePath);
    process.stdin.pipe(writeStream);
};

await write();