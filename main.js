
{//PROJECT-1
    const form = document.getElementById('form');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const password2 = document.getElementById('password2');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        checkInputs();
    });

    function checkInputs() {
        // getthe value from input

        const usernameValue = username.value.trim();
        const emailValue = email.value.trim();
        const passwordValue = password.value.trim();
        const password2Value = password2.value.trim();

        if (usernameValue === '') {
            setErrorFor(username, 'username cannot be blank');
        } else {
            setSuccessFor(username);
        }

        if (emailValue === '') {
            setErrorFor(email, 'Email cannot be blank');
        } else {
            setSuccessFor(email);
        }

        if (passwordValue === '') {
            setErrorFor(password, 'password cannot be blank');
        } else {
            setSuccessFor(password);
        }

        if (password2Value === '') {
            setErrorFor(password2, 'password cannot be blank');
        } else if (passwordValue !== password2Value) {
            setErrorFor(password2, 'password is not macth');
        } else {
            setSuccessFor(password2);
        }

    }
    function setErrorFor(input, message) {
        const formControl = input.parentElement; //form-control
        const small = formControl.querySelector('small');
        //add error message inside small
        small.innerText = message;

        //add error class
        formControl.className = 'form-control error';
    }

    function setSuccessFor(input) {
        const formControl = input.parentElement;
        formControl.className = 'form-control success';
    }
}

{//PROJECT-2
    const checkbox = document.getElementById('checkbox');
    checkbox.addEventListener('change', () => {
        //change the theme color
        document.body.classList.toggle('dark');
    });
}

{//PROJECT-3
    const text = document.getElementById('text');
    const textArr = text.innerText.split('');

    const newEl = document.createElement('h1');
    newEl.innerHTML = `
        ${textArr.map(letter => `<span class="letter" style="${randomVisibility()}">${letter}</span>`).join('')}
    `;
    newEl.classList.add('overlay');




    function randomVisibility() {
        return Math.random() < 0.5 ? 'visibility: hidden' : 'visibility: visible';
    }


}
