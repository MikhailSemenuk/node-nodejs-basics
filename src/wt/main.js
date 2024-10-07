import { cpus } from 'os';
import { Worker } from 'worker_threads';
import { getCurrentFolder } from "../fs/libs.js";
import { join } from "node:path";

const performCalculations = async () => {

    const scriptWorker = join(getCurrentFolder(import.meta.url), "./worker.js");

    const cpuCores = cpus().length;
    const results = Array(cpuCores).fill(null);
    const workers = [];

    for (let i = 0; i < cpuCores; i++) {
        workers.push(
            new Promise((resolveWorker) => {
                const worker = new Worker(scriptWorker);
                worker.postMessage(10 + i);

                worker.on('message', (message) => {
                    results[i] = message;
                    resolveWorker();
                });

                worker.on('error', (error) => {
                    results[i] = { status: 'error', data: null };
                    resolveWorker();
                });

            })
        );
    }

    await Promise.all(workers);

    console.log(results);
};

await performCalculations();
process.exit(0);