"use strict";

// 1 ~ 10까지 더하기
let no = 1
let sum = 0
while(no <= 10){
  sum += no
  no++
}
console.log(`sum: ${sum}`);

// while body 안이 어차피 실행이 안 되니 VSCode가 흐리게 표현해 줌
while(false){
  console.log('while body');
}

// while(false)는 동일하지만, do-while문은 무조건 최초에 한 번은 실행해야 될 경우
do {
  console.log('do while body');
}while(false)

let i = 1
while(i <= 9){
  console.log(`2 X ${i} = ${2*i}`);
  i++
}