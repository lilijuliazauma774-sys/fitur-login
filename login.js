document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    if (!email.includes("@")) {
        document.getElementById("loginEmailError").innerText = "Email tidak valid!";
        return;
    }

    if (password === "") {
        document.getElementById("loginPasswordError").innerText = "Password wajib diisi!";
        return;
    }

    alert("Login berhasil!");
});
