var gameState = 1, score = 0;

var tom, jerry;
var cheeseimg, portalimg, jerryimg, tomimg;

var portal1, portal2;

var wall1, wall2, wall3, wall4, maze1, maze2, maze3, maze4, maze5, maze6, maze7, maze8 , maze9, maze10, maze11, maze12, maze13,
    maze14, maze15, maze16, maze17, maze18, maze19, maze20, maze21, maze22, maze23, maze24, maze25, maze26, maze27, maze28, maze29,
    maze30, maze31, maze32, maze33, maze34, maze35, maze36, maze37, maze38, maze39, maze40, maze41, maze42;

var cheese1, cheese2, cheese3, cheese4, cheese5, cheese6, cheese7, cheese8, cheese9, cheese10, cheese11, cheese12, cheese13,
    cheese14, cheese15, cheese16, cheese17, cheese18, cheese19, cheese20, cheese21, cheese22, cheese23, cheese24, cheese25, 
    cheese26, cheese27, cheese28, cheese29, cheese30, cheese31, cheese32, cheese33, cheese34, cheese35, cheese36, cheese37,
    cheese38, cheese39, cheese40, cheese41, cheese42, cheese43, cheese44, cheese45, cheese46, cheese47, cheese48, cheese49,
    cheese50;

function preload(){
    cheeseimg = loadImage("cheese.png");
    portalimg = loadImage("portal.png");
    jerryimg = loadImage("jerry.png");
    tomimg = loadImage('tom.png')
}

function setup(){
    createCanvas(displayWidth,displayHeight);
    wall1 = createSprite(100,400, 10, 550);
    wall1.shapeColor = "white";

    wall2 = createSprite(748,125, 1300, 10);
    wall2.shapeColor = "white";

    wall3 = createSprite(1395,400, 10, 550);
    wall3.shapeColor = "white";

    wall4 = createSprite(748, 675, 1300, 10);
    wall4.shapeColor = "white";

    maze1 = createSprite(200, 200, 10, 150);
    maze1.shapeColor = "white";

    maze2 = createSprite(300, 300, 10, 150);
    maze2.shapeColor = "white";

    maze3 = createSprite(400, 200, 10, 150);
    maze3.shapeColor = "white";

    maze4 = createSprite(500, 300, 10, 150);
    maze4.shapeColor = "white";

    maze5 = createSprite(348, 378, 500, 10);
    maze5.shapeColor = "white";

    maze6 = createSprite(200, 450, 100, 10);
    maze6.shapeColor = "white";

    maze7 = createSprite(152, 525, 10, 150);
    maze7.shapeColor = "white";

    maze8 = createSprite(200, 600, 100, 10);
    maze8.shapeColor = "white";

    maze9 = createSprite(300, 525, 10, 150);
    maze9.shapeColor = "white";

    maze10 = createSprite(350, 540, 100 ,10);
    maze10.shapeColor = "white";

    maze11 = createSprite(400, 525, 10, 150);
    maze11.shapeColor = "white";

    maze12 = createSprite(500, 525, 10, 150);
    maze12.shapeColor = "white";

    maze13 = createSprite(550, 452, 100, 10);
    maze13.shapeColor = "white";

    maze14 = createSprite(550, 530, 100, 10);
    maze14.shapeColor = "white";

    maze15 = createSprite(550, 598, 100, 10);
    maze15.shapeColor = "white";

    maze16 = createSprite(680, 525, 10, 150);
    maze16.shapeColor = "white";

    maze17 = createSprite(730, 452, 100 , 10);
    maze17.shapeColor = "white";

    maze18 = createSprite(730, 530, 100, 10);
    maze18.shapeColor = "white";

    maze19 = createSprite(730, 598, 100, 10);
    maze19.shapeColor = "white";

    maze20 = createSprite(900, 450, 100, 10);
    maze20.shapeColor = "white";

    maze21 = createSprite(850, 486, 10, 75);
    maze21.shapeColor = "white";

    maze22 = createSprite(900, 522, 100, 10);
    maze22.shapeColor = "white";

    maze23 = createSprite(948, 560, 10, 75);
    maze23.shapeColor = "white";

    maze24 = createSprite(900, 598, 100, 10);
    maze24.shapeColor = "white";

    maze25 = createSprite(1000, 525, 10, 150);
    maze25.shapeColor = "white";

    maze26 = createSprite(1050, 452, 100 , 10);
    maze26.shapeColor = "white";

    maze27 = createSprite(1050, 530, 100, 10);
    maze27.shapeColor = "white";

    maze28 = createSprite(1050, 598, 100, 10);
    maze28.shapeColor = "white";

    maze29 = createSprite(700, 200, 150, 10);
    maze29.shapeColor = "white";

    maze30 = createSprite(700, 278, 10, 150);
    maze30.shapeColor = "white";

    maze31 = createSprite(830, 278, 10, 150);
    maze31.shapeColor = "white";

    maze32 = createSprite(880, 278, 100, 10);
    maze32.shapeColor = "white";

    maze33 = createSprite(928, 278, 10, 150);
    maze33.shapeColor = "white";

    maze34 = createSprite(1000, 278, 10, 150);
    maze34.shapeColor = "white";

    maze35 = createSprite(1048, 205, 100, 10);
    maze35.shapeColor = "white";

    maze36 = createSprite(1048, 278, 100, 10);
    maze36.shapeColor = "white";

    maze37 = createSprite(1048, 354, 100, 10);
    maze37.shapeColor = "white";

    maze38 = createSprite(1170, 278, 10, 150);
    maze38.shapeColor = "white";

    maze39 = createSprite(1250, 278, 10, 150);
    maze39.shapeColor = "white";

    maze40 = createSprite(1300, 205, 100, 10);
    maze40.shapeColor = "white";

    maze41 = createSprite(1300, 278, 100, 10);
    maze41.shapeColor = "white";

    maze42 = createSprite(1290, 500, 200, 10);
    maze42.shapeColor = "white";

    cheese1 = createSprite(150, 300);
    cheese1.addImage(cheeseimg);
    cheese1.scale = 0.1;

    cheese2 = createSprite(250, 200);
    cheese2.addImage(cheeseimg);
    cheese2.scale = 0.1;

    cheese3 = createSprite(250, 300);
    cheese3.addImage(cheeseimg);
    cheese3.scale = 0.1;

    cheese4 = createSprite(350, 200);
    cheese4.addImage(cheeseimg);
    cheese4.scale = 0.1;

    cheese5 = createSprite(350, 300);
    cheese5.addImage(cheeseimg);
    cheese5.scale = 0.1;

    cheese6 = createSprite(450, 200);
    cheese6.addImage(cheeseimg);
    cheese6.scale = 0.1;

    cheese7 = createSprite(450, 300);
    cheese7.addImage(cheeseimg);
    cheese7.scale = 0.1;

    cheese8 = createSprite(550, 200);
    cheese8.addImage(cheeseimg);
    cheese8.scale = 0.1;

    cheese9 = createSprite(550, 300);
    cheese9.addImage(cheeseimg);
    cheese9.scale = 0.1;

    cheese10 = createSprite(650, 160);
    cheese10.addImage(cheeseimg);
    cheese10.scale = 0.1;

    cheese11 = createSprite(750, 160);
    cheese11.addImage(cheeseimg);
    cheese11.scale = 0.1;

    cheese12 = createSprite(850, 160);
    cheese12.addImage(cheeseimg);
    cheese12.scale = 0.1;

    cheese13 = createSprite(950, 160);
    cheese13.addImage(cheeseimg);
    cheese13.scale = 0.1;

    cheese14 = createSprite(1050, 160);
    cheese14.addImage(cheeseimg);
    cheese14.scale = 0.1;

    cheese15 = createSprite(1150, 160);
    cheese15.addImage(cheeseimg);
    cheese15.scale = 0.1;

    cheese16 = createSprite(1250, 160);
    cheese16.addImage(cheeseimg);
    cheese16.scale = 0.1;

    cheese17 = createSprite(1350, 160);
    cheese17.addImage(cheeseimg);
    cheese17.scale = 0.1;

    cheese18 = createSprite(650, 300);
    cheese18.addImage(cheeseimg);
    cheese18.scale = 0.1;

    cheese19 = createSprite(750, 300);
    cheese19.addImage(cheeseimg);
    cheese19.scale = 0.1;

    cheese20 = createSprite(880, 230);
    cheese20.addImage(cheeseimg);
    cheese20.scale = 0.1;

    cheese21 = createSprite(880, 330);
    cheese21.addImage(cheeseimg);
    cheese21.scale = 0.1;

    cheese22 = createSprite(1050, 310);
    cheese22.addImage(cheeseimg);
    cheese22.scale = 0.1;

    cheese23 = createSprite(1300, 310);
    cheese23.addImage(cheeseimg);
    cheese23.scale = 0.1;

    cheese24 = createSprite(150, 410);
    cheese24.addImage(cheeseimg);
    cheese24.scale = 0.1;

    cheese25 = createSprite(250, 410);
    cheese25.addImage(cheeseimg);
    cheese25.scale = 0.1;

    cheese26 = createSprite(350, 410);
    cheese26.addImage(cheeseimg);
    cheese26.scale = 0.1;

    cheese27 = createSprite(450, 410);
    cheese27.addImage(cheeseimg);
    cheese27.scale = 0.1;

    cheese28 = createSprite(550, 410);
    cheese28.addImage(cheeseimg);
    cheese28.scale = 0.1;

    cheese29 = createSprite(650, 410);
    cheese29.addImage(cheeseimg);
    cheese29.scale = 0.1;

    cheese30 = createSprite(750, 410);
    cheese30.addImage(cheeseimg);
    cheese30.scale = 0.1;

    cheese31 = createSprite(850, 410);
    cheese31.addImage(cheeseimg);
    cheese31.scale = 0.1;

    cheese32 = createSprite(950, 410);
    cheese32.addImage(cheeseimg);
    cheese32.scale = 0.1;

    cheese33 = createSprite(1050, 410);
    cheese33.addImage(cheeseimg);
    cheese33.scale = 0.1;

    cheese34 = createSprite(1150, 410);
    cheese34.addImage(cheeseimg);
    cheese34.scale = 0.1;

    cheese35 = createSprite(1250, 410);
    cheese35.addImage(cheeseimg);
    cheese35.scale = 0.1;

    cheese36 = createSprite(1359, 410);
    cheese36.addImage(cheeseimg);
    cheese36.scale = 0.1;

    cheese37 = createSprite(350, 490);
    cheese37.addImage(cheeseimg);
    cheese37.scale = 0.1;

    cheese38 = createSprite(550, 490);
    cheese38.addImage(cheeseimg);
    cheese38.scale = 0.1;

    cheese39 = createSprite(740, 490);
    cheese39.addImage(cheeseimg);
    cheese39.scale = 0.1;

    cheese40 = createSprite(890, 560);
    cheese40.addImage(cheeseimg);
    cheese40.scale = 0.1;

    cheese41 = createSprite(1050, 490);
    cheese41.addImage(cheeseimg);
    cheese41.scale = 0.1;

    cheese42 = createSprite(150, 640);
    cheese42.addImage(cheeseimg);
    cheese42.scale = 0.1;

    cheese43 = createSprite(250, 640);
    cheese43.addImage(cheeseimg);
    cheese43.scale = 0.1;

    cheese44 = createSprite(350, 640);
    cheese44.addImage(cheeseimg);
    cheese44.scale = 0.1;

    cheese45 = createSprite(450, 640);
    cheese45.addImage(cheeseimg);
    cheese45.scale = 0.1;

    cheese46 = createSprite(550, 640);
    cheese46.addImage(cheeseimg);
    cheese46.scale = 0.1;

    cheese47 = createSprite(650, 640);
    cheese47.addImage(cheeseimg);
    cheese47.scale = 0.1;

    cheese48 = createSprite(750, 640);
    cheese48.addImage(cheeseimg);
    cheese48.scale = 0.1;

    cheese49 = createSprite(850, 640);
    cheese49.addImage(cheeseimg);
    cheese49.scale = 0.1;

    cheese50 = createSprite(950, 640);
    cheese50.addImage(cheeseimg);
    cheese50.scale = 0.1;

    portal1 = createSprite(1050, 240);
    portal1.addImage(portalimg);
    portal1.scale = 0.3;

    portal2 = createSprite(200, 530);
    portal2.addImage(portalimg);
    portal2.scale = 0.3;

    jerry = createSprite(150, 200);
    jerry.addImage(jerryimg);
    jerry.scale = 0.18;
    jerry.setCollider("circle", 0, 0, 100);

    tom = createSprite(1250, 560);
    tom.addImage(tomimg);
    tom.scale = 0.2;
}

function draw(){
    background("#46f2c1");
    drawSprites();
    createEdgeSprites();

    fill("red");
    textSize(30);
    text("SCORE: "+score, 150, 100);

    if(gameState == 1)
    {

    if(keyDown("w")){
        jerry.y -= 8;
    }

    if(keyDown("s")){
        jerry.y += 8;
    }

    if(keyDown("a")){
        jerry.x -= 8;
    }

    if(keyDown("d")){
        jerry.x += 8;
    }

    if(jerry.isTouching(cheese1)){
        cheese1.destroy();
        score += 5;
    }

    if(jerry.isTouching(cheese2)){
        cheese2.destroy();
        score += 5;
    }

    if(jerry.isTouching(cheese3)){
        cheese3.destroy();
        score += 5;
    }

    if(jerry.isTouching(cheese4)){
        cheese4.destroy();
        score += 5;
    }

    if(jerry.isTouching(cheese5)){
        cheese5.destroy();
        score += 5;
    }

    if(jerry.isTouching(cheese6)){
        cheese6.destroy();
        score += 5;
    }

    if(jerry.isTouching(cheese7)){
        cheese7.destroy();
        score += 5;
    }

    if(jerry.isTouching(cheese8)){
        cheese8.destroy();
        score += 5;
    }

    if(jerry.isTouching(cheese9)){
        cheese9.destroy();
        score += 5;
    }

    if(jerry.isTouching(cheese10)){
        cheese10.destroy();
        score += 5;
    }

    if(jerry.isTouching(cheese11)){
        cheese11.destroy();
        score += 5;
    }

    if(jerry.isTouching(cheese12)){
        cheese12.destroy();
        score += 5;
    }

    if(jerry.isTouching(cheese13)){
        cheese13.destroy();
        score += 5;
    }

    if(jerry.isTouching(cheese14)){
        cheese14.destroy();
        score += 5;
    }

    if(jerry.isTouching(cheese15)){
        cheese15.destroy();
        score += 5;
    }

    if(jerry.isTouching(cheese16)){
        cheese16.destroy();
        score += 5;
    }

    if(jerry.isTouching(cheese17)){
        cheese17.destroy();
        score += 5;
    }

    if(jerry.isTouching(cheese18)){
        cheese18.destroy();
        score += 5;
    }

    jerry.bounceOff(wall1);
    jerry.bounceOff(wall2);
    jerry.bounceOff(wall3);
    jerry.bounceOff(wall4);
    jerry.bounceOff(maze1);
    jerry.bounceOff(maze2);
    jerry.bounceOff(maze3);
    jerry.bounceOff(maze4);
    jerry.bounceOff(maze5);
    jerry.bounceOff(maze6);
    jerry.bounceOff(maze7);
    jerry.bounceOff(maze8);
    jerry.bounceOff(maze9);
    jerry.bounceOff(maze10);
    jerry.bounceOff(maze11);
    jerry.bounceOff(maze12);
    jerry.bounceOff(maze13);
    jerry.bounceOff(maze14);
    jerry.bounceOff(maze15);
    jerry.bounceOff(maze16);
    jerry.bounceOff(maze17);
    jerry.bounceOff(maze18);
    jerry.bounceOff(maze19);
    jerry.bounceOff(maze20);
    jerry.bounceOff(maze21);
    jerry.bounceOff(maze22);
    jerry.bounceOff(maze23);
    jerry.bounceOff(maze24);
    jerry.bounceOff(maze25);
    jerry.bounceOff(maze26);
    jerry.bounceOff(maze27);
    jerry.bounceOff(maze28);
    jerry.bounceOff(maze29);
    jerry.bounceOff(maze30);
    jerry.bounceOff(maze31);
    jerry.bounceOff(maze32);
    jerry.bounceOff(maze33);
    jerry.bounceOff(maze34);
    jerry.bounceOff(maze35);
    jerry.bounceOff(maze36);
    jerry.bounceOff(maze37);
    jerry.bounceOff(maze38);
    jerry.bounceOff(maze39);
    jerry.bounceOff(maze40);
    jerry.bounceOff(maze41);
    jerry.bounceOff(maze42);
    }
}