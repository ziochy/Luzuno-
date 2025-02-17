document.addEventListener("DOMContentLoaded", function() {
    const loginNav = document.getElementById("login-nav");

    function checkLoginStatus() {
        const user = localStorage.getItem("username");
        if (user) {
            loginNav.innerHTML = `<a href="#" id="logout-btn">Logout (${user})</a>`;
            document.getElementById("logout-btn").addEventListener("click", logout);
        }
    }

    function logout() {
        localStorage.removeItem("username");
        window.location.href = "index.html";
    }

    checkLoginStatus();
});
