// const DEFAULT_COUNT = 10;
const DEFAULT_COUNT = 10000000;

exports.execute = (title, func, count = DEFAULT_COUNT) => {
    const startDate = Date.now();

    for(let i = 0; i < count; i++){
        func();
    }

    const endDate = Date.now();
    console.log(title + ': ' + (endDate - startDate) + 'ms');
};
