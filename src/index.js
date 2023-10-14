// initialize variables to store range values by percentage
// top value 
let topLeftX = 44;
// bottom value
let bottomRightX = 70;
// left value
let topLeftY = 51;
// right value
let topRightY = 53;

// initiate border values when page is done loading
window.onload = () => {
    updateDOM()
}

// capture value changes in the input element and update the DOM to reflect those changes
const controls = document.querySelectorAll("input");

controls[0].addEventListener("change", (e) => {
    topLeftX = e.target.value;
    updateDOM()
})
controls[1].addEventListener("change", (e) => {
    topRightY = e.target.value;
    updateDOM()
})
controls[2].addEventListener("change", (e) => {
    bottomRightX = e.target.value;
    updateDOM()
})
controls[3].addEventListener("change", (e) => {
    topLeftY = e.target.value;
    updateDOM()
})

function updateDOM () {
    let shape = document.getElementById("blob");
    shape.style.borderRadius = `${topLeftX}% ${100 - topLeftX}% ${bottomRightX}% ${100 - bottomRightX}% / ${topLeftY}% ${topRightY}% ${100 - topRightY}% ${100 - topLeftY}%`;
    const bValues = getComputedStyle(shape).borderRadius
    document.getElementById("output").innerText = "border-radius: " + bValues + ";";
}

// implementing copy to clipboard
const copyToClipboard = function () {
    let textToCopy = document.getElementById("output").innerText
    navigator.clipboard.writeText(textToCopy).then(res => {
        document.getElementById("copy").innerText = "Copied to clipboard!"
        setTimeout(() => {
            document.getElementById("copy").innerText = "Copy"
        }, 3000)
    })
}

// copy to clipboard when copy button is clicked
document.getElementById("copy").addEventListener("click", function (event) {
    copyToClipboard()
})

// implementing key combination for copy to clipboard
document.addEventListener("keydown", function (event) {
    if ((event.ctrlKey && event.key === 'c') || (event.ctrlKey && event.key === 'C')) {
        copyToClipboard()
    }
})