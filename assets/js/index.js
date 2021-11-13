//Enviado Page
function enviado() {
    const parametros = new URLSearchParams(location.search);
    enviado = parametros.get('enviado');
    
    if(enviado==="true"){
        const dados = document.querySelectorAll('.isSubmit');
        dados.forEach(dado=>{
            dado.classList.toggle("invisible");
        })
    }
}

//BOTÕES SERVIÇOS
function activeButton(event){
    event.preventDefault();
    event.target.classList.toggle("contato-servico-btn-active");
}

//SUBMIT CONTATOS
function submitContato(){
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const mensagem = document.querySelector("textarea").value;
    document.getElementById("isEnv").setAttribute('value','true');

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

}
