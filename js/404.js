function googleSearch() {
    var url = "https://www.google.com/search?q=" + document.getElementById("search").value;
    window.open(url, "_blank").focus;
}

var search_btn = document.getElementById("search_btn");

search_btn.addEventListener("click", googleSearch);