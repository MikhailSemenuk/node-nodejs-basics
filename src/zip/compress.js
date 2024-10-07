import { getCurrentFolder } from "../fs/libs.js";
import { createReadStream, createWriteStream } from "fs";
import { join } from "node:path";
import { createGzip } from "zlib";

const compress = async () => {
    // Write your code here

    // implement function that compresses file
    // fileToCompress.txt to archive.gz using zlib and Streams API

    const gzip = createGzip()

    const fileFrom = join(getCurrentFolder(import.meta.url), "./files/fileToCompress.txt");
    const fileTo = join(getCurrentFolder(import.meta.url), "./files/archive.gz");

    const readStream = createReadStream(fileFrom);
    const writeStream = createWriteStream(fileTo)

    readStream.pipe(gzip).pipe(writeStream);
};

await compress();