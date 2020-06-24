var arr = [
    "Jakarta","Aceh","Malang","Medan","Bontang",
    "Jogja","Jakarta","Bandung","Malang","Solo","Palembang","Bandung"
];

function getDuplicates(arr) {
    var arry2 = [];

    for(var value of arr){
        if(arry2.indexOf(value) === -1){
            arry2.push(value);
        }
    }

    return arry2;
}


var array_duplicates = getDuplicates(arr);
console.log(array_duplicates);

// var arr2 = [];
// let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) != index)
// // console.log(arr);

// arr.splice(arr.indexOf(findDuplicates(arr)));

// console.log(arr);

// // console.log(findDuplicates(arr));

// // console.log(findDuplicates(arr).splice());



// // console.log(arr);

