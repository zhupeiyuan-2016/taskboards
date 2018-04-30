//删除数组中的一个值形成新数组
function RemoveArr(Id, Arr) {
    let NewData = [];
    Arr[Id] = 0;
    for (let i = 0; i < Arr.length; i++) {
        if (Arr[i] != 0) {
            NewData.push(Arr[i])
        }
    }
    return NewData;
};

function curl(data) {
    console.log("欢迎");
};
//JSON.stringify 把一个对象转换成json字符串， 
//JSON.parse 把一个json字符串解析成对象
curl.prototype.Get = function (e) {
    if (e == 'ToDoing') {
        console.log(e);
        this.GetToDoing();
    } else if (e == 'Doing') {
        this.GetDoing();
    } else if (e == 'Ed') {
        this.GetEd();
    } else {
        return 0;
    }
}

curl.prototype.GetToDoing = function () {
    const ToDoing = JSON.parse(localStorage.getItem("ToDoing"));
    console.log(ToDoing);
     return ToDoing;
}
curl.prototype.GetDoing = function () {
    const Doing = JSON.parse(localStorage.getItem("Doing"));
    return Doing;
}
curl.prototype.GetEd = function () {
    const Ed = JSON.parse(localStorage.getItem("Ed"));
    return Ed;
}
curl.prototype.Push = function (e, data) {
    if (e == 'ToDoing') {
        this.PushToDoing(data);
    } else if (e == 'Doing') {
        this.PushDoing(data);
    } else if (e == 'Ed') {
        this.PushEd(data);
    } else {
        return 0;
    }
};
curl.prototype.PushToDoing = function (e) {
    let data = [];
    ToDoing = this.GetToDoing();
    if (!ToDoing) {
        e.Id = 0;
        data.push(e);
        const flag = JSON.stringify(data);
        localStorage.setItem("ToDoing", JSON.stringify(data));
        return 0;
    };
    let Id = ToDoing[ToDoing.length - 1].Id;
    e.Id = ++Id;
    ToDoing.push(e);
    localStorage.setItem("ToDoing", JSON.stringify(ToDoing));
};
curl.prototype.PushDoing = function (e) {
    let data = [];
    Doing = this.GetDoing();
    if (!Doing) {
        e.Id = 0;
        data[0] = e;
        localStorage.setItem("Doing", JSON.stringify(data));
        return 0;
    };
    let Id = Doing[Doing.length - 1].Id;
    e.Id = ++Id;
    Doing.push(e);
    localStorage.setItem("Doing", JSON.stringify(Doing));
};
curl.prototype.PushEd = function (e) {
    let data = [];
    Ed = this.GetEd();
    if (!Ed) {
        e.Id = 0;
        data[0] = e;
        localStorage.setItem("Ed", JSON.stringify(data));
        return 0;
    };
    let Id = Ed[Ed.length - 1].Id;
    e.Id = ++Id;
    Ed.push(e);
    localStorage.setItem("Ed", JSON.stringify(Ed));
};
curl.prototype.UpData = function (e, Id, NewData) {
    if (e == 'ToDoing') {
        let data = this.GetToDoing();
        data[Id] = NewData;
        localStorage.setItem(e, JSON.stringify(data))
    } else if (e == 'Doing') {
        let data = this.GetDoing();
        data[Id] = NewData;
        localStorage.setItem(e, JSON.stringify(data))
    } else if (e == 'Ed') {
        let data = this.GetEd();
        data[Id] = NewData;
        localStorage.setItem(e, JSON.stringify(data))
    } else {
        return 0;
    }
};
curl.prototype.Remove = function (e, Id) {
    if (e = 'ToDoing') {
        let data = this.GetToDoing();
        let NewData = RemoveArr(Id, data);
        localStorage.setItem(e, JSON.stringify(data));
    } else if (e = 'Doing') {
        let data = this.GetDoing();
        let NewData = RemoveArr(Id, data);
        localStorage.setItem(e, JSON.stringify(data));
    } else if (e = 'Ed') {
        let data = this.GetEd();
        let NewData = RemoveArr(Id, data);
        localStorage.setItem(e, JSON.stringify(data));
    } else {
        return 0;
    }
};
curl.prototype.Clear = function (e) {
    console.log('清除全部')
    localStorage.clear();
};