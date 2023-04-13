var path = require('path')

var directroies = ['Users', 'Yujin', 'docs']
var dirStr = directroies.join()
console.log('dir : ' + dirStr)

var dirStr2 = directroies.join(path.sep)
console.log('dir2 : ' + dirStr2)

var filepath = path.join('/Users/Yujin', 'notepad.exe')
console.log('filepath : ' + filepath)

var dirname = path.dirname(filepath)
console.log('dirname : ' + dirname)     // dirname : 파일명을 제외한 폴더의 경로를 알려줌
var basename = path.basename(filepath)  // basename : 파일일명을 알려줌
console.log('basename : ' + basename)
var extname = path.extname(filepath)    // extname : 확장자명을 알려줌
console.log('extname : ' + extname) 





