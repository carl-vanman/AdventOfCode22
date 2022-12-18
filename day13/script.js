import { 
    isInteger, 
    isLeftHandSideLower, 
    isLeftHandSideHigher, 
    isArray, 
    isUndefined, 
    isEqual, 
    totalScore } from "./helperFunctions.js"

let indexCounter = 0;
const score = [];

function outerFn(arr1, arr2){
    let index = 0;

    function innerFn(left, right){

        //steg 1
        if(( isUndefined(left) && isArray(right) ) || ( isUndefined(left) && isInteger(right) )){
            return true;
        }
        
        //steg 2
        if(( isArray(left) && isUndefined(right) ) || ( isInteger(left) && isUndefined(right) ) || ( isUndefined(left) && isUndefined(right) )){
            return false;
        }

        //steg 3
        if( isInteger(left) && isInteger(right) ){

            //steg 3.1
            if( left < right ){
                return true;
            }

            //steg 3.2
            if( left > right ){
                return false;
            }

            //steg 3.3
            if( left === right ){
                index++;
                return innerFn( arr1[index], arr2[index] )
            }
        }

        //steg 4
        if( isArray(left) && isArray(right) ){
            let result = outerFn( left, right );

            if(result){
                return result;
            }
            
            index++;
            return innerFn( arr1[index], arr2[index] )
        }

        //steg 5
        if( isArray(left) && isInteger(right) ){
            let result = outerFn( left, [ right ] );

            if(result){
                return result;
            }
            
            index++;
            return innerFn( arr1[index], arr2[index] )
        }
        
        //steg 6
        if( isInteger(left) && isArray(right) ){
            let result = outerFn( [ left ], right );

            if(result){
                return result;
            }
            
            index++;
            return innerFn( arr1[index], arr2[index] )
        }
    }

    return innerFn( arr1[index], arr2[index] );
}

// #1
console.log( outerFn([1, 1, 3, 1, 1], [1, 1, 5, 1, 1]) ); //true

// #2
console.log( outerFn([[1],[2,3,4]], [[1],4]) ); //true

// #3
console.log( outerFn([9], [[8,7,6]]) ); //false

// #4
console.log( outerFn([[4,4],4,4], [[4,4],4,4,4]) ); //true

// #5
console.log( outerFn([7,7,7,7], [7,7,7]) ); //false

// #6
console.log( outerFn([], [3]) ); //true

// #7
console.log( outerFn([[[]]], [[]]) ); //false

// #8
console.log( outerFn([1,[2,[3,[4,[5,6,7]]]],8,9], [1,[2,[3,[4,[5,6,0]]]],8,9]) ); //false

