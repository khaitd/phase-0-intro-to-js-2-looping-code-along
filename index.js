// Code your solutions in this file
function writeCards(arr,event){
    let newArr = [];
    for(let i =0; i < arr.length; i++){
        newArr[i] = "Thank you, " + arr[i] +", for the wonderful " + event + " gift!";
    }
    return newArr;
}

function countDown(n){
    while(n >= 0){
        console.log(n);
        n--;
    }
}

console.log(countDown(10))