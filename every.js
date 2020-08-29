const measurement = require('./measurement.js');

const array = Array.from(Array(100).keys());

const SU = 100;

measurement.execute("every", () => {
    const result = array.every( i => i <= SU );
    // console.log(result);
});

measurement.execute("for", () => {
    const arrayLength = array.length;
    let result = true;
    for( let i = 0; i < arrayLength; i++ ){
        if( array[i] > SU){
            result = false;
            break;
        }
    }
    // console.log(result);
});
