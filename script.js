document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login-form");
    const loginNav = document.getElementById("login-nav");
    const errorMessage = document.getElementById("error-message");

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

            // Dummy validasi (Bisa diganti dengan sistem backend)
            if (username === "admin" && password === "1234") {
                localStorage.setItem("username", username);
                window.location.href = "index.html"; // Redirect ke beranda setelah login
            } else {
                errorMessage.textContent = "Nama pengguna atau kata sandi salah!";
            }
        });
    }

    // Fungsi logout
    function logout() {
        localStorage.removeItem("username");
        window.location.href = "index.html"; // Redirect ke halaman utama setelah logout
    }

    // Jalankan cek login
    checkLoginStatus();
});
