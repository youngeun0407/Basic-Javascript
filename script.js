
//7번
const user = {
  이름: "병수",
  나이: 20,
  주소: "시골"
};

// 1. 객체를 JSON 문자열로 변환하여 로컬스토리지에 저장
localStorage.setItem('user', JSON.stringify(user));

// 2. 로컬스토리지에서 데이터를 조회하고 객체로 변환
const storedUser = localStorage.getItem('user');
const userObject = JSON.parse(storedUser);
console.log(userObject);

// 3. 나이를 30으로 변경 후 다시 로컬스토리지에 저장
userObject.나이 = 30;
localStorage.setItem('user', JSON.stringify(userObject));

// 4. 로컬스토리지에서 user 데이터를 삭제하고 조회
localStorage.removeItem('user');
const deletedUser = localStorage.getItem('user');
console.log(deletedUser); // null


//메소드:get 생략가능! 
fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((json) => console.log(json));