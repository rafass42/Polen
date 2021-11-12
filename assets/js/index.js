//BOTÕES SERVIÇOS

function activeButton({target}){
    target.classList.toggle("contato-servico-btn-active");
}

//SUBMIT CONTATOS
function submitContato(){
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const mensagem = document.querySelector("textarea").value;
    
    const enviado = {
        nome,
        email,
        telefone,
        mensagem
    }

    const dados = document.querySelectorAll('.isSubmit');
    dados.forEach(dado=>{
        dado.classList.toggle("invisible");
    })
}
