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

    let servicos = "";
    const allButtons = document.querySelectorAll(".contato-servico-btn-active");
    allButtons.forEach(botao=>{
        servicos+=` ${botao.value}`;
    })

    const enviado = {
        nome,
        email,
        telefone,
        mensagem,
        servicos
    }

    console.log(enviado);

    const dados = document.querySelectorAll('.isSubmit');
    dados.forEach(dado=>{
        dado.classList.toggle("invisible");
    })
}
