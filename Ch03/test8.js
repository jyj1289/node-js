var users = [{name:'소녀시대', age:20}, {name:'걸스데이', age:22}, {name:'티아라', age:21}];

for (var i = 0; i < users.length; i++){     // C style for 문이다
    console.log('배열 원소 #' + i + ' : ' + users[i].name)
}

// JavaScript 에서는 C 스타일 for문 보다 for each를 많이 사용한다

users.forEach(function(elem, index){
    console.log('배열 원소 #' + index + ' : ' + elem.name)
});

// 배열의 끝에 원소를 추가하거나 삭제할 때 : push, pop
// 배열의 앞에 원소를 추가하거나 삭제할 때 : unshift, shift
// 여러 개의 원소를 한꺼번에 추가하거나 삭제할 때 : splice