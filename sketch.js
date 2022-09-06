var jogador, nave1, nave2, coreV1, coreV2, coreV3, coracaoVazio,  tiro, explosao, fundo;
var jogadorImg, nave1Img, nave2Img, coracaoImg, coracaoVazioImg, tiroImg, explosaoImg, fundoImg;

function preload(){
    jogadorImg = loadImage("spacebattle_06.png");
    nave1Img = loadImage("retroship_12.png");
    nave2Img = loadImage("retroship_12.png");
    coracaoImg = loadImage("retro_red_heart.png");
    coracaoVazioImg = loadImage("retro_empty_heart.png");
    tiroImg = loadImage("retro_coin.png");
    explosaoImg = loadImage("retro_purple_burst.png");
    fundoImg = loadImage("Imported piskel.png");
}

function setup(){
    createCanvas(400, 400);
    fundo = createSprite(200, 200);
    fundo.addImage(fundoImg)
    jogador = createSprite(75, 200)
    jogador.addImage(jogadorImg);
    jogador.scale = 0.2
}

function draw(){
    if(keyDown("w")){
        jogador.y -= 5
    }else if(keyDown("s")){
        jogador.y += 5
    }
    drawSprites();
}