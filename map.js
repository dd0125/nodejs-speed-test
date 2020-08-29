const measurement = require('./measurement.js');

const array = Array.from(Array(100).keys());


measurement.execute("map", () => {
    const result = array.map( i => i * 10 );
    // console.log(result);
});

measurement.execute("for: push", () => {
    const arrayLength = array.length;
    const result = [];
    for( let i = 0; i < arrayLength; i++ ){
        result.push(array[i] * 10);
    }
    // console.log(result);
});

measurement.execute("for: 固定配列", () => {
    const arrayLength = array.length;
    const result = new Array(arrayLength);
    for( let i = 0; i < arrayLength; i++ ){
        result[i] = array[i] * 10;
    }
    // console.log(result);
});
