var users = [{name:'소녀시대', age:20}, {name:'걸스데이', age:22}];

console.log('배열 원소의 개수 : ' + users.length)

users.unshift({name:'티아라', age:21})
console.log('배열 원소의 개수 : ' + users.length)

console.dir(users)

var elem = users.shift();
console.log('배열 원소의 개수 : ' + users.length)

console.log('shift으로 꺼낸 1번째 요소')

console.dir(elem)

