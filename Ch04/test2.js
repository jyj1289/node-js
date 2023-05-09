// 이벤트
// - 비동기 방식으로 처리하기 위해 한 쪽에서 다른 쪽으로 데이터 전달
// - EventEmitter 사용
// - 한 쪽에서 이벤트를 emit으로 보내고 다른 쪽에서 리스너를 등록하여 on으로 받음

process.on('exit', function() {
    console.log('exit 이벤트 발생');
});

setTimeout(function() {     // 뒤에 파라미터는 시간을 받는다, 시간이 지나고 앞에 파라미터의 함수를 사용한다
    console.log('2초 후에 실행되었음');

    process.exit;
}, 2000);

console.log('2초 후에 실행될 것임');