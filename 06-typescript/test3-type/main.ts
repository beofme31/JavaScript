// 데이터 타입이 지정되면 그 타입에 맞는 데이터가 대입되어야 한다.
let data: number = 10;
// data = 'hello' // error

// any 타입: 모든 타입의 데이터 대입 가능, 권장하지는 않는다.
let data1: any = 10;
data1 = 'hello';
data1 = true;
data1 = {};

// 타입 유추 기법도 제공된다, 변수 선언시에 타입을 지정하지 않고
// 대입되는 데이터로 타입을 유추
// 그렇지만 js와 다르다. js처럼 사용하는 것은 any
// 개발자가 타입을 지정하지 않는 것뿐이지 초기 데이터에 의해 타입이 고정
let data2 = 10; // 여기에서 숫자로 타입이 고정됨
data2 = 20;
// data2 = 'hello'; // error, data2는 number 타입이니까 에러 남

// void도 타입이므로 변수 타입으로 지정이 가능하기는 하지만
// undefined만 대입이 가능하므로, 변수 타입으로 사용하는 것은 의미가 없다.
let data3: void = undefined;
// data3 = null // error
// data3 = 10 // error

// void는 함수의 리턴 타입
function f1(): number {
  // 함수 내에서 리턴 타입의 데이터를 리턴시켜야
  return 10
}

function f2(): void {
  return 10 // error
}