let express = require('express');
let exphbs  = require('express-handlebars');

let app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// 指定端口
app.listen(3000);

// 中间件
app.use(express.static(__dirname + '/public'));

let fortunes = [
    '剑阶从者',
    '枪阶从者',
    '术阶从者',
    '狂阶从者',
    '弓阶从者'
]

// 制定路由
app.get('/', (req, res)=> {
    res.render('home');
});
app.get('/about', (req, res)=> {
    let randFortune = 
        fortunes[Math.floor(Math.random() * fortunes.length)];
    res.render('about', {fortune:randFortune});
});

// 定制404页面
app.use((req, res)=> {
    res.status(404);
    res.render('404');
});

// 定制500页面
app.use((req, res)=> {
    console.error(err.stack);
    res.status(500);
    res.render('500');
});

app.listen(app.get('port'), () => {
    console.log(`Express started on http://localhost:${app.get('port')}; press Ctrl-c to terminate.`)
});