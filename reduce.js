const measurement = require('./measurement.js');

const array = Array.from(Array(100).keys());


measurement.execute("reduce", () => {
    const result = array.reduce( (a, b) => a + b );
    // console.log(result);
});

measurement.execute("for", () => {
    const arrayLength = array.length;
    let result = 0;
    for( let i = 0; i < arrayLength; i++ ){
        result += array[i];
    }
    // console.log(result);
});
