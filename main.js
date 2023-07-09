function resultado(){

//Variáveis responsáveis pela Idade!
var nascimento = document.getElementById('txtAno');
var anoNascimento = Number(nascimento.value);
var data = new Date();
var ano = data.getFullYear();
var idade = Number(ano-anoNascimento);

//Variáveis referente ao Sexo do Usuário.
var sexo = document.getElementById('txtSexo');
var sexoEscolhido = (sexo.checked);

//Variável referente a Mensagem que será alterada na tela.
var msg = document.getElementById('msg');

//Variável referente a Imagem que será alterada na tela.
var img = document.createElement('img');
img.setAttribute('id', 'foto');

//Tratativa de erros, caso usuário preencha o ano de nascimento incorretamente.
if (anoNascimento == 0 || anoNascimento > ano){
    alert('[ERRO] Por favor verifique os dados preenchidos e tente novamente!');
}
else{



if(sexoEscolhido == true){
    sexo = 'Homem';
    if (idade >= 0 && idade < 10){
        //criança
        img.setAttribute('src', './assets/fotobebemasculino.jpg');
    }
    else if (idade >= 10 && idade < 21 ){3
        //jovem
        img.setAttribute('src', './assets/fotojovemmasculino.jpg');
    }
    else if (idade >= 21 && idade < 50){
        //adulto
        img.setAttribute('src', './assets/fotoadultomasculino.jpg');
    }
    else{
        //idoso
        img.setAttribute('src', './assets/fotoidosohomem.jpg');
    }
}
else if(sexoEscolhido == false){
    sexo = 'Mulher';
    if (idade >= 0 && idade < 10){
        //criança
        img.setAttribute('src', './assets/fotobebefeminino.jpg');
    }
    else if (idade >= 10 && idade < 21 ){
        //jovem
        img.setAttribute('src', './assets/fotojovemfeminino.jpg');
    }
    else if (idade >= 21 && idade < 50){
        //adulto
        img.setAttribute('src', './assets/fotoadultamulher.jpg');
    }
    else{
        //idoso
        img.setAttribute('src', './assets/fotoidosomulher.jpg');
    }
}

//Altera mensagem em tela de acordo com idade e sexo selecionados
msg.innerHTML = `Você é um(a) ${sexo} e tem ${idade} anos de idade!`;
msg.appendChild(img);
}






}
