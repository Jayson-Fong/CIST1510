function navExpand() {
    var x = document.getElementById("nav");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function resetNav() {
    var x = document.getElementById("nav");
    if (window.innerWidth <= 768) {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}