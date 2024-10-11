var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SuperClass = /** @class */ (function () {
    // 매개변수는 로컬 variable
    // 아래 매개변수는 아래 생성자 내에서만 사용이 되니 some()에서 사용되지 않음
    // 생성자에 한해서만, 매개변수에 접근제한자를 추가하면 곧 멤버 변수가 된다.
    // 원래 로컬 변수에는 접근제한자 추가 못한다.
    // constructor(id: string, age: number, address: string) { }
    // 접근제한자 추가
    function SuperClass(id, age, address) {
        this.id = id;
        this.age = age;
        this.address = address;
        this.email = 'a@A.com';
        this.phone = '1111';
        this.url = 'http://www.google.com';
    }
    SuperClass.prototype.some = function () {
        console.log(this.id, this.age, this.address);
    };
    ;
    return SuperClass;
}());
;
var superObj = new SuperClass('Lee', 10, 'Pusan');
superObj.some();
superObj.age = 20;
// superObj.adress = 'seoul'; // 접근 범위가 한정되어서 error
// superObj.url = '~~~' // protected도 마찬가지
var SubClass = /** @class */ (function (_super) {
    __extends(SubClass, _super);
    function SubClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SubClass.prototype.some = function () {
        this.age = 30;
        this.url = '~~';
        this.address = 'aaa'; // 하위라고 해도 안됨, error
    };
    ;
    return SubClass;
}(SuperClass));
;
