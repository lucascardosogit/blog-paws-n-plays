const form = document.getElementById('form');
const fields = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.spanmessage');
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const formnewsletter = document.getElementById('formnewsletter')
const newsletter = document.querySelector('#contactnewsemail');

//Tratar interação entre categorias, trocando as imagens dos produtos de acordo o li com selectedcategory

formnewsletter.addEventListener('submit', (event) => {
    event.preventDefault();
    emailNewsValidate();
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    nameValidate();
    emailValidate();
    checkboxValidate();
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
    const checkedCheckBoxes = document.querySelectorAll('input[type="checkbox"]:checked');

    if(checkedCheckBoxes.length == 0) {
        spans[3].textContent = '* Please consider reading our privacy policy';
        spans[3].style.display = 'flex';    
    } else {
        spans[3].textContent = '';
        spans[3].style.display = 'none';
    }
}

function emailNewsValidate() {
    if(!emailRegex.test(newsletter.value)){
        spans[4].textContent = '* Please enter a valid email address, respecting the example';
        newsletter.style.border = '2px solid #FF0000';
        spans[4].style.display = 'block';
    } else {
        spans[4].textContent = '';
        newsletter.style.border = '';
        spans[4].style.display = 'none';
    }
}