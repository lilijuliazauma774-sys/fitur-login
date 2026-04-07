document.getElementById("registerForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let nama = document.getElementById("nama").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    document.getElementById("namaError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("passwordError").innerText = "";

    if (nama === "") {
        document.getElementById("namaError").innerText = "Nama wajib diisi!";
        return;
    }

    if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerText = "Format email tidak valid!";
        return;
    }

    if (password === "") {
        document.getElementById("passwordError").innerText = "Password wajib diisi!";
        return;
    }

    alert("Pendaftaran berhasil!");
    window.location.href = "login.html";
});
