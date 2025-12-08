// ========== PROFILE IMAGE ==========
const upload = document.getElementById("imageUpload");
const profileImage = document.getElementById("profileImage");
const resetBtn = document.getElementById("resetPhoto");

upload.addEventListener("change", () => {
    const file = upload.files[0];
    const reader = new FileReader();

    reader.onload = () => {
        profileImage.src = reader.result;
        localStorage.setItem("profileImage", reader.result);
    };

    if (file) reader.readAsDataURL(file);
});

resetBtn.addEventListener("click", () => {
    profileImage.src = "https://via.placeholder.com/120";
    localStorage.removeItem("profileImage");
});

// ========== LOAD ON PAGE ==========
window.addEventListener("load", () => {
    const savedImage = localStorage.getItem("profileImage");
    if (savedImage) profileImage.src = savedImage;

    const savedTheme = localStorage.getItem("themeColor");
    if (savedTheme) applyTheme(savedTheme);

    const isDark = localStorage.getItem("darkMode") === "enabled";
    if (isDark) document.body.classList.add("dark-mode");
    darkMode.checked = isDark;
});

// ========== DARK MODE ==========
const darkMode = document.getElementById("darkModeToggle");
darkMode.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
    } else {
        localStorage.removeItem("darkMode");
    }
});

// ========== THEME SWITCHER ==========
const themeSelect = document.getElementById("themeColor");

themeSelect.addEventListener("change", (e) => {
    const theme = e.target.value;
    applyTheme(theme);
    localStorage.setItem("themeColor", theme);
});

function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
}

// ========== NOTIFICATION ==========
document.getElementById("notifToggle").addEventListener("change", () => {
    alert("Notification setting updated!");
});

// ========== CLEAR TASKS ==========
document.getElementById("clearTasks").addEventListener("click", () => {
    localStorage.removeItem("tasks");
    alert("All tasks have been cleared!");
});
