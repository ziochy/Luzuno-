document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");
    const loginNav = document.getElementById("login-nav");
    
    // Cek apakah pengguna sudah login sebelumnya
    function checkLoginStatus() {
        const user = localStorage.getItem("username");
        if (user) {
            loginNav.innerHTML = `<a href="#" id="logout-btn">Logout (${user})</a>`;
            document.getElementById("logout-btn").addEventListener("click", logout);
        }
    }

    // Fungsi login
    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;
            const users = JSON.parse(localStorage.getItem("users")) || [];

            // Cek apakah user terdaftar
            const validUser = users.find(user => user.username === username && user.password === password);
            
            if (validUser) {
                localStorage.setItem("username", username);
                window.location.href = "index.html"; // Redirect ke beranda
            } else {
                document.getElementById("error-message").textContent = "Nama pengguna atau kata sandi salah!";
            }
        });
    }

    // Fungsi daftar
    if (registerForm) {
        registerForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const newUsername = document.getElementById("new-username").value;
            const newPassword = document.getElementById("new-password").value;
            let users = JSON.parse(localStorage.getItem("users")) || [];

            // Cek apakah username sudah digunakan
            if (users.some(user => user.username === newUsername)) {
                document.getElementById("register-message").textContent = "Nama pengguna sudah digunakan!";
                return;
            }

            // Simpan user baru
            users.push({ username: newUsername, password: newPassword });
            localStorage.setItem("users", JSON.stringify(users));
            document.getElementById("register-message").textContent = "Pendaftaran berhasil! Silakan login.";
        });
    }

    // Fungsi logout
    function logout() {
        localStorage.removeItem("username");
        window.location.href = "index.html"; // Redirect ke halaman utama
    }

    // Jalankan cek login
    checkLoginStatus();
});
