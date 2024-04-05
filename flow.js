// 4 Write a function that accepts an array of strings and console.logs each element using a for loop
function myString(){
    let fruits=["Banana","Mango","quava","Lemon"];
    for(element of fruits){
        console.log({element})

    }
}
myString();


// 2 Write a program that takes in the following array and use a while loop to iterate and break when the item is equal to the fourth index :let arrNum = [1,2,3,4,5,6,7,8,9]
let arrNum = [1,2,3,4,5,6,7,8,9];
let y = 0 ;
while(y<arrNum.length){
    if(arrNum[y]===arrNum[3]){
        break ;
    }
    console.log(arrNum[y]);y++;
}
// 3 Write a function that takes in a an array of strings and use a continue statement when the item is at the second index:  let fruits= ['apple','plum','banana','strawberries','kiwi']

