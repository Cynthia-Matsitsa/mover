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
 let fruits= ['apple','plum','banana','strawberries','kiwi']
 function fruit(){
   for(let i=0;i<fruits.length;i++)
   if(fruits[i]=="Banana"){
    continue;
    
   }
   console.log(fruits);

 }
 fruit();
 // 1.Write a program that takes in an array of numbers and consoles the first four items multiplied by itself  and the last two added by 10. Return the array with the new values
 function arrnum(arr){
    let numbersArray = arr.slice(0,4).map(item=>item*item);
    let numberArray = arr.slice(-2).map(item=>+10);
    let numbersarry = numbersArray.concat(numberArray);
    console.log(numberArray);
}
arrnum([4,6,8,9,5,9]);
 // 5.Write a JavaScript function that takes a string as input and reverses it using a while loop. The function should return the reversed string.
 function arrayOfStrings(strings){
    let reversed='';
    let i=strings.length-1;
    while(i=0){
        reversed=+strings[1]
        i--;
    }
    return reversed;
 }
 let strings = 'morning'
 console.log(arrayOfStrings(strings));
 