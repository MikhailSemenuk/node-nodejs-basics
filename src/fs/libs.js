import { access } from "node:fs/promises";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

export const isPathExist = async (path) => {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
};

export const getCurrentFolder = (url) => dirname(fileURLToPath(url));
