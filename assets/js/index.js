//Animação números home
function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
  
  const numerosAnimados = document.querySelectorAll(".numerosAnimados");
  numerosAnimados.forEach(numero=>{
    animateValue(numero, 0, numero.innerText, 1700);
  })
  

//Accordion Produtos
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function(e) {
    
    for(x = 0; x < acc.length; x++){
        if(acc[x].classList.contains("active") && acc[x]!=e.target){
            acc[x].classList.toggle("active");   
            let proximoRetirado = acc[x].nextElementSibling;
            proximoRetirado.style.display="none";
        }    
    }

    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

//Enviado Page
function enviado() {
    let link = location.search;
    let flag = location.search.includes("XlmdskI=Envl0xk");
    if(flag){
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
