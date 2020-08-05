function loadPage() {
    setPageTheme();
    var isDay = sessionStorage.getItem("theSanmiPageTheme") == 'day' ? true : false;
    document.getElementsByClassName("toggle")[0].checked = isDay;
}

function setPageTheme(useToggle) {
    var result;
    if (useToggle != undefined) {
        result = document.getElementsByClassName("toggle")[0].checked ? 'day' : 'night';
    } else {
        var cachedTheme = sessionStorage.getItem("theSanmiPageTheme");
        if (cachedTheme == null) {
            var today = new Date();
            var hour = today.getHours();
            if (hour > 7 && hour < 19) {
                result = 'day';
            } else {
                result = 'night';
            }
        } else {
            result = cachedTheme;
        }
    }

    var bodyElement = document.getElementById("textBody");
    if (result == 'day') {
        bodyElement.classList.remove("w3-text-white", "bgimg-dark");
        bodyElement.classList.add("w3-text-black", "bgimg-light");
    } else if (result == 'night') {
        bodyElement.classList.remove("w3-text-black", "bgimg-light");
        bodyElement.classList.add("w3-text-white", "bgimg-dark");
    }
    sessionStorage.setItem("theSanmiPageTheme", result);
}

window.onload = loadPage;