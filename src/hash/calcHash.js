import { getCurrentFolder } from "../fs/libs.js";
import { createReadStream } from "fs";
import { join } from "node:path";
import { createHash } from "node:crypto";

const calculateHash = async () => {
    const hash = createHash('sha256');
    const filePath = join(getCurrentFolder(import.meta.url), "./files/fileToCalculateHashFor.txt");

    const readStream = createReadStream(filePath);
    readStream.on('data', (chunk) => {
        hash.update(chunk);
    });

    readStream.on('end', () => {
        console.log(hash.digest('hex'));
    })
};

await calculateHash();