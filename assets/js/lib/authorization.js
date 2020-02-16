export const jsSelectCheckbox = () => {
    const checkboxSelectFront = document.querySelector('.jsSelectFront');
    const checkmarkInput = checkboxSelectFront.querySelector('input');
    const checkboxSelectBackend = document.querySelector('.jsSelectBackend');

    checkboxSelectFront.addEventListener('click', (event) => {

        if (checkmarkInput.checked == true) {
            checkmarkInput.checked = false;
            checkboxSelectBackend.checked = false;
        } else {
            checkmarkInput.checked = true;
            checkboxSelectBackend.checked= true;
        }
    });

};