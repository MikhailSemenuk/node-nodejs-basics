import { EOL } from "node:os";
import { getCurrentFolder } from "../fs/libs.js";
import { createReadStream } from "fs";
import { join } from "node:path";

const read = async () => {
    const filePath = join(getCurrentFolder(import.meta.url), "./files/fileToRead.txt");
    const readStream = createReadStream(filePath);
    readStream.on('data', (chunk) => {
        process.stdout.write(chunk + EOL);
    });
};

await read();
