# ECMAScript (ES6)
* *JavaScript* 의 표준 사양으로, 프로그래밍 언어의 값, 타입, 객체와 프로퍼티, 함수, 표준 빌트인 객체 등 핵심 문법 규정

## let & const
```javascript
// let: 한번 선언한 변수는 재선언 안됨
let num = 99;
let num = 88; // Error


// const: 한번 할당한 값은 재할당 안됨
const b = 99;
b = 88; // Error


// 객체나 배열의 경우에는, 요소 변경이 가능
const user = {
    id: 123,
    name: "tommy"
};
console.log(user.name); // tommy
user.name = "jane";
console.log(user.name); // jane


// var 의 사용 범위
var i = 10;
for (var i = 0; i < 5; i++) {
    console.log(i); // 01234
}
console.log("i = ", i); // 5

var j = 10;
for (let j = 0; j < 5; j++) {
    console.log(j); // 01234
}
console.log("j = ", j); // 10
```

## Property Shorthand (단축 속성명)
```javascript
const id = "ssafy";
name = "tommy lee";
age = 25;

// 기존 방식
const user = {
    id: id,
    name: name,
    age: age,
    info: function() {
        console.log(this.id + "," + this.name);
    }
}

// Property Shorthand 이용
const user2 = {
    id,
    name,
    age,
    info() {
        console.log(this.id + "," + this.name);
    }
}
```

## Destructuring Assignment (비구조화 할당)
```javascript
// 배열이나 객체에 입력되어 있는 여러개의 값을 개별적인 변수에 할당하는 간편한 방식

// 객체
const user = {
    id: "ssafy",
    name: "tommy",
    age: 2
}

// 기존 방식
{
let id = user.id;
let name = user.name;
let age = user.age;
console.log(id, name, age);
}

// Destructuring Assignment
// user 객체안의 데이터 이름과 이 값을 받아가는 변수 이름이 같아야 함
{
let {id, name, age} = user;
console.log(id, name, age);
}
// 기존 이름과 다르게 할당하고 싶을 때
{
let {id:ssafyid, name:ssafyname, age:ssafyage} = user;
console.log(ssafyid, ssafyname, ssafyage);
}


// 배열
const arr = ["서울", "대전", "광주", "부산", "구미"];

// 기존 방식
{
const a1 = arr[0];
const a2 = arr[1];
const a3 = arr[2];
const a4 = arr[3];
const a5 = arr[4];
console.log(a1, a2, a3, a4, a5);
}

// Destructuring Assignment
{
const [a1, a2, a3, a4, a5] = arr;
console.log(a1, a2, a3, a4, a5);
}


// 객체를 리턴하는 함수
function getUser() {
    return {
        id: "123",
        name: "kim",
        age: 55
    }
}

// 기존 방식
{
let user = getUser();
let id = user.id;
let name = user.name;
let age = user.age;
console.log(id, name, age);
}

// Destructuring Assignment
{
let {id, name, age} = getUser();
console.log(id, name, age);
}

// 기존 방식
function showInfo(user) {
    console.log("id:", user.id);
    console.log("name:", user.name);
    console.log("age:", user.age);
}

// Destructuring Assignment
function showInfo2({id, name, age}) {
    console.log("id:", id);
    console.log("name:", name);
    console.log("age:", age);
}
```

## Spread Syntax (전개 구문)
```javascript
const user1 = {id: "ssafy1", name: "tommy"};
const user2 = {id: "ssafy2", name: "jane"};
const array = [user1, user2];

// 1. 배열 복사: 주소값 복사
const copy = [...array];

// 2. 배열에 값 추가
const add = [...array, {id:"ssafy3", name:"park"}];

// 3. 배열 결합
const arr1 = ["대전", "광주"];
const arr2 = ["서울", "부산"];
const total = [...arr1, ...arr2];

// 4. 객체 복사
const user3 = {...user1};

// 5. 객체 결합(key 가 같은 object 를 결합하면 마지막 객체가 기존값을 덮어쓴다)
const user4 = {...user1, ...user2};

const u1 = {id1: "abc"};
const u2 = {id2: "xyz"};
const x = {...u1, ...u2};
```

## Default Parameter
```javascript
function go (msg) {
    console.log(msg);
}
go("gogogo...");
go(); // undefined
go("a", "b", "c"); // a


function stop(msg = "기본 메세지") {
    console.log(msg);
}
stop("hello"); // hello
stop(); // 기본 메세지
```

## Template Strings
```javascript
// Template string: `` (backtick)
const id = "bill",
name = "bill gates",
age = 70;

console.log(name + "(" + id + ")님 나이는 " + age + "입니다");
console.log(`${name}(${id})님 나이는 ${age}입니다.`);
```

## Arrow Function
```javascript
// 화살표 함수: 이름이 없는 함수 이므로 변수에 담아서 사용
// function(a, b) {code}
// (param) => {code}
// param => {code} //parameter 가 1 개 일때
// () => {code} // parameter 가 없는 경우
// () => code // code 의 내용이 1줄 일때
function go() {}
const f1 = function() { // 익명함수
    console.log(123);
}
f1();

const f2 = () => {
    console.log(123);
};
f2();

const f3 = function(num) {
    console.log(++num);
}
f3(8);

const f4 = (num) => {
    console.log(++num);
}
f4(8);

const f5 = function(a, b) {
    return a + b;
}
console.log(f5(3, 4));

const f6 = (a, b) => a + b;
console.log(f6(6, 8));
```
