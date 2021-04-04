var data = [
  { url:"https://www.neko-shiki.net/images/member/00003.jpg", title:"キーワード", body:"kai カイ かい" },
  { url:"https://www.neko-shiki.net/images/member/00014.jpg", title:"キーワード", body:"mash マッシュ まっしゅ" },
  { url:"https://www.neko-shiki.net/images/member/00139.jpg", title:"キーワード", body:"shining シャイニング しゃいにんぐ" },
  { url:"https://www.neko-shiki.net/images/member/00151.jpg", title:"キーワード", body:"rei レイ れい" },
  { url:"https://www.neko-shiki.net/images/member/00140.jpg", title:"キーワード", body:"sandrock サンドロック さんどろっく" },
  { url:"https://www.neko-shiki.net/images/member/00090.jpg", title:"キーワード", body:"hime ハイム はいむ" },
];

var keyupStack = [];
var keyword = document.getElementById('keyword');
keyword.addEventListener('keyup', function () {
  keyupStack.push(1);

  setTimeout(function () {
    keyupStack.pop();
    // 最後にkeyupされてから一定時間次の入力がなかったら実行
    if (keyupStack.length === 0) {
    // 部分一致を可能にする
      var buf = '.*' + this.value.replace(/(.)/g, "$1.*");
      var reg = new RegExp(buf);
      
      var filteredLists = data.filter(function (d) {
       return reg.test(d.body);
      });
      createRow(filteredLists);
    }
  }.bind(this), 300);
});

var createRow = function (lists) {
  var list = document.getElementById('list');
  list.textContent = null;
  lists.forEach(function (l) {
    var li = document.createElement('div');
    li.className = 'container';
    li.innerHTML = "<div class='box'><img class='photo' src=" + l.url +">" + "<div class='font'>" +"<p>" + l.title + "</p>" + l.body + "</div>" + '</div> ';
    list.appendChild(li);
  });
};

// 初期表示
createRow(data);