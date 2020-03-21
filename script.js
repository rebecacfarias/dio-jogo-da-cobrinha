let canvas = document.getElementById("snake"); //trabalha a parte grafica do jogo
let context = canvas.getContext("2d"); //renderiza o desenho dentro do canvas
let box = 32; //32 pixels

function criarBG(){
    context.fillStyle = "lightgreen";
    context.fillRect(0,0,16*box,16*box); //onde acontece o jogo, pos x,y,altura,largura
}

criarBG();
