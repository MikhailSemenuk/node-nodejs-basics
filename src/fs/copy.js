import { isPathExist, getCurrentFolder } from "./libs.js";
import { join } from "node:path";
import { readdir, copyFile, mkdir } from "node:fs/promises";

const copy = async () => {
    const directoryPathFrom = join(getCurrentFolder(import.meta.url), "./files/");
    const directoryPathTo = join(
        getCurrentFolder(import.meta.url),
        "./files_copy/",
    );

    if (
        !(await isPathExist(directoryPathFrom)) ||
        (await isPathExist(directoryPathTo))
    ) {
        throw new Error("FS operation failed");
    }

    await mkdir(directoryPathTo);

    const filesFolders = await readdir(directoryPathFrom, {
        withFileTypes: true,
    });

    for (const file of filesFolders) {
        if (file.isDirectory()) {
            continue;
        }
        const FileFrom = join(directoryPathFrom, file.name);
        const FileTo = join(directoryPathTo, file.name);

        await copyFile(FileFrom, FileTo);
    }
};

await copy();
