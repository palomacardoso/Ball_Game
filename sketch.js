var fabrica, aviao, bola, boneca, esteira, caixa, ejetor, bolaCaixa;
var esteiraIMG, caixaIMG, fabricaIMG, ejetorIMG, bolaIMG, bolaCaixaIMG;
var score = 0;

function preload() {
  esteiraIMG = loadImage("esteira.PNG")
  caixaIMG = loadImage("caixa.PNG")
  fabricaIMG = loadImage("fabrica.jpg")
  ejetorIMG = loadImage("ejetor.png")
  bolaIMG = loadImage("bola.png")
  bolaCaixaIMG = loadImage("bolaCaixa.png")
}

function setup() {
  createCanvas(980, 600);
  fabrica = createSprite(600, 300)
  fabrica.addImage(fabricaIMG)
  esteira = createSprite(500, 540)
  esteira.addImage(esteiraIMG)
  caixa = createSprite(150, 450)
  caixa.addImage(caixaIMG)
  caixa.scale = 0.3
  caixa.velocityX = 5
  esteira.velocityX = 4
  ejetor = createSprite(800, 50)
  ejetor.addImage(ejetorIMG)
  ejetor.scale = 0.6
  bola = createSprite(750, 90)
  bola.addImage(bolaIMG)
  bola.scale = 0.06
  bolaCaixa = createSprite(150, 450)
  bolaCaixa.addImage(bolaCaixaIMG)
  bolaCaixa.scale = 0.3
  bolaCaixa.visible = false
  bolaCaixa.velocityX = 5
}

function draw() {
  background("black");
  drawSprites();
  textSize(20)
  fill("black")
  text("score: " + score, 30, 50)


  if (esteira.x > 700) {
    esteira.x = esteira.width / 8;
  }

  if (keyDown("space")) {
    bola.y = bola.y + 5
  }

  if (caixa.x > 980) {
    caixa.x = 0
    caixa.visible = true
    bola.visible = true
    bola.y = 90
  }

  if (bolaCaixa.x > 980) {
    bolaCaixa.x = 0
    bolaCaixa.visible = false
  }

  if (bola.isTouching(caixa)) {
    bolaCaixa.visible = true
    caixa.visible = false
    bola.visible = false
    score = score + 1;
    esteira.velocityX = 0.08 * score
    caixa.velocityX = 0.08 * score
    bolaCaixa.velocityX = 0.08 * score
  }
  //if (score === 100) {
    //gameOver()
  //}
}
//function gameOver() {
  //swal({
    //title: `Fim de Jogo!!!`,
    //text: "Obrigada por jogar!!",
    //imageUrl: "https://raw.githubusercontent.com/whitehatjr/PiratesInvasion/main/assets/boat.png",
    //imageSize: "150x150", confirmButtonText: "Jogar Novamente"
  //},
    //function (isConfirm) {
      //if (isConfirm) {
        //location.reload();
      //}
    //});
//}
