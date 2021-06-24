/**
 * @description      : 
 * @author           : William
 * @group            : 
 * @created          : 24/06/2021 - 08:42:10
 * 
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 24/06/2021
 * - Author          : William
 * - Modification    : 
 **/
deixe canvas = document.getElementById("cobra"); // criar elemento que irá rodar o jogo
deixe context = canvas.getContext("2d"); // ....
let box = 32;
deixe cobra = []; // criar cobrinha como lista, já que ela vai ser uma série de coordenadas, que quando pintadas, criam os quadradinhos
cobra[0] = {
    x: 8 * caixa,
    y: 8 * caixa
}
deixe direção = "certo";
deixe comida = {
    x: matemática.floor(Math.random() * 15 + 1) * box,
    y: matemática.floor(Math.random() * 15 + 1) * box
}

function criarBG() {
    contexto.fillStyle = "verde claro ";
    contexto.fillRect(0, 0, 16 * caixa, 16 * caixa); // desenha o retângulo usando xeyea largura e altura setadas
}

function criarCobrinha() {
    para(i = 0; i < cobra.comprimento; i++) {
        contexto.fillStyle = "verde";
        contexto.fillRect(cobra[i].x, cobra[i].y, caixa, caixa);
    }
}

function drawFood() {
    contexto.fillStyle = "vermelho";
    contexto.fillRect(comida.x, comida.y, caixa, caixa);
}

// quando um evento acontece, detecta e chama uma função
documento.addEventListener('keydown', update);

atualização de função(evento) {
    if (event.keyCode == 37 && direction! = 'right') direction = 'left';
    if (event.keyCode == 38 && direction! = 'down') direction = 'up';
    if (event.keyCode == 39 && direction! = 'left') direction = 'right';
    if (event.keyCode == 40 && direction! = 'up') direction = 'down';
}

function iniciarJogo() {

    if (cobra[0].x > 15 * caixa && direção == "direita") cobra[0].x = 0;
    if (cobra[0].x < 0 && direção == 'esquerda') cobra[0].x = 16 * caixa;
    if (cobra[0].y > 15 * caixa && direção == "para baixo") cobra[0].y = 0;
    if (cobra[0].y < 0 && direction == 'up') cobra[0].y = 16 * caixa;

    para(i = 1; i < cobra.comprimento; i++) {
        if (cobra[0].x == cobra[i].x && cobra[0].y == cobra[i].y) {
            clearInterval(jogo);
            alert('Game Over :(');
        }
    }

    criarBG();
    criarCobrinha();
    drawFood();

    deixe snakeX = snake[0].x;
    deixe snakeY = snake[0].y;

    if (direção == "direita") snakeX + = caixa;
    if (direção == "esquerda") snakeX - = caixa;
    if (direção == "para cima") snakeY - = caixa;
    if (direção == "para baixo") snakeY + = caixa;

    if (snakeX! = comida.x || snakeY! = comida.y) {
        cobra.pop(); // pop tira ou último elemento da lista
    } else {
        comida.x = matemática.chão(matemática.aleatório() * 15 + 1) * caixa;
        comida.y = matemática.chão(matemática.aleatório() * 15 + 1) * caixa;
    }

    deixe newHead = {
        x: snakeX,
        y: snakeY
    }

    cobra.unshift(newHead); // método unshift adiciona como primeiro quadradinho da cobrinha
}

deixe jogo = setInterval(iniciarJogo, 100);