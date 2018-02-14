document.getElementById('button1').addEventListener('click', getText);

function getText(){
  fetch('test.txt')
    .then(res => res.text())
    .then(data => console.log(data))
    .catch(err => console.log(err))
}