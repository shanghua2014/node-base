let fortunes = [
    '剑阶从者',
    '枪阶从者',
    '术阶从者',
    '狂阶从者',
    '弓阶从者'
]

exports.getFortune = () => {
    let idx = Math.floor(Math.random() * fortunes.length);
    return fortunes[idx];
}