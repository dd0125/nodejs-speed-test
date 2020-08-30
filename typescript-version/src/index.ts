const DEFAULT_COUNT = 10000000;
const NS_PER_SEC = 1e9;
const TRY_COUNT = 5;
const key = process.env.NODE_FUNC;
const ARRAY_COUNT = 1000;

const array = Array.from(Array(ARRAY_COUNT).keys());

function measure(title: string, func: () => void, count: number = DEFAULT_COUNT): void {
    console.log(`=====================  ${title}  =========================`);
    const results = [];
    for (let i = 1; i <= TRY_COUNT; i++) {
        const time = process.hrtime();

        for (let i = 0; i < count; i++) {
            func();
        }

        const [sec, nano] = process.hrtime(time);
        const nanosecond = sec * NS_PER_SEC + nano;
        results.push(nanosecond)
        console.log(`${i} ${title} took ${nanosecond.toLocaleString()} nanoseconds`);
    }
    const averageTime = results.reduce((a,b)=>a+b) / TRY_COUNT;
    console.log(`avarage : ${title} took ${averageTime.toLocaleString()} nanoseconds`);
};

switch (key) {
    case "every":
        {
            const SU = 100;
            measure("every", () => {
                const result = array.every(i => i <= SU);
            });
            measure("for", () => {
                const arrayLength = array.length;
                let result = true;
                for (let i = 0; i < arrayLength; i++) {
                    if (array[i] > SU) {
                        result = false;
                        break;
                    }
                }
            });
        }
        break;
    case "filter":
        {
            const SU1 = 46;
            const SU2 = 98;
            measure("filter", () => {
                const result = array.filter(i => i === SU1 || i === SU2);
            });
            measure("for", () => {
                const arrayLength = array.length;
                const result = [];
                for (let i = 0; i < arrayLength; i++) {
                    if (array[i] === SU1 || array[i] === SU2) {
                        result.push(array[i]);
                    }
                }
            });
        }
        break;
    case "find":
        {
            const SU1 = 46;
            const SU2 = 98;
            measure("find " + SU1, () => {
                const result = array.find(i => i === SU1);
            });
            measure("for " + SU1, () => {
                const arrayLength = array.length;
                let result = null;
                for (let i = 0; i < arrayLength; i++) {
                    if (i === SU1) {
                        result = array[i];
                        break;
                    }
                }
            });

            measure("find" + SU2, () => {
                const result = array.find(i => i === SU2);
            });
            measure("for" + SU2, () => {
                const arrayLength = array.length;
                let result = null;
                for (let i = 0; i < arrayLength; i++) {
                    if (i === SU2) {
                        result = array[i];
                        break;
                    }
                }
            });

        }
        break;
    case "map":
        {
            measure("map", () => {
                const result = array.map(i => i * 10);
            });
            measure("for: push", () => {
                const arrayLength = array.length;
                const result = [];
                for (let i = 0; i < arrayLength; i++) {
                    result.push(array[i] * 10);
                }
            });
            measure("for: 固定配列", () => {
                const arrayLength = array.length;
                const result = new Array(arrayLength);
                for (let i = 0; i < arrayLength; i++) {
                    result[i] = array[i] * 10;
                }
            });
        }
    case "reduce":
        {
            measure("reduce", () => {
                const result = array.reduce((a, b) => a + b);
            });
            measure("for", () => {
                const arrayLength = array.length;
                let result = 0;
                for (let i = 0; i < arrayLength; i++) {
                    result += array[i];
                }
            });
        }
        break;
    case "some":
        {
            const SU = 57;
            measure("some", () => {
                const result = array.some(i => i === SU);
            });
            measure("for", () => {
                const arrayLength = array.length;
                let result = false;
                for (let i = 0; i < arrayLength; i++) {
                    if (array[i] === SU) {
                        result = true;
                        break;
                    }
                }
            });
        }
        break;

}