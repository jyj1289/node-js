console.log('Hello world')

console.log('숫자입니다. %d', 10)
console.log('문자열입니다. %s', '안녕')

var person = {
    name : '홍길동',
    age : 20
};
console.log('JSON객체입니다. %j', person)   // %j는 json파일을 포맷팅 할 때 사용한다

// console : 전역객체
// - 언제어디서든 사용할 수 있다

console.dir(person)   // dir(객체) - dir : 객체를 출력해준다
                      
console.time('duration_time')  // 시간을 체크해주는 함수                    

var result = 0;                      
for (var i = 0; i < 10000; i++){
    result += 1;
}

console.timeEnd('duration_time')    // time ~ timeEnd 사이의 걸린 시간을 출력해준다

console.log('파일 이름 : %s', __filename)
console.log('패스 : %s', __dirname)