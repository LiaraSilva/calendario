function colorirDia(){
    let days         = document.getElementById('day').value;
    let color        = document.getElementById('color').value;
    let calenda      = document.getElementById('calendar');
    let td           = calenda.getElementsByTagName('td')[(parseInt(days)+1)];

    td.style.backgroundColor = color;
}