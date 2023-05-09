var Calc = require('./calc');

var calc1 = new Calc();
calc1.emit('stop');

console.log('Calc에 stop 이벤트 전달함')        // 전달되는 속도가 더 빠르기 때문에 이 코드가 더 늦게 출력된다