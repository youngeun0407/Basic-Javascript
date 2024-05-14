document.querySelector(".btn").addEventListener("click", function(){
    document.querySelector(".title").innerHTML ="제목아니다";
});

function sum(num1, num2){
return num1+num2;
};

console.log(sum(1,2)); //성공!


function isEvenOrOdd(num){
if(num%2 === 0){
   console.log(num+"은(는) 짝수입니다");
}
else{
    console.log(num+"은(는) 홀수입니다");
};
};
isEvenOrOdd(32);

const name = '영은'
const age = 31
console.log(`이름: ${name}`);
console.log(`나이: ${age}`);