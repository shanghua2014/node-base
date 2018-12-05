let express = require('express');
let exphbs  = require('express-handlebars');
let fortune = require('./lib/fortune');

let app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// 指定端口
app.listen(3000);

// 中间件 - 静态资源目录
app.use(express.static(__dirname + '/public'));
// 中间件 - 设置页面测试参数
app.use((req, res, next)=> {
    res.locals.showTests = app.get('env') !== 'production' && req.query.test === '1';
    next();
});

// 制定路由
app.get('/', (req, res)=> {
    res.render('home');
});
app.get('/about', (req, res)=> {
    res.render('about', {
        fortune: fortune.getFortune(),
        pageTestScript:'/qa/tests-about.js'
    });
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