// $('#myModal').modal()

const local = new curl();
const flag = ['ToDoing', 'Doing', 'Ed']
const BtnPrimary = document.getElementsByClassName('btn-primary')[0];
const DataBox = document.querySelectorAll("input[type ='text'");
const list = document.getElementsByClassName('list-group');
BtnPrimary.onclick = function () {
    const e = document.getElementById('myModalLabel').innerText;
    const Data = {};
    Data.thing = DataBox[0].value
    Data.date = DataBox[1].value + DataBox[2].value;
    Data.add = document.getElementById('AddData').value;
    local.Push(e, Data);
    ShowInit(local)
}

function GetMore(dom) {
    for (let i = 0; i < dom.length; i++) {
        list[i].addEventListener("click", function (e) {
            const thing = list[i].parentNode.parentNode.querySelector('.panel-title').innerHTML;
            const id = e.target.getAttribute('data-id');
            console.log(local.GetMore(thing, id))
            e.target.setAttribute('data-content', local.GetMore(thing, id).add);
            console.log(e.target.style.backgroundColor);
            if (e.target.style.backgroundColor == '') {
                e.target.style.backgroundColor = '#fab27b';
                console.log(e.target.style.backgroundColor)
                $('.list-group-item').popover();
                return true;
            }else{
                e.target.style.backgroundColor = ''
            }
        })
    }
}
GetMore(list)

function ShowInit(e) {
    console.log('刷新')
    for (let i = 0; i < list.length; i++) {
        list[i].innerHTML = '';
    }
    for (let i = 0; i < list.length; i++) {
        let DataHtml = [];
        const data = e.Get(flag[i]) || [];
        for (let j = 0; j < data.length; j++) {
            const div = document.createElement('div');
            div.className = 'task list-group-item';
            div.innerHTML = data[j].thing + '<span>' + data[j].date + '</span>';
            div.setAttribute('data-id', data[j].Id);
            div.setAttribute('data-toggle', 'popover');
            div.setAttribute('title', '更多');
            div.setAttribute('data-placement', 'top');
            list[i].appendChild(div);
        }
    }
}
ShowInit(local)