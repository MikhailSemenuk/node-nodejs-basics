import { isPathExist, getCurrentFolder } from "./libs.js";
import { join } from "node:path";
import { rename as renameFS } from "node:fs/promises";

const rename = async () => {
    const filePathOld = join(
        getCurrentFolder(import.meta.url),
        "./files/wrongFilename.txt",
    );
    const filePathNew = join(
        getCurrentFolder(import.meta.url),
        "./files/wrongFilename.md",
    );

    if (!(await isPathExist(filePathOld)) || (await isPathExist(filePathNew))) {
        throw new Error("FS operation failed");
    }
    await renameFS(filePathOld, filePathNew);
};

await rename();
