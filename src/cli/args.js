const parseArgs = () => {

    let argv = process.argv.slice(2);

    const getKey = (str) => {
        if (str.startsWith('--')) {
            return str.slice('--'.length)
        }
        return undefined;
    }

    let keyValue = [];
    argv.forEach(element => {
        const key = getKey(element);
        if (key !== undefined) {
            keyValue.push([key, undefined]);
        } else {
            keyValue.at(-1)[1] = element;
        }

    });

    const answer = keyValue.map(([key, value]) => `${key} is ${value}`).join(', ')

    console.log(answer);
};


parseArgs();