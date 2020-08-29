const measurement = require('./measurement.js');

const array = Array.from(Array(100).keys());

const SU1 = 46;
const SU2 = 98;

measurement.execute("filter", () => {
    const result = array.filter( i => i === SU1 || i === SU2 );
    // console.log(result);
});

measurement.execute("for", () => {
    const arrayLength = array.length;
    const result = [];
    for( let i = 0; i < arrayLength; i++ ){
        if( array[i] === SU1 || array[i] === SU2){
            result.push(array[i]);
        }
    }
    // console.log(result);
});
