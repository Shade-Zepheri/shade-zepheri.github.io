document.addEventListener("DOMContentLoaded", function() {
    M.AutoInit();
});

function getParameterByName(name) {
    let params = new URLSearchParams(location.search.slice(1));

    if (params.has("p")) {
        return params.get("p");
    }

    return "";
}