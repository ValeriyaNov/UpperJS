const submitBtn = document.querySelector(".register-btn");

if (submitBtn) {
    submitBtn.addEventListener("click", function() {
        localStorage.setItem("userName", document.querySelector(".username-input").value)
        localStorage.setItem("password", document.querySelector(".password-input").value)
        window.location.href = "indexEnter.html"
    })
}

const loginBtn = document.querySelector(".login-btn");
if (loginBtn) {
    loginBtn.addEventListener("click", function() {
        if (document.querySelector(".username-input").value === localStorage.getItem("userName") &&
            document.querySelector(".password-input").value === localStorage.getItem("password")) {
            window.location.href = "indexHello.html"
        } else console.log("нет такого пользователя")
    })
}

const logoutBtn = document.querySelector(".logout-btn");
if (logoutBtn) {
    logoutBtn.addEventListener("click", function() {
        window.location.href = "indexEnter.html"
    })
}