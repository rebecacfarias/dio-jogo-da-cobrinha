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
//comida
let food = {
    //gerar posições aleatorias,
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

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

function desenharComida(){
    context.fillStyle = "red";
    context.fillRect(food.x,food.y,box,box);
}


//CRIANDO EVENTO PARA O RECONHECIMENTO DOS COMANDOS DE MOVIMENTO E ATUALIZAÇÃO DA DIRECTION
document.addEventListener('keydown',update); //chama a update 

//update realiza as alterações de acordo com a tecla pressionada
function update(event){
    //37 esquerda, 38 cima, 39 direita, 40 baixo
    if(event.keyCode == 37 && direction != "right")
        direction = "left";
    else if(event.keyCode == 38 && direction != "down")
        direction = "up";
    else if(event.keyCode == 39 && direction != "left")
        direction = "right";
    else if(event.keyCode == 40 && direction != "up")
        direction = "down";
}

//função que vai receber as outras para fazer o jogo acontecer
function iniciarJogo(){
     if(snake[0].x > 15*box && direction == "right")
        snake[0].x = 0;
     if(snake[0].x < 0 && direction == "left")
        snake[0].x = 16*box;
     if(snake[0].y > 15*box && direction == "down")
        snake[0].y = 0;
     if(snake[0].y < 0 && direction == "up")
        snake[0].y = 16*box;
  // CHECANDO SE A CABEÇA DA COBRA CHOCOU COM O CORPO
    //começa de 1 pois a cabeça( pos 0 ) é a referencia de comparação
    for(i = 1;i<snake.length;i++){
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
            clearInterval(jogo);
            alert('GAME OVER :(');
            alert('F5 TO PLAY AGAIN');
        }
    }    

    criarBG();
    criarCobrinha();
    desenharComida();

//MOVIMENTAÇÃO DA COBRA
    let movHorizontal = snake[0].x;
    let movVertical = snake[0].y;
    if(direction == "right") 
        movHorizontal+=box;
    if(direction == "left") 
        movHorizontal-=box;
    if(direction == "up") 
        movVertical -=box;
    if(direction == "down") 
        movVertical += box;


   //1) RETIRA O QUADRADO
   if(movHorizontal!=food.x || movVertical != food.y){
    snake.pop(); // caso a posição da cobra seja diferente da posição da comida, ela continua tendo apenas um "quadrado"
   }
   else{
       food.x = Math.floor(Math.random() * 15 + 1) * box;
       food.y = Math.floor(Math.random() * 15 + 1) * box;
   } 
    
   //2) ADICIONA UMA NOVA "CABECA", FAZENDO  A COBRA SE MOVER E, CASO NAO ENTRE NO IF ACIMA, A COBRA CRESCE
    let cabeca = {
        x: movHorizontal,
        y: movVertical
    }
    snake.unshift(cabeca);
}
// a cada 100 milisegundos será renovada para que ocorra a movimentação

let jogo = setInterval(iniciarJogo,100);

