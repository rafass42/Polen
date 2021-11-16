//Enviado Page
function enviado() {
    if(window.location.href.includes("XlmdskI")){
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
    let assunto = document.getElementById("assunto");
    let servicos = "";
    const allButtons = document.querySelectorAll(".contato-servico-btn-active");
    allButtons.forEach(botao=>{
        servicos+=` ${botao.value}`;
    })
    assunto.value=servicos;
}
