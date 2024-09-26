'use strict';

let obj = {
  name: '홍길동',
  age: 10,
  address: 'seoul'
}

// 특정 객체의 property의 descriptor 확인
console.log(Object.getOwnPropertyDescriptor(obj, 'name'));
// {value: '홍길동', writable: true, enumerable: true, configurable: true}

// writable 값 변경 못하게 하고자 할 때
Object.defineProperty(obj, 'age', { writable: false });
obj.name = '김길동';
// obj.age = 20; // error

// enumerable
console.log(Object.keys(obj)); // ['name', 'age', 'address']
console.log(Object.values(obj)); // ['김길동', 10, 'seoul']
console.log(Object.entries(obj));

// in 열거 예약어 - obj의 entry 개수만큼 for 반복
for (let property in obj) {
  console.log(property);
}

Object.defineProperty(obj, 'age', { enumerable: false })
console.log(Object.entries(obj));

for (let property in obj) {
  console.log(property);
}

// configurable
// writable을 false로 지정했다고 하더라도, 누군가가 true로 변경해서
// 값 변경을 할 수도 있음
Object.defineProperty(obj, 'age', { writable: true });
obj.age = 20;
// descriptor를 조정한 후에 다시 descriptor가 조정되지 못하게
Object.defineProperty(obj, 'age', { writable: false, configurable: false });
Object.defineProperty(obj, 'age', { writable: true });