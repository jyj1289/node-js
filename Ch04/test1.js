// url 모듈의 주요 메서드

// parse 와 format 사용
// parse() : 주소 문자열을 파싱하여 URL 객체를 만들어 준다
// format() : URL 객체를 주소 문자열로 변환한다

var url = require('url')

var urlStr = 'https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=node'

var curUrl = url.parse(urlStr)
console.dir(curUrl)

console.log('query -> ' + curUrl.query)

var curStr = url.format(curUrl)
console.log('url -> ' + curStr)

var querystring = require('querystring')
var parmas = querystring.parse(curUrl.query)

console.log('검색어 : ' + parmas.query)