let registeredUser = {};

function checkPasswordComplexity(password) {
    const hasUppercase = /[A-Z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSpecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(password);
    return password.length >= 8 && hasUppercase && hasDigit && hasSpecial;
}

function checkCellPhoneNumber(number) {
    return /^\+\d{10,}$/.test(number);
}

// Handle Registration
document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const fName = document.getElementById('fName').value.trim();
    const lName = document.getElementById('lName').value.trim();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    const cellphone = document.getElementById('cellphone').value.trim();

    let message = "";

    if (!(username.includes("_") && username.length <= 5)) {
        message = "Username is incorrectly formatted.";
    } else if (!checkPasswordComplexity(password)) {
        message = "Password does not meet complexity requirements.";
    } else if (!checkCellPhoneNumber(cellphone)) {
        message = "Cell number is incorrectly formatted.";
    } else {
        registeredUser = { fName, lName, username, password, cellphone };
        message = "User registered successfully!";
    }

    document.getElementById('messageBox').textContent = message;
});

// Handle Login
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const loginUsername = document.getElementById('loginUsername').value.trim();
    const loginPassword = document.getElementById('loginPassword').value;

    let message = "";

    if (loginUsername === registeredUser.username && loginPassword === registeredUser.password) {
        message = `Welcome ${registeredUser.fName} ${registeredUser.lName}, it is great to see you again.`;
    } else {
        message = "Username or password incorrect, please try again.";
    }

    document.getElementById('messageBox').textContent = message;
});

