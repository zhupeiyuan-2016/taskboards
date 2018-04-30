// $('#myModal').modal()

const local = new curl();
const flag = ['ToDoing', 'Doing', 'Ed']
const BtnPrimary = document.getElementsByClassName('btn-primary')[0];
const DataBox = document.querySelectorAll("input[type ='text'");
BtnPrimary.onclick = function () {
    const e = document.getElementById('myModalLabel').innerText;
    const Data = {};
    Data.thing = DataBox[0].value
    Data.date = DataBox[1].value + DataBox[2].value;
    Data.add = document.getElementById('AddData').value;
    local.Push(e, Data);
    ShowInit(local)
}

function ShowInit(e) {
    console.log('刷新')
    const list = document.getElementsByClassName('list-group');
    for (let i = 0; i < list.length; i++) {
        let DataHtml = [];
        console.log(flag[i])
        const data = e.Get(flag[i]);
        console.log(data)
        // for (let j = 0; j< data.length; j++) {
        //     let div = document.createElement('div');
        //     div.className = 'task list-group-item';
        //     div.innerHTML = data[j];
        //     DataHtml.push(div);
        // }
        // console.log(DataHtml)
        // list[i].appendChild(DataHtml);
    }
}
ShowInit(local)

