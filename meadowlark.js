let express = require('express');
let app = express();


// 指定端口
app.set('port', process.env.PORT || 3000);

// 制定路由
app.get('/', (req, res)=> {
    res.type('text/plain');
    res.send('Meadowlark Travel');
})
app.get('/about*', (req, res)=> {
    res.type('text/plain');
    res.send('About Meadowlark Travel');
})

// 定制404页面
app.use((req, res)=> {
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Find');
});

// 定制500页面
app.use((req, res)=> {
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 - Service Error');
});

app.listen(app.get('port'), () => {
    console.log(`Express started on http://localhost:${app.get('port')}; press Ctrl-c to terminate.`)
});