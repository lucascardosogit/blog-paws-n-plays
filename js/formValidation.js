const form = document.getElementById('form');
const fields = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.spanmessage');
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//Deixar o botão disable até que todos os campos do formulário estejam preenchidos corretamente
//Adicionar evento para que apareça alguma mensagem dizendo que o formulário foi enviado com sucesso após clicar em submit
//Adicionar tratamento no campo de email do newsletter

form.addEventListener('submit', (event) => {
    event.preventDefault();
    nameValidate();
    emailValidate();
});

function setError(index) {
    fields[index].style.border = '2px solid #FF0000';
    spans[index].style.display = 'block';
}

function removeError(index) {
    fields[index].style.border = '';
    spans[index].style.display = 'none';
}

function nameValidate() {
    if(fields[0].value) {
        if(fields[0].value.length < 3) {
            spans[0].textContent = '* Field "Name" must contain 3 characters or more';
            setError(0);
        } else if (!/^[A-Za-z\s]+$/.test(fields[0].value)) {
            spans[0].textContent = '* Field "Name" must contain just letters';
            setError(0);
        } 
        else {
            removeError(0);
        }
    }

    if(fields[1].value) {
        if(fields[1].value.length < 3) {
            spans[1].textContent = '* Field "Lastname" must contain 3 characters or more';
            setError(1);
        } else if (!/^[A-Za-z\s]+$/.test(fields[1].value)) {
            spans[1].textContent = '* Field "Lastname" must contain just letters';
            setError(1);
        } 
        else {
            removeError(1);
        }
    }
}

function emailValidate() {
    if(!emailRegex.test(fields[2].value)){
        spans[2].textContent = '* Please enter a valid email address, respecting the example';
        setError(2);
    } else {
        removeError(2);
    }
}

function checkboxValidate() {
    if(!fields[4].checked) {
        spans[4].textContent = '* Please consider reading our privacy policy to adhere to the terms';
        setError(4);
    } else {
        removeError(4);
    }
}