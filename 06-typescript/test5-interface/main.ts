// ts에서 interface는 다른 언어처럼 class에
// 어떤 멤버(변수, 함수)가 꼭 선언되어 있게 강제하기 위해서 사용한다.
// + 클래스와 관련없이 타입을 지정하는 용도로도 사용이 가능

// 타입 지정
interface myInterface {
  id: number,
  name: string
};
// 타입 나열을 ,로 하지 않고 ;으로 나열해도 됨
interface myInterface2 {
  id: number;
  name: string;
};

let d1: myInterface2 = { id: 10, name: 'Lee' };

// 다른 interface를 상속받아서 새로운 interface를 만들 수도 있다.
interface myInterface3 extends myInterface2 {
  age
};
let d2: myInterface3 = { id: 10, name: 'Lee', age: 10 };

// 함수 타입
// 타입은 데이터 타입이다.
// 함수에서 데이터는? 매개변수, 리턴값
// 함수 타입은 함수의 매개변수와 리턴 타입
// (arg1: number) : number
// 어떤 함수가 매개변수로 함수를 받아야 하면 사용됨
// 아래처럼 선언하는 건 지원하지 않는다.
// function t1(argFun: (arg1: number): number) {}
interface myFunType {
  (arg1: number): number;
};
function t1(argFun: myFunType) { };
t1((no: number) => 10);

// interface를 클래스에서 사용
// interface에 멤버를 선언(변수, 함수), 선언만 하는 것이지 구체적인 값, 내용은 없고
// interface를 구현한 클래스 내에 interface의 멤버를 꼭 선언하게 강제
interface MyClassInterface1 {
  data1: number;
  some1(): boolean;
}

interface MyClassInterface2 {
  data2: number;
  some2(): boolean;
}

class MyClass implements MyClassInterface1, MyClassInterface2 {
  data1: number = 10;
  data2: number = 20;
  some1(): boolean {
    return true
  }
  some2(): boolean {
    return true
  }
}