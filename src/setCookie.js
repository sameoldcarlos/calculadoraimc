function setCookie(cookieName, cookieValue, exdays) {
    const currentDate = new Date();
    currentDate.setTime(currentDate.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = `expires=${currentDate.toUTCString()}`;
    document.cookie = `${cookieName}=${cookieValue}; ${expires}; SameSite=Lax`;
}

export default setCookie;