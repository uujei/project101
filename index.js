/**
 * Created by Woojin on 2015-10-03.
 */

var http = require('http');

http.createServer(function (req, res) {
    // ���ڸ� �Ľ��� URL
    var _url;

    // �޼ҵ���� �ҹ��ڷ� ����ϴ� Ŭ���̾�Ʈ�� ����ؼ� �빮�ڷ� ����
    req.method = req.method.toUpperCase();
    console.log(req.method + ' ' + req.url);

    if (req.method !== 'GET') {
        res.writeHead(501, {
            'Content-Type': 'text/plain'
        });
        return res.end(req.method + ' is not implemented by this server.');
    }

    if (_url = /^\/employees$/i.exec(req.url)) {
        // ������� ��ȯ
        res.writeHead(200);
        return res.end('employee list');
    } else if (_url = /^\/employees\/(\d+)$/i.exec(req.url)) {
        // ���Ʈ�� ���Ե� id�� ���� �˻�
        res.writeHead(200);
        return res.end('a single employee');
    } else {
        // ���� ���� ����
        res.writeHead(200);
        res.end('static file maybe');
    }
}).listen(1337, '127.0.01');

console.log('Server running at http://127.0.0.1:1337/');


