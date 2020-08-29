const measurement = require('./measurement.js');

const array = Array.from(Array(100).keys());

const SU1 = 46;
const SU2 = 98;

measurement.execute("find " + SU1, () => {
    const result = array.find( i => i === SU1 );
    // console.log(result);
});

measurement.execute("for " + SU1, () => {
    const arrayLength = array.length;
    let result = null;
    for( let i = 0; i < arrayLength; i++ ){
        if( i === SU1 ){
            result = array[i];
            break;
        }
    }
    // console.log(result);
});


measurement.execute("find " + SU2, () => {
    const result = array.find( i => i === SU2 );
    // console.log(result);
});

measurement.execute("for " + SU2, () => {
    const arrayLength = array.length;
    let result = null;
    for( let i = 0; i < arrayLength; i++ ){
        if( i === SU2 ){
            result = array[i];
            break;
        }
    }
    // console.log(result);
});
