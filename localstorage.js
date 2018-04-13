
function curl(data) {
    console.log("欢迎")
};
curl.prototype.PushToDoing = function (e) {
    const ToDoing = curl.GetToDoing;
    localStorage.setItem('准备做', JSON.stringify(ToDoing))
};
curl.prototype.PushDoing = function (e) {
    this.Doing.push(e);
    localStorage.setItem('正在做', JSON.stringify(this.Doing));
}
curl.prototype.PushEd = function (e) {
    this.Ed = e;
    localStorage.setItem('已经做', JSON.stringify(this.Ed));
}
curl.prototype.GetToDoing = function () {
    const ToDoing = JSON.parse(localStorage.getItem('准备做'));
    return ToDoing;
}
curl.prototype.Clear = function (e) {
    localStorage.clear();
};

