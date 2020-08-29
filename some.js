const measurement = require('./measurement.js');

const array = Array.from(Array(100).keys());

const SU = 57;

measurement.execute("some", () => {
    const result = array.some( i => i === SU );
    console.log(result);
});

measurement.execute("for", () => {
    const arrayLength = array.length;
    let result = false;
    for( let i = 0; i < arrayLength; i++ ){
        if( array[i] === SU){
            result = true;
            break;
        }
    }
    console.log(result);
});
