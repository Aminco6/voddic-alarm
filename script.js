let installPrompt;
const installBtn = document.getElementById("installBtn");

// Listen for the 'beforeinstallprompt' event
window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    installPrompt = e;

    // Show the install button
    installBtn.style.display = "block";
});

// When the install button is clicked, show the install prompt
installBtn.addEventListener("click", () => {
    if (installPrompt) {
        installPrompt.prompt(); // Trigger the install prompt
        installPrompt.userChoice.then((choiceResult) => {
            console.log(choiceResult.outcome);  // Log the outcome of the install prompt

            if (choiceResult.outcome === "accepted") {
                console.log("User accepted the installation");
            } else {
                console.log("User dismissed the installation");
            }
        });

        installPrompt = null;  // Reset the prompt to avoid multiple triggers
    }
});
