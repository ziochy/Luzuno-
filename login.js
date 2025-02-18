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
