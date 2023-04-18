// 자바스크립트에서 객체지향 방식으로 만들기
// - 객체의 원형을 프로토타입이라 하고 이 프로토타입이 클래스의 역할을 함
// - 프로토타입을 만들고 new 연산자를 이용해 새로운 객체를 만들어낼 수 있음

// Person 프로토타입을 만들고 객체 생성하기
// - Person이라는 이름의 함수를 만들고 프로토타입 객체로 사용
// - new 연산자를 사용하는 시점에 생성자 함수로 동작

var person1 = {name:'소녀시대', age:20}
var person2 = {name:'걸스데이', age:21}

function Person(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.walk = function(speed) {
    console.log(speed + 'km 속도로 걸어갑니다.');
};

var person3 = new Person('오렌지캬라멜', 20);
var person4 = new Person('아이유', 19); 

person3.walk(10);



