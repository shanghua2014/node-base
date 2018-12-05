suite('关于我们页面测试', ()=>{
    test('页面链接到联系页面', ()=>{
        console.log($('a[href="/contact"]').length)
        assert($('a[href="/contact"]').length);
    })
});