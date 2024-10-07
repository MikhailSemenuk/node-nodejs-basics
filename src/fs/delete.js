import { isPathExist, getCurrentFolder } from "./libs.js";
import { join } from "node:path";
import { rm } from "node:fs/promises";

const remove = async () => {
    const filePath = join(
        getCurrentFolder(import.meta.url),
        "./files/fileToRemove.txt",
    );

    if (!(await isPathExist(filePath))) {
        throw new Error("FS operation failed");
    }
    await rm(filePath);
};

await remove();
