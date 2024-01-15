let URL = "https://api.qrserver.com/v1/create-qr-code/?data=";
let text = document.querySelector("#text");
let qr = document.querySelector(".qr");
let img = document.querySelector("#img");
let btn = document.querySelector(".btn");

text.addEventListener("keypress", (evt) => {
    if (evt.key === "Enter") {
        // Remove leading and trailing whitespaces and check if the value is not empty
        if (text.value.trim() !== "") {
            let newURL = `${URL}${text.value.trim()}`;
            img.src = newURL;
            qr.classList.remove("hide");
            text.value = "";
        }
    }
});

btn.addEventListener("click", () => {
    // Remove leading and trailing whitespaces and check if the value is not empty
    if (text.value.trim() !== "") {
        let newURL = `${URL}${text.value.trim()}`;
        img.src = newURL;
        qr.classList.remove("hide");
        text.value = "";
    }
});
