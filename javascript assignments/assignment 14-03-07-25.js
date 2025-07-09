const a=[1,2,3];
const b=a;
b.push(4);
console.log(a);   


const arr=[1,2,3]
arr.length=0;
console.log(arr[0]);   

const m = [1, 2, 3];
const n = m.slice(0, 2);
n[0] = 100;
console.log(m);   


const arri = [1, [2, [3, [4]], 5]];
const flatArr = arri.flat(Infinity);
console.log(flatArr); 


function removeDuplicates(arr) {
    let unique = [];
    for (let i = 0; i < arr.length; i++) {
        if (!unique.includes(arr[i])) {
            unique.push(arr[i]);
        }
    }
    return unique;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));


function findSecondLargest(arr) {
    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (let num of arr) {
        if (num > largest) {
            secondLargest = largest;
            largest = num;
        } else if (num > secondLargest && num !== largest) {
            secondLargest = num;
        }
    }

    return secondLargest;
}

console.log(findSecondLargest([10, 5, 8, 1, 9])); 


const arry = [
    {name: "John", age: 30},
    {name: "Alice", age: 25},
    {name: "John", age: 22}
];
arry.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
   return a.age - b.age;
});

console.log(arry);



