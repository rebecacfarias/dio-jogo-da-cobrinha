let canvas = document.getElementById("snake"); //trabalha a parte grafica do jogo
let context = canvas.getContext("2d"); //renderiza o desenho dentro do canvas
let box = 32; //32 pixels, "quadrados" que vao compor o jogo
let snake = [];
//tamanho dos elementos que vao compor a cobra
snake[0] = {
    x: 8*box,
    y: 8*box
}

//direção
let direction = "right";


function criarBG(){
    context.fillStyle = "lightgreen";
    context.fillRect(0,0,16*box,16*box); //onde acontece o jogo, pos x,y,altura,largura
}

function criarCobrinha(){
    for(i=0; i<snake.length;i++){
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y,box,box); //tamanho da cobra
    }
}

//função que vai receber as outras para fazer o jogo acontecer
function iniciarJogo(){
    criarBG();
    criarCobrinha();

//MOVIMENTAÇÃO DA COBRA

    let movHorizontal = snake[0].x;
    let movVertical = snake[0].y;
    if(direction == "right") movHorizontal+=box;
    if(direction == "left") movHorizontal-=box;
    if(direction == "up") movVertical -=box;
    if(direction == "down") movVertical += box;
   //1) RETIRA O QUADRADO
    snake.pop(); // vai retirar o último elemento, para que o quadrado se "mova"

   //2) ADICIONA UMA NOVA "CABECA"
    let cabeca = {
        x: movHorizontal,
        y: movVertical
    }

    snake.unshift(cabeca);
}
// a cada 100 milisegundos será renovada para que ocorra a movimentação

let jogo = setInterval(iniciarJogo,100);

