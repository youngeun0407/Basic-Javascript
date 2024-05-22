const users = [
  {
    이름: "철수",
    나이: 19,
    성별: "남",
  },
  {
    이름: "짱구",
    나이: 20,
    성별: "남",
  },
  {
    이름: "유리",
    나이: 21,
    성별: "여",
  },
];
console.log(users);

const userContainer = document.querySelector(".user-container");
const names = document.querySelectorAll(".name");
const ages = document.querySelectorAll(".age");
const genders = document.querySelectorAll(".gender");

users.forEach(function (users) {
  let html템플릿 = `<div class="user-container">
										<h3 class="name">이름: ${users.이름}</h3>
										<h3 class="age">나이: ${users.나이}</h3>
                    <h3 class="gender">성별: ${users.성별}</h3>
									</div>`;
  userContainer.insertAdjacentHTML("beforeend", html템플릿);
});

//3번
const girl = users.find((user) => {
 console.log(user);
  return (user.성별 === "여"); 
});
console.log(girl);

//4번
const boy = users.filter((user) => {
  return (user.성별 === "남");
});

console.log(boy);
//위의 문제와 동일하게 콘솔에 모두 "남"으로 표기됨

//5번
// const newAge = users.map(user => {
//   return {
//   ...user,
//   나이: user.나이 + 10
//   }
//   })

const newAge = users.map((user) => {
  return {
    이름: user.이름,
    나이: user.나이 + 10,
    성별: user.성별,
  };
});
console.log(newAge); //콘솔 모든 정보가 철수의 정보로 출력
console.log(users); //1번과 동일한 결과 유리가 "남"으로 출력

//6번
let a = { ...users };
console.log(a);
users.sort((a, b) => {
  return b.나이 - a.나이;
});
console.log(users);

//7번
const user = {
  이름: "병수",
  나이: 20,
  주소: "시골",
};
const { 이름, 나이, 주소 } = user;
console.log(user);
