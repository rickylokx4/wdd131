const form = document.querySelector("form");

let counter = getCount() || 0;

form.addEventListener("submit", () => {
    counter = counter + 1;
    setCount(counter)
})

function setCount(counter) {
    localStorage.setItem("registrationCount", counter)
}
function getCount() {
    return JSON.parse(localStorage.getItem('registrationCount'))
}