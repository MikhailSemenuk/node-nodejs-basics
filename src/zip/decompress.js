import { getCurrentFolder } from "../fs/libs.js";
import { createReadStream, createWriteStream } from "fs";
import { join } from "node:path";
import { createGunzip } from "zlib";

const decompress = async () => {
    const gunzip = createGunzip()

    const fileFrom = join(getCurrentFolder(import.meta.url), "./files/archive.gz");
    const fileTo = join(getCurrentFolder(import.meta.url), "./files/fileToCompress.txt");

    const readStream = createReadStream(fileFrom);
    const writeStream = createWriteStream(fileTo)

    readStream.pipe(gunzip).pipe(writeStream);
};

await decompress();