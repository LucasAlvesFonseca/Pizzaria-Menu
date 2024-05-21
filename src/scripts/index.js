document.getElementById("button_register").addEventListener("click", () => {
    document.querySelector(".div_container_logar").style.display = "none";
    document.querySelector(".div_container_criarConta").style.display = "flex";
    document.querySelector(".div_container_sideRegistrar").style.display = "none";
    document.querySelector(".div_container_sideLogar").style.display = "flex";
    document.querySelector("#id_div_container_sideLogar").classList.add("opacidade");
    document.querySelector(".div_container_criarConta").classList.add("opacidade");
});

document.getElementById("button_login").addEventListener("click", () => {
    document.querySelector(".div_container_criarConta").style.display = "none";
    document.querySelector(".div_container_logar").style.display = "flex";
    document.querySelector(".div_container_sideLogar").style.display = "none";
    document.querySelector(".div_container_sideRegistrar").style.display = "flex";
    document.querySelector("#id_div_container_sideRegistrar").classList.add("opacidade");
    document.querySelector(".div_container_logar").classList.add("opacidade");
});
