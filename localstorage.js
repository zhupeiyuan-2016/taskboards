function curl(data) {
    console.log("欢迎");
};
//JSON.stringify 把一个对象转换成json字符串， 
 //JSON.parse 把一个json字符串解析成对象
curl.prototype.GetToDoing = function () {
    console.log('获取讲要做的事情');
    const ToDoing = JSON.parse(localStorage.getItem("ToDoing"));
    console.log(ToDoing)
    return ToDoing;
}
curl.prototype.GetDoing = function () {
    console.log('获取正在做的事情');
    const Doing = JSON.parse(localStorage.getItem("Doing"));
    return Doing;
}
curl.prototype.GetEd = function () {
    console.log('获取已经完成的事情');
    const Ed = JSON.parse(localStorage.getItem("Ed"));
    return Ed;
}
curl.prototype.PushToDoing = function (e) {
    let data = [];
    ToDoing = this.GetToDoing();
    if (!ToDoing) {
        data[0] = e;
        localStorage.setItem("ToDoing",JSON.stringify(data));
        return 0;
    };
    ToDoing.push(e);
    localStorage.setItem("ToDoing",JSON.stringify(ToDoing));
};
curl.prototype.PushDoing = function (e) {
    let data = [];
    Doing = this.GetDoing();
    if (!Doing) {
        data[0] = e;
        localStorage.setItem("Doing",JSON.stringify(data));
        return 0;
    };
    Doing.push(e);
    localStorage.setItem("Doing",JSON.stringify(Doing));
}
curl.prototype.PushEd = function (e) {
    let data = [];
    Ed = this.GetEd();
    if (!Ed) {
        data[0] = e;
        localStorage.setItem("Ed",JSON.stringify(data));
        return 0;
    };
    Ed.push(e);
    localStorage.setItem("Ed",JSON.stringify(Ed));
}
curl.prototype.Clear = function (e) {
    console.log('清除全部')
    localStorage.clear();
};