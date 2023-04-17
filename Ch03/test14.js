function add(a, b, callback){
    var result = a + b
    callback(result)

    var histroy = function(){
        return a + ' + ' + b + ' = ' + result
    }

    return histroy
}

var add_histroy = add(20, 20, function(result){
    console.log('더하기 결과 : ' + result)
})

console.log('add_histroy의 자료형 : ' + typeof(add_histroy))

console.log('결과값으로 받은 함수 실행 : ' + add_histroy())

