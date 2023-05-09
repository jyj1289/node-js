process.on('tick', function(count){
    console.log('tick 이벤트 발생함 : ' + count)
})

setTimeout(function(){
    console.log('2초 후에 실행되었음')

    process.emit('tick', '2')       // 이벤트는 emit에서 보내고 on에서 받는다
}, 2000);
