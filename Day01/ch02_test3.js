// 모듈
// - 별도의 파일로 분리된 독립 기능을 모듈이라고 함
// - 모듈을 만들어 놓으면 다른 파일에서 모듈을 불러와 사용할 수 있음
// - CommonJs표준 스펙을 따르며 exports 전역 객체를 사용함

// main.js
/*
    var module1 = require('module1')
    module1.함수이름()
*/

// module1.js
// exports.함수이름 = 함수정의

// exports와 module.exports의 사용
// - 모듈 파일 안에서는 exports를 사용할 수도 있고 module.exports를 사용할 수도 있음
// - 객체를 직접 할당하려면 module.exports를 사용함

// module1.js
/*
    exports.add = function(a, b){
        return a + b
    }

    exports.multiply = function(a, b){
        return a * b
    }

*/


// module2.js
/*
    var calc = {}

    calc.add = function(a, b){
        return a + b
    }

    calc.multiply = function(a, b){
        return a * b
    }

    module.exports = calc

*/

var calc = {};

calc.add = function(a, b){
    return a + b
};

console.log('모듈로 분리하기 전 - calc.add : ' + calc.add(10, 10))


