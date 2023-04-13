var calc2 = require('./calc2')

console.log('모듈로 분리한 후 - calc2.add : ' + calc2.add(30, 30))

var nconf = require('nconf')        // 외부 모듈이라서 npm install 모듈명으로 다운로드
nconf.env()
var value = nconf.get('OS')
console.log('OS 환경변수의 값 : ' + value)