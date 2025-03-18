const form = document.getElementById('form');
const fields = document.querySelectorAll('.required');

function nameValidate(){
    if(fields[0].value.length < 3) {
        console.log('AAAAAA');
    } else {
        console.log('Deu tudo certo!');
    }
}