"use strict";

let area1 = document.getElementById('area1')
let area2 = document.getElementById('area2')
let area3 = document.getElementById('area3')

// 아래의 코드는 node.style, 즉 DOM Node Tree에서 획득한 것이다.
// Node Tree에 유지되는 CSS 정보는 inline style만
console.log(area1.style.width); // 200px
console.log(area2.style.width); //
console.log(area3.style.width); //

// css 속성명: camel case로 이용해야 한다.
console.log(area1.style.height); // 200px
console.log(area1.style.backgroundColor); // green

// node의 css 속성 값 변경
area1.addEventListener('click', function () {
  area1.style.backgroundColor = 'yellow'
  area1.style.borderRadius = '50%'
})

// inline style이 아닌 외부에 선언되어 적용된 css 값 획득
// style 태그 혹은 외부 css 파일
console.log(getComputedStyle(area1).width); // 200px
console.log(getComputedStyle(area2).width); // 200px
console.log(getComputedStyle(area3).width); // 200px