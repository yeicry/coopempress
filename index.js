document.addEventListener('DOMContentLoaded', function () {
    // Añadir un usuario predeterminado al almacenamiento local
    const defaultUser = {
        username: 'admin',
        password: '1234'
    };

    if (!localStorage.getItem(defaultUser.username)) {
        localStorage.setItem(defaultUser.username, JSON.stringify(defaultUser));
    }

    // Mostrar el formulario de registro
    document.getElementById('showRegisterButton').addEventListener('click', function () {
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('registerForm').style.display = 'block';
    });

    // Mostrar el formulario de inicio de sesión
    document.getElementById('showLoginButton').addEventListener('click', function () {
        document.getElementById('loginForm').style.display = 'block';
        document.getElementById('registerForm').style.display = 'none';
    });

    // Manejar el inicio de sesión
    document.getElementById('loginButton').addEventListener('click', function () {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username && password) {
            const storedUser = localStorage.getItem(username);
            if (storedUser) {
                const userData = JSON.parse(storedUser);
                if (userData.password === password) {
                    alert("Inicio de sesión exitoso");
                    location.href = 'login.html'; // Redirige a la página principal
                } else {
                    alert("Usuario o contraseña incorrectos");
                }
            } else {
                alert("Usuario no encontrado");
            }
        } else {
            alert("Por favor ingresa el usuario y la contraseña");
        }
    });

    // Manejar el registro
    document.getElementById('registerButton').addEventListener('click', function () {
        const newUsername = document.getElementById('newUsername').value;
        const newPassword = document.getElementById('newPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (newUsername && newPassword && confirmPassword) {
            if (newPassword === confirmPassword) {
                if (localStorage.getItem(newUsername)) {
                    alert("El nombre de usuario ya existe. Por favor, elige otro.");
                } else {
                    const userData = {
                        username: newUsername,
                        password: newPassword
                    };
                    localStorage.setItem(newUsername, JSON.stringify(userData));
                    alert("Registro exitoso");
                    document.getElementById('loginForm').style.display = 'block'; // Volver al formulario de inicio de sesión
                    document.getElementById('registerForm').style.display = 'none';
                }
            } else {
                alert("Las contraseñas no coinciden");
            }
        } else {
            alert("Por favor completa todos los campos");
        }
    });
});