"use strict"

// 산술 연산자
let data1 = 10
let data2 = 4
console.log(data1 + data2); // 14
console.log(data1 - data2); // 6
console.log(data1 * data2); // 40
console.log(data1 / data2); // 2.5
console.log(data1 % data2); // 2

// 증감 연산자
let data3 = 10
data3++
console.log(data3); // 11
++data3
console.log(data3); // 12
data3--
console.log(data3); // 11
--data3
console.log(data3); // 10


console.log('-------연산자 우선순위-------');
let data4 = 10
let data5 = 10
let result1 = data4++
let result2 = ++data5
console.log(data4, result1); // 11 10
console.log(data5, result2); // 11 11

console.log('-------할당 연산자-------');
let a1 = 10
a1 = a1 + 10
console.log(a1); // 20
a1 += 10
console.log(a1); // 30

console.log('------- + 연산자-------');
console.log(10 + 20); // 30
console.log('hello' + 'world'); // helloworld
console.log('hello' + 10); // hello10
console.log('10' + '20'); // 1020
console.log(10 + '20'); // 1020
// 문자를 숫자로 변형시켜서 연산시킬 수 있다.
// 물론 문자가 숫자로 변형 가능한 데이터여야 한다.
console.log(10 + parseInt('20')); // 30
// 숫자 -> 문자열
console.log((10).toString() + 20);
// js는 명시적 타입은 없지만
// 타입변형 시켜서 숫자 <-> 문자
// 타입변형. 캐스팅(casting)이라는 용어로 부른다.

console.log('-------비교 연산-------');
let a2 = 10
let a3 = 10
console.log(a2 == a3); // true
console.log(a2 != a3); // false
console.log(a2 === a3); // true
console.log(a2 !== a3); // false

a2 = 10
a3 = '10'
console.log(a2 == a3); // true
console.log(a2 != a3); // false
console.log(a2 === a3); // false
console.log(a2 !== a3); // true

console.log(5 < 10); // true
console.log(5 < '10'); // true
console.log('hello' < 'world'); // true: 크냐 작냐를 비교하니, 숫자값으로 변환(아스키코드로) 후 비교
console.log('abc' < 'abd'); // true: 첫 번째, 두 번째 자리가 동일하면 그 다음 자리에서 비교
console.log('이길동' < '김길동'); // false: 한글도 동일하게 적용

let a4 = true
console.log(a4); // true
console.log(!a4); // false
