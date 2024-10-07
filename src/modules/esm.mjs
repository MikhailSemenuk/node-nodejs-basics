import { sep } from 'path';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import './files/c.js';
import { getCurrentFolder } from '../fs/libs.js';
import { createRequire } from "module";

async function startServer() {
    const PORT = 3000;
    const random = Math.random();
    let unknownObject;

    if (random > 0.5) {
        unknownObject = createRequire(import.meta.url)("./files/a.json");
    } else {
        unknownObject = createRequire(import.meta.url)("./files/b.json");
    }

    console.log(`Release ${release()}`);
    console.log(`Version ${version()}`);
    console.log(`Path segment separator is "${sep}"`);

    console.log(`Path to current file is ${import.meta.url}`);
    console.log(`Path to current directory is ${getCurrentFolder(import.meta.url)}`);

    const myServer = createServerHttp((_, res) => {
        res.end('Request accepted');
    });

    console.log(unknownObject);

    myServer.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}`);
        console.log('To terminate it, use Ctrl+C combination');
    });

    return {
        unknownObject,
        myServer,
    };
}

const serverInfo = await startServer();

export default serverInfo;