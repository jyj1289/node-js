// 함수(function)
// - 파라미터의 타입과 반환되는 값의 타입을 명시하지 않음
// - 함수 앞에서는 function 키워드를 붙임

// 함수를 변수에 할당하기
// - 자바스크립트에서는 함수를 일급 객체(First class object)로 다룸
// - 따라서, 함수가 변수에 할당될 수 있음
// - 변수에 할당될 경우 두 가지 이름으로 함수를 호출할 수 있으므로 
//   원래의 함수 이름을 생략하고 익명함수(Anonymous Function)라고 부름

function add(a, b) {
    return a + b;
}

var result = add(10, 10);
console.log('더하기 결과 : ' + result);

var add2 = function (a, b){
    return a + b;
}

var result2 = add2(10, 10);
console.log("더하기 결과 : " + result2);

