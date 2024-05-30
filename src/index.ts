import {WebSocketServer} from 'ws';
import url from 'url';

const wss = new WebSocketServer({port: 8080});

wss.on('connection', function connection(ws, req){
    //@ts-ignore
    const token:string = url.parse(req.url, true).query.token;
    
    ws.on('close', ()=>{

    });
});
console.log('done');
