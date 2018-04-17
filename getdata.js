const local = new curl();
const BtnPrimary = document.getElementsByClassName('btn-primary')[0];
const DataBox = document.querySelectorAll('.col-sm-10');
BtnPrimary.onclick = function () {
    const e = document.getElementById('myModalLabel').innerText;
    const Data = {};
    for (let i = 0; i < DataBox.length - 1; i++) {
        let input = DataBox[i].querySelectorAll("input[type ='text'");
        for (let j = 0; j < input.length; j++) {
            Data.push(input[j].value)
        }
    }
    let flag = Data[1] + Data[2];
    Data[1] = flag;
    Data[2] = document.getElementsByTagName('textarea')[0].value
    console.log(Data);
    local.Push(e,Data);
}
