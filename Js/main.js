const loginBtn = document.querySelector(".login");
const modal = document.querySelector(".modal-form")

// Qutunun açılması
loginBtn.addEventListener("click", () => {
    modal.style.display = "flex"
});
// Qutunun baglanması
modal.addEventListener('click', function (e) {
    if (e.target.id !== "form") {
        modal.style.display = 'none';
    }
});


const signBtn = document.querySelector(".sign-up");
const form_2  = document.querySelector(".sign-form");

// Qutunun açılması
signBtn.addEventListener("click", () => {
    form_2.style.display = "flex"
});

form_2.addEventListener('click', function (e) {
    if (e.target.id !== "form") {
        modal.style.display = 'none';
    }
});