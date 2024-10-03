document.getElementById('registroForm').addEventListener('submit', function(event) {
    let valid = true;

    // Validar nombre completo
    const nombre = document.getElementById('nombre');
    const nombreValidation = document.getElementById('nombre-validation');
    if (nombre.value.trim() === '') {
        nombreValidation.textContent = 'El nombre es obligatorio';
        nombreValidation.style.display = 'block';
        valid = false;
    } else {
        nombreValidation.style.display = 'none';
    }

    // Validar correo electrónico
    const email = document.getElementById('email');
    const emailValidation = document.getElementById('email-validation');
    if (!email.checkValidity()) {
        emailValidation.textContent = 'Correo electrónico inválido';
        emailValidation.style.display = 'block';
        valid = false;
    } else {
        emailValidation.style.display = 'none';
    }

    // Validar contraseñas
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const passwordValidation = document.getElementById('password-validation');
    const confirmPasswordValidation = document.getElementById('confirm-password-validation');

    if (password.value === '' || confirmPassword.value === '') {
        passwordValidation.textContent = 'La contraseña es obligatoria';
        confirmPasswordValidation.textContent = 'Confirma la contraseña';
        passwordValidation.style.display = 'block';
        confirmPasswordValidation.style.display = 'block';
        valid = false;
    } else if (password.value !== confirmPassword.value) {
        confirmPasswordValidation.textContent = 'Las contraseñas no coinciden';
        confirmPasswordValidation.style.display = 'block';
        valid = false;
    } else {
        passwordValidation.style.display = 'none';
        confirmPasswordValidation.style.display = 'none';
    }

    // Validar fecha de nacimiento (mayor de 18 años)
    const birthDate = document.getElementById('birthDate');
    const birthDateValidation = document.getElementById('birthDate-validation');
    const birthDateValue = new Date(birthDate.value);
    const currentDate = new Date();
    const age = currentDate.getFullYear() - birthDateValue.getFullYear();
    if (age < 18 || isNaN(age)) {
        birthDateValidation.textContent = 'Debes ser mayor de 18 años';
        birthDateValidation.style.display = 'block';
        valid = false;
    } else {
        birthDateValidation.style.display = 'none';
    }

    if (!valid) {
        event.preventDefault();  // Evitar el envío si hay errores
    }
});

//----------------------------SECCION OCULTA---------------------------------------------

function mostrarSeccion() {
    const seleccion = document.getElementById("respuesta").value;
    const extraSection = document.getElementById("extra-section");

    if (seleccion === "si") {
      extraSection.style.display = "block";
    } else {
      extraSection.style.display = "none";
    }
  }

