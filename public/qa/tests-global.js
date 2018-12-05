suite('全局测试', ()=> {
    test('页面上有一个有效标题', ()=>{
        assert(document.title && document.title.match(/\s/) && document.title.toUpperCase !== 'TODO');
    })
});
