import { isPathExist, getCurrentFolder } from "./libs.js";
import { join } from "node:path";
import { readdir } from "node:fs/promises";
import { EOL } from "node:os";

const list = async () => {
    const directoryPath = join(getCurrentFolder(import.meta.url), "./files/");

    if (!(await isPathExist(directoryPath))) {
        throw new Error("FS operation failed");
    }

    const filesFolders = await readdir(directoryPath, {
        withFileTypes: true,
    });

    const onlyFiles = filesFolders
        .filter((file) => file.isDirectory)
        .map((file) => file.name);

    console.log(onlyFiles.join(EOL));
};

await list();
