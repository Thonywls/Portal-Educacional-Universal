function entrar(){

    let nome = document.getElementById("nome").value;

    localStorage.setItem("aluno", nome);

    window.location.href = "portal.html";
}