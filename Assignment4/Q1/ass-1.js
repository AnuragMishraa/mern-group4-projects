const table = document.getElementsByTagName('table')[0];
    table.tHead.rows[0].style.backgroundColor = 'violet';
    table.tBodies[0].rows[0].style.backgroundColor = 'indigo';
    table.tBodies[0].rows[1].style.backgroundColor = 'blue';
    table.tBodies[0].rows[2].style.backgroundColor = 'green';
    table.tBodies[0].rows[3].style.backgroundColor = 'yellow';
    table.tBodies[0].rows[4].style.backgroundColor = 'orange';

for (let i = 1; i < 5; i+=2){
    console.log(table.tBodies[0].rows[0].cells[i].innerText);
}
for (let i = 0; i < 5; i+=2){
    console.log(table.tBodies[0].rows[1].cells[i].innerText);
}
for (let i = 1; i < 5; i+=2){
    console.log(table.tBodies[0].rows[2].cells[i].innerText);
}
for (let i = 0; i < 5; i+=2){
    console.log(table.tBodies[0].rows[3].cells[i].innerText);
}
for (let i = 1; i < 5; i+=2){
    console.log(table.tBodies[0].rows[4].cells[i].innerText);
}
