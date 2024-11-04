document.getElementById("toggle-button").addEventListener("click", function() {
    const img = document.getElementById("minha-imagem");
    if (img.classList.contains("hidden")) {
        img.classList.remove("hidden"); 
    } else {
        img.classList.add("hidden"); 
    }
});
