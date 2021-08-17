import setCookie from "./setCookie.js";
function setTheme(theme) {
    let root = document.documentElement;
    if (theme == "light") {
        root.style.setProperty('--switch_theme_fill', "rgb(0, 0, 0)");
        root.style.setProperty('--fields-bg', "rgb(255, 255, 255)");
        root.style.setProperty('--fields-text', "rgb(89, 92, 88)");
        root.style.setProperty('--text-color', "rgb(51, 46, 46)");
        root.style.setProperty('--bg-color', "rgb(207, 248, 250)");
        setCookie("theme", "light", 365);
        return "Light theme applied";
    }

    else if (theme == "dark") {
        root.style.setProperty('--switch_theme_fill', "rgb(255, 255, 255)");
        root.style.setProperty('--fields-bg', "rgb(18, 18, 18)");
        root.style.setProperty('--fields-text', "rgb(255, 255, 255)");
        root.style.setProperty('--text-color', "rgb(255, 255, 255)");
        root.style.setProperty('--bg-color', "rgb(51, 46, 46)");
        setCookie("theme", "dark", 365);
        return "Dark theme applied";
    }

    else {
        return "Invalid theme"
    }

}

export default setTheme;