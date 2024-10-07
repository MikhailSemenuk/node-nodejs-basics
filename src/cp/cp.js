import { spawn } from "child_process";
import { getCurrentFolder } from "../fs/libs.js";
import { join } from "node:path";

const spawnChildProcess = async (args) => {
    const scriptPath = join(getCurrentFolder(import.meta.url), "./files/script.js");

    const childProcess = spawn('node', [scriptPath, ...args], {
        stdio: ['pipe', 'pipe', 'inherit']
    });

    process.stdin.pipe(childProcess.stdin);
    childProcess.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["someArgument1", "someArgument2"]);
