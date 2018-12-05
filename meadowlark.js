let express = require('express');
var exphbs  = require('express-handlebars');

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// 指定端口
app.listen(3000);

// 中间件
app.use(express.static(__dirname + '/public'));

// 制定路由
app.get('/', (req, res)=> {
    res.render('home');
});
app.get('/about', (req, res)=> {
    res.render('about')
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