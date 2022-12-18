export function isInteger(input){
    return typeof input === "number";
}

export function isLeftHandSideLower(leftHandSide, rightHandSide){
    return leftHandSide < rightHandSide;
}

export function isLeftHandSideHigher(leftHandSide, rightHandSide){
    return leftHandSide > rightHandSide;
}

export function isArray(input) {
    return Array.isArray(input);
}

export function isUndefined(input) {
    return input === undefined;
}

export function isEqual(leftHandSide, rightHandSide){
    return leftHandSide === rightHandSide;
}


export function totalScore(scoreList) {
    return scoreList.reduce( (acc, curr) =>  ( acc + curr ), 0);
}