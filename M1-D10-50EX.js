/*JS EXERCISES

21) Given variable x = "John" and y = "Doe", write on the console log "John <> Doe"
22) Create an object with properties such name, surname, email
23) Delete Email from the previously created object
24) Create an array with 10 strings in it
25) Print in the console every string in the previous array
26) Create an array with 100 random numbers in it
27) Wrote a function to get the MAX and the MIN from the previously created array
28) Create an array of arrays, in which every array has 10 random numbers
29) Create a function that gets 2 arrays and returns the longest one
30) Create a function that gets 2 arrays of numbers and returns the one with the higher sum of values*/


//21
let x = "John";
let y = "Doe";
console.log(x + " <> " + y);

//22
let obj = {
    name: "Mickey",
    surname: "Mouse",
    email: "mickeymouse@disney.com",
};
console.log(obj);
    
//23
delete obj.email;
console.log(obj);

//24
let arrayOfString = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
console.log(arrayOfString);

//25
for (let i = 0; i < arrayOfString.length; i++) {
    console.log(arrayOfString[i])
};

//26
let arrayOfHundred = [];
for (let i = 0; i < 100; i++) {
    arrayOfHundred[i]=(Math.floor(Math.random() * 100))
}
console.log(arrayOfHundred)


//27
let maxMin = function (array) {
    let maxNumber = array[0];
    for (i = 0; i < array.length; i++) {
        if (array[i] > maxNumber) {
            maxNumber = array[i];
        }
    }
    let minNumber = array[0];
    for (i = 0; i < array.length; i++) {
        if (array[i] < minNumber) {
                minNumber = array[i];
        }
    }

    
    return [maxNumber, minNumber]
};
    
console.log(maxMin(arrayOfHundred))
    

//28 ---incompleto
let arrayOfTen = [];
let arrayOfArrays = [];
while (i < 5) {
    for (let s = 0; s < 3; s++) {
        arrayOfTen[s] = (Math.floor(Math.random() * 100))
    }
arrayOfArrays[i].arrayOfTen
}

console.log(arrayOfArrays)


/*for (let u = 0; u < arrayOfHun.length; u++) {
    for (let c = 0; c < 3; c++) {
        arrayOfArrays[i].arrayOfHun[c]
    }
}
 

console.log(arrayOfArrays)*/

/*
//29 
let longestArray = function (arr1, arr2) {
    if (arr1.length > arr2.length) {
        return arr1
    }
    else if (arr1.length < arr2.length) {
        return arr2
    }
    else if (arr1.length === arr2.length) {
        return ("both arrays have the same length")
    }
}

console.log(longestArray([1, 2, 3, "Sancho"], ["this", 7878, { name: "Dumbo" }]))
console.log(longestArray([3, "Sancho"], ["this", 7878, { name: "Dumbo" }]))
console.log(longestArray([2, 3, "Sancho"], ["this", 7878, { name: "Dumbo" }]))


//30

let highestSum = function (arrNum1, arrNum2) {
    let sumArrNum1 = 0;
    for (let i = 0; i < arrNum1.length; i++) {
        sumArrNum1 = sumArrNum1 + arrNum1[i];
    }
    
    let sumArrNum2 = 0;
    for (let i = 0; i < arrNum2.length; i++) {
        sumArrNum2 = sumArrNum2 + arrNum2[i];
    }

    if (sumArrNum1 > sumArrNum2) {
        return ("the first array has a bigger sum and it's " + sumArrNum1);
    }
    else if (sumArrNum1 < sumArrNum2) {
        return ("the second array has a bigger sum and it's " + sumArrNum2);
    }

    else if (sumArrNum1 === sumArrNum2) {
        return ("both arrays have the sume sum which is " + sumArrNum1)
    }
}

console.log(highestSum([1, 2, 3, 4], [3, 4]))
console.log(highestSum([1, 2, 3, 4], [30, 4]))
console.log(highestSum([1, 2, 3, 4], [3, 4, 3]))

*/