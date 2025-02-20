function login() {
    // Mendapatkan nilai dari input form (misalnya menggunakan id username dan password)
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Validasi login
    if (isValidLogin(username, password)) {
        alert("Login berhasil!"); // Tampilkan pesan jika login berhasil
        // Agar tetap di halaman yang sama (beranda.html), tidak perlu redirect
        // Jika ingin redirect ke beranda, gunakan window.location.href = "beranda.html";
    } else {
        alert("Login gagal! Periksa username dan password Anda.");
    }
}

// Fungsi validasi login
function isValidLogin(username, password) {
    // Gantilah logika validasi sesuai kebutuhan, misalnya dengan memeriksa username dan password
    return username === "admin" && password === "admin"; // Contoh validasi sederhana
}
  document.addEventListener("DOMContentLoaded", function() {
    loadComments();
    let storedUser = localStorage.getItem("loggedInUser"); // Ambil user yang login
    if (storedUser) {
        document.getElementById("username").value = storedUser;
        document.getElementById("username").disabled = true; // Kunci input nama jika login
    }
});

function postComment() {
    let name = document.getElementById("username").value.trim();
    let comment = document.getElementById("comment").value.trim();

    if (comment === "") {
        alert("Komentar tidak boleh kosong!");
        return;
    }

    let commentData = {
        name: name || "Anonim", // Jika tidak ada nama, pakai "Anonim"
        comment: comment,
        timestamp: new Date().toLocaleString(),
        timeSaved: new Date().getTime()
    };

    let comments = JSON.parse(localStorage.getItem("comments")) || [];
    comments.push(commentData);
    localStorage.setItem("comments", JSON.stringify(comments));

    document.getElementById("comment").value = "";
    loadComments();
}

// Simpan nama saat login (contoh implementasi login)
function login(username) {
    localStorage.setItem("loggedInUser", username);
    document.getElementById("username").value = username;
    document.getElementById("username").disabled = true;
}
