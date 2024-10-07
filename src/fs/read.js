import { isPathExist, getCurrentFolder } from "./libs.js";
import { join } from "node:path";
import { readFile } from "node:fs/promises";

const read = async () => {
    const filePath = join(
        getCurrentFolder(import.meta.url),
        "./files/fileToRead.txt",
    );

    if (!(await isPathExist(filePath))) {
        throw new Error("FS operation failed");
    }

    const data = await readFile(filePath, { encoding: "utf8" });
    console.log(data);
};

await read();
