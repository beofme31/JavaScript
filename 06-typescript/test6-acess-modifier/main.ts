class SuperClass {
  // 매개변수는 로컬 variable
  // 아래 매개변수는 아래 생성자 내에서만 사용이 되니 some()에서 사용되지 않음
  // 생성자에 한해서만, 매개변수에 접근제한자를 추가하면 곧 멤버 변수가 된다.
  // 원래 로컬 변수에는 접근제한자 추가 못한다.
  // constructor(id: string, age: number, address: string) { }
  // 접근제한자 추가
  constructor(public id: string, public age: number, private address: string) { }

  email = 'a@A.com';
  private phone = '1111';
  protected url = 'http://www.google.com';

  some() {
    console.log(this.id, this.age, this.address)
  };
};

let superObj = new SuperClass('Lee', 10, 'Pusan');
superObj.some();
superObj.age = 20;
// superObj.adress = 'seoul'; // 접근 범위가 한정되어서 error
// superObj.url = '~~~' // protected도 마찬가지

class SubClass1 extends SuperClass {
  some() {
    this.age = 30;
    this.url = '~~';
    // this.address = 'aaa'; // 하위라고 해도 안됨, error
  };
};