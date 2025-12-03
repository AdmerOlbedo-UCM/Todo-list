document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent normal form submission

        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();

        if (username === "" || password === "") {
            showMessage("Please fill in all fields.", "error");
            return;
        }

        // 🔐 Fake login (for testing)
        // You can change this later OR connect to real backend
        if (username === "Admer" && password === "otenniolbido") {
            showMessage("Login successful! Redirecting...", "success");

            setTimeout(() => {
                window.location.href = "Home.html";
            }, 1000);
        } else {
            showMessage("Incorrect username or password.", "error");
        }
    });
});


function showMessage(msg, type) {
    let msgBox = document.getElementById("message");

    if (!msgBox) {
        msgBox = document.createElement("p");
        msgBox.id = "message";
        document.querySelector(".login-box").appendChild(msgBox);
    }

    msgBox.textContent = msg;
    msgBox.style.color = type === "error" ? "red" : "green";
    msgBox.style.marginTop = "10px";
    msgBox.style.fontWeight = "bold";
}


function weakshit() {
    alert("This is a weak function.");
}