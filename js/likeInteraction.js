const buttons = document.querySelectorAll('.likebtn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const svgs = button.querySelectorAll('svg');

        if (svgs[0].classList.contains('showed')){
            svgs[0].classList.remove('showed');
            svgs[1].classList.add('showed');
        } else {
            svgs[1].classList.remove('showed');
            svgs[0].classList.add('showed');
        }
    });
})