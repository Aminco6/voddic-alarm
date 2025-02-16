// Handle Settings Update
async function updateSettings() {
    const settings = {
        timer1: document.getElementById("timer1").value,
        timer2: document.getElementById("timer2").value,
        timer3: document.getElementById("timer3").value,
        password: document.getElementById("password").value
    };

    const response = await fetch("http://alarm.local/update-settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(settings)
    });

    if (response.ok) {
        alert("Settings updated successfully!");
    } else {
        alert("Error communicating with the device.");
    }
}

// PWA Install Button
let installPrompt;
const installBtn = document.getElementById("installBtn");

window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    installPrompt = e;
    installBtn.style.display = "block";
});

installBtn.addEventListener("click", () => {
    installPrompt.prompt();
});
