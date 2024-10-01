// Arquivo o qual fica o nosso JavaScript

/*
document.getElementById("botao-trocar-texto").addEventListener("click",function(){
    let titulo = document.getElementById("titulo");
    if(titulo.text == "Título Inicial") {
       titulo.text = "texto trocado";
    } else titulo.text = "Título Inicial";
    document.getElementById("titulo").textContent = titulo.text;
})
*/

//usando JQUERY

let textoOriginal = document.getElementById("titulo");
$(document).ready(function() {
    $("#botao-trocar-texto").on("click",function(){
        //errado
        let titulo = document.getElementById("titulo");
        if(titulo.text == "Título Inicial") {
        titulo.text = "Texto Trocado";
        } else  titulo.text = "Título Inicial";
        document.getElementById("titulo").textContent = titulo.text;

    })

    let corAtualBranca = true;
    $("#botao-trocar-cor").on("click",function(){
        if(corAtualBranca) {
            $('body').css('background-color','pink')
            corAtualBranca = false;
        } else {
            $('body').css('background-color','white')
            corAtualBranca = true;
        }
            
    })

    //pegar input e trocar o texto
    $("#botao-alterar-texto").on("click",function(){
       let novoTexto = $("#input-novo-texto").val()
       if(!novoTexto) alert("insira um texto");
       else $("#titulo").text(novoTexto)
    })

})




/*
document.getElementById("botao-alterar-texto").addEventListener("click",function(){
    let texto = document.getElementById("input-novo-texto").value;
    document.getElementById("titulo").textContent = texto;
})
*/



/*
document.getElementById("botao-trocar-cor").addEventListener("click",function(){
    if(document.body.style.backgroundColor == 'white') document.body.style.backgroundColor = 'green';
    else document.body.style.backgroundColor = 'white';
})
*/


let qtd=0;
function funcSecreta() {
    const img = document.createElement("img");
    img.src = "careca.jpg";
    img.width = "400";
    if(qtd==0) {
        document.body.appendChild(img);
        img.width = "400";
        qtd++;
    } else if(qtd==1) {
        img.src = "shape.jpg";
        document.body.appendChild(img);
        img.width = "400";
        qtd++;
    } else if(qtd==2) {
        img.src = "fofo.gif";
        document.body.appendChild(img);
        img.width = "400";
        qtd++;
    } else if(qtd==3) {
        img.src = "animePistol.gif";
        document.body.appendChild(img);
        img.width = "400";
        qtd++;
    }
}


function funcSecreta2() {
    const imgA = [document.createElement("img")];
    if(qtd==0) {
        imgA[0].src = "careca.jpg";
        imgA[0].width = "400";
        document.body.appendChild(imgA[0]);
        qtd++;
    }
    else if(qtd==1) {
        imgA.push(document.createElement("img"));
        imgA[1].src = "shape.jpg";
        imgA[1].width = "400";
        document.body.appendChild(imgA[1]);
        qtd++;
    }
    else if(qtd==2) {
        imgA.push(document.createElement("img"));
        imgA[2].src = "animePistol.gif";
        imgA[2].width = "400";
        document.body.appendChild(imgA[2]);
        qtd++;
    }
}
