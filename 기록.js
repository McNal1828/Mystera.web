{
    var causion = `
    미들웨어나 함수나 express(nodejs)에서는 거의 같은걸로 쓰임.
    npm init : package.json 만들어줌
    npm install 이름 : 그 프로젝트에만 설치해줌, 전역적으로 쓸거면 -g 옵션추가;
    npm install : package.json 에 있는 dependancies를 이용해서 필요한 패키지 설치해줌
        res.writeHead(302,{
            Location: encodeURI(한글주소사용가능)
        })
    static파일요청할때 기본주소설정가능
        app.use(express.static('static'));
    view engine과 views폴더 지정가능
        app.set('view engine','ejs');
        app.set('views',__dirname+'/view');
    라우팅기능제공
        const MysteryaRouter = require('./router/mystera');
        app.use('/Mysterya', MysteryaRouter);

        const router = express.Router();
        router.get('/player/list', (req,res)=>{
        });
        라우터는 main에서 지정한 주소이후만쳐줘도됨


    querystring으로 전달되는값에다가 ../붙여서 서버의파일을 읽어낼수도있음
    =>  const id = req.params.pageid;
        const fileteredId = path.parse(id).base;
        path 모듈로 파싱해서 base만 얻어내면 경로빼고 얻을수있음

    데이터값에다가 script나 태그를달거나 숨겨서 입력해서 페이지불러올때 염병할수있음
    =>  const sanitizedId = sanitizeHtml(id);
        const sanitizedData = sanitizeHtml(data);
        sanitize-html 모듈을 이용해서 태그내용을 삭제하고 문자열로 내보내줄수있음

    middleware bodyparser사용
    post로 넘어오는 혹은 json 으로 넘어오는 data 분석해줌
    form data
    app.use(bodyParser.urlencoded({extended:false}));
    json data
    app.use(bodyParser.json());
    이를이용하면 원래는 넘어오는 데이터들을 
        let datas='';
        req.on('data',(data)=>{
        //post 방식으로 전달된 'data'를 조각조각 수신할때마다 callback 함수 호출
            datas += data;
        });
        req.on('end',()=>{
        //data 수신이 끝났을때 callack 함수 호출
            let post = qs.parse(datas);
            //querystring으로 파싱해줌
        }
        let title = path.parse(post.title).base;
    이런식으로 해야하는데
        const post = req.body;
        const id = post.id;
        const fileteredId = path.parse(id).base;
    이렇게 축약가능. post데이터를 req객체의 body에 넣어서 전달해줌

    middleware compression사용
    데이터를 알아서 압축해서 전송해줌
    app.use(compression());

    middleware helmet, helmet-csp 사용
    https처럼 보안관련
        app.use(helmet());
        app.use(
            csp({
            useDefaults: true,
            directives: {
                defaultSrc: ["'self'",],
                scriptSrc: ["'self'", "cdn.jsdelivr.net"],
                objectSrc: ["'none'"],
                upgradeInsecureRequests: [],
            },
            reportOnly: false,
            })
        );
    helmet-csp는 페이지에서 js쓸수있게해줌, 특정링크 추가해서
    
    

        `;
}
{ 
    var explain='async와 await을 안붙여도 알아서 비동기로 작동하는 함수가있다' ;

    router.get('/player/list', (req,res)=>{
        let header='';
        ejs.renderFile('view/mysterya/mainFooter.ejs', (err,str)=>{
                header = str;
        });
        console.log('header ='+header);
        ejs.renderFile('view/mysterya/mainHeader.ejs',{hh : 'ss'}, (err,str)=>{
                header = str;
        });
        console.log('header ='+header);
        res.render('mysterya/mainLayout.ejs',{hh:header});
    });
}
{
    var explain='반면 async와 await을 붙여도 비동기로 동작안하는 함수도있다';

    app.get('/', (req,res)=>{
        let dd=0;
        fs.readdir('./', 'utf-8', (err, files) => {
            dd = files.length;
            console.log('root');
            console.log(dd);
        });
        fs.readdir('./static', 'utf-8', (err, files) => {
            dd = files.length;
            console.log('static');
            console.log(dd);
        });
        console.log(dd);
        res.send(`기본페이지 ${dd}`);
    });
}
{   
    var explain='async함수안의 asyncg함수에 await을 붙여서 다될때까지기다릴수있다.';
    router.get('/player/:playerNumber',async (req,res)=>{
        const playerNumber = req.params.playerNumber;
        const sqls =[];
        sqls.push(`select * from ra_yearlist`);
        sqls.push(`select * from numposition`);
        sqls.push(`select * from player`);
    
        const results = await connection.connect(sqls);
        console.log("완료");
        // res.render('../view/mysterya/playerDetail.ejs');
        res.render('mysterya/playerDetail.ejs');
    });

    module.exports={
        connect : async (sqls)=>{
            const mysql = require('mysql2/promise');
            let results=[];
            const conn = await mysql.createConnection({
            host : '192.168.0.251',
            user : 'dbwj',
            password : 'votmdnjem',
            database : 'mysterya',
            charset : 'utf8',
            port : 3336,
            multipleStatements : false,
            });
            for(var i =0; i<sqls.length;i++){
                // console.log(sqls[i]);
                console.log(i+'시작');
                console.log(sqls[i]);
                const [rows,fields] = await conn.execute(sqls[i]);
                results.push(rows);
                console.log(i+'끝');
                // console.log(rows[0]);
            }
            conn.end();
            return results;
            },
        };

    var ternimal= `
    0|main   | 0시작
    0|main   | select * from ra_yearlist
    0|main   | 0끝
    0|main   | 1시작
    0|main   | select * from numposition
    0|main   | 1끝
    0|main   | 2시작
    0|main   | select * from player
    0|main   | 2끝
    0|main   | 완료
    `;
}
{
    var explain='그냥 비동기로 하나씩 기다릴수도있지만 전체를 기다릴수도있다';
    router.get('/ranking/year/:year',async (req,res)=>{
        async function test(sql){
            return new Promise((resolve, reject)=>{
                const results =  connection2.connect(sql);
                resolve(results);
            });
        }
        async function test1(){
            await Promise.all([
                test(`select * from ra_yearlist`),
                test(`select * from numposition`),
                test(`select * from pa_tobase`)
            ]).then((results)=>{
                rr=results;
            });
        }
        let rr=[];
        await test1();
        console.log(rr);
        res.end('ss');
    });
    module.exports={
        connect : async (sql)=>{
            const mysql = require('mysql2/promise');
            let results=[];
            const conn = await mysql.createConnection({
            host : '192.168.0.251',
            user : 'dbwj',
            password : 'votmdnjem',
            database : 'mysterya',
            charset : 'utf8',
            port : 3336,
            multipleStatements : false,
            });
            console.log('시작');
            const [rows,fields] = await conn.execute(sql);
            results.push(rows);
            console.log('끝');
            // console.log(rows[0]);
            conn.end();
            return results;
            },
        };

        var ternimal=`|main   | 시작
        0|main   | 시작
        0|main   | 시작
        0|main   | 끝
        0|main   | 끝
        0|main   | 끝
        0|main   | [
        0|main   |   [ [ [Object], [Object] ] ],
        0|main   |   [
        0|main   |     [
        0|main   |       [Object], [Object],
        0|main   |       [Object], [Object],
        0|main   |       [Object], [Object],
        0|main   |       [Object], [Object],
        0|main   |       [Object]
        0|main   |     ]
        0|main   |   ],
        0|main   |   [
        0|main   |     [
        0|main   |       [Object], [Object], [Object],
        0|main   |       [Object], [Object], [Object],
        0|main   |       [Object], [Object], [Object],
        0|main   |       [Object], [Object], [Object],
        0|main   |       [Object], [Object], [Object],
        0|main   |       [Object], [Object], [Object],
        0|main   |       [Object], [Object], [Object]
        0|main   |     ]
        0|main   |   ]
        0|main   | ]
        0|main   | 완료`;
}
{
    var explain=`ejs사용할때 <% %> 안에 넣어주면된다.
    app.set('view engine','ejs');
    app.set('views',__dirname+'/view');
    메인에 위두줄 입력해주면 view가 들어가있는 기본 폴더지정가능하고 ejs를 엔진으로쓴다고 입력가능
    근데 res.render(경로,{변수명:변수값})일때는 동작하는데
    let header;
    ejs.renderFile('view/mysterya/mainHeader.ejs',{hh : 'ss'}, (err,str)=>{
        header = str;
    };
    그냥 ejs를 쓸때는 안됨, 웃긴건 경로설정도 /, ../, 다 인식못하는데 그냥 없이입력하면 인식함.
    기본경로를 process.cwd(), 즉 main.js 부터 시작한다는데 그러면 그냥 /는 인식해야하는거아닌가
    파일의위치로하려면 앞에 __dirname 쓰면된다.

    tiles 처럼쓸라면 include쓰는게나아보이는데 include안의 변수명에 변수설정하고 res.render할때 써주는게편할지
    아니면 위에처럼 그냥 <%- header %> 하고 파일읽어서 전체를 입력하는게 나을지 생각은좀해봐야할거같음.
    `;
    var object ={
        '<% for어쩌구 %>' : '사이에 코드입력가능',
        '<%- 변수명 %>' : '사이에 html그대로 입력가능',
        '<%- include(path,{변수명:변수값}) %>' : '사이에 다른 ejs입력가능, 이때 include가 포함된 아이를 render할때 변수값을 변수명으로해서 변수값 넣어주면 알아서입력됨',
        '<%= 변수명 %>' : '사이에 변수의 값입력가능, html코드 넣으면 문자그대로들어감',
    };
    
}