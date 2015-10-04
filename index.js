/**
 * Created by Woojin on 2015-10-03.
 */

var http = require('http');

http.createServer(function (req, res) {
    // 인자를 파싱한 URL
    var _url;

    // 메소드명을 소문자로 사용하는 클라이언트에 대비해서 대문자로 통일
    req.method = req.method.toUpperCase();
    console.log(req.method + ' ' + req.url);

    if (req.method !== 'GET') {
        res.writeHead(501, {
            'Content-Type': 'text/plain'
        });
        return res.end(req.method + ' is not implemented by this server.');
    }

    if (_url = /^\/employees$/i.exec(req.url)) {
        // 직원목록 반환
        res.writeHead(200);
        return res.end('employee list');
    } else if (_url = /^\/employees\/(\d+)$/i.exec(req.url)) {
        // 라우트에 포함된 id로 직원 검색
        res.writeHead(200);
        return res.end('a single employee');
    } else {
        // 정적 파일 전송
        res.writeHead(200);
        res.end('static file maybe');
    }
}).listen(1337, '127.0.01');

console.log('Server running at http://127.0.0.1:1337/');


