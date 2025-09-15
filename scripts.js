document.addEventListener("DOMContentLoaded", () => {

function copyZelle() {
    const zelleText = document.getElementById("zelle-number").innerText;
    navigator.clipboard.writeText(zelleText).then(() => {
        const msg = document.getElementById("copy-msg");
        msg.style.display = "block";
        setTimeout(() => {
            msg.style.display = "none";
        }, 2000);
    });
}

// Attach event listener instead of inline onclick
    const donateBtn = document.querySelector(".donate-btn");
    if (donateBtn) {
        donateBtn.addEventListener("click", copyZelle);
    }
});