import { writeFile } from "node:fs/promises";
import { join } from "node:path";
import { isPathExist, getCurrentFolder } from "./libs.js";

const create = async () => {
    const filePath = join(getCurrentFolder(import.meta.url), "./files/fresh.txt");

    if (await isPathExist(filePath)) {
        throw new Error("FS operation failed");
    }

    await writeFile(filePath, "I am fresh and young");
};

await create();
