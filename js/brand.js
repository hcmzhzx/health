//	关闭
$(".cuo").click(function(){
    $(".alert").css({"display":"none"});
});

//  品牌
var brands = [
    {id: 1, title: '安利', pinyin: 'anli'},
    {id: 1, title: '安惠', pinyin: 'anhui'},
    {id: 1, title: '保健', pinyin: 'baojian'},
    {id: 1, title: '保健', pinyin: 'baojian'},
    {id: 1, title: '保健', pinyin: 'baojian'},
    {id: 1, title: '保健', pinyin: 'baojian'},
    {id: 1, title: '保健', pinyin: 'baojian'},
    {id: 1, title: '国珍', pinyin: 'guozhen'},
    {id: 1, title: '国珍', pinyin: 'guozhen'},
    {id: 1, title: '国珍', pinyin: 'guozhen'},
    {id: 1, title: '国珍', pinyin: 'guozhen'},
    {id: 1, title: '国珍', pinyin: 'guozhen'},
    {id: 1, title: '嘉康利', pinyin: 'jiakangli'},
    {id: 1, title: '嘉康利', pinyin: 'jiakangli'},
    {id: 1, title: '嘉康利', pinyin: 'jiakangli'},
    {id: 1, title: '嘉康利', pinyin: 'jiakangli'},
    {id: 1, title: '嘉康利', pinyin: 'jiakangli'},
    {id: 1, title: '嘉康利', pinyin: 'jiakangli'},
    {id: 1, title: '钟爱', pinyin: 'zhongai'},
    {id: 1, title: '中国', pinyin: 'zhongguo'}
];
var char = '', charlist = [];
var charTpl = [], listTpl = [];
for (var k = 0; k < brands.length; k++) {
    var ch = brands[k].pinyin.substring(0, 1);
    if (char == ch) {
        charlist[char].push(brands[k]);
        listTpl.push('<div>' + brands[k].title + '</div>');
    } else {
        if (char != '') listTpl.push('</li>');
        char = ch;
        charlist[char] = [brands[k]];
        listTpl.push('<li id="' + char.toUpperCase() + '">');
        listTpl.push('<p>' + char.toUpperCase() + '</p>');
        listTpl.push('<div>' + brands[k].title + '</div>');
        charTpl.push('<li><a href="#' + char + '">' + char.toUpperCase() + '</a></li>');
    }
}
listTpl.push('</li>');
//console.log(listTpl.join(''));
//console.log(charTpl.join(''))
$(".company").append(listTpl.join(''));

//   选择品牌trans
$(".companys").click(function () {
    $("#brand").show().addClass("trans");
    $("#brand ul li div").click(function () {
        $(".cenk").val($(this).text());
        $("#brand").hide();
    });
    $('#brand .back').click(function () {
        $("#brand").hide();
    })
});