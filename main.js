var canvas=new fabric.Canvas('myCanvas');

block_image_width=30;
block_image_height=30;

player_x=10;
player_y=10;

var player_object="";
var block_image_object="";

function player_update(){
    fabric.Image.fromURL("avenger_bg(1).jpg",function(Img){
        player_object=Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,left:player_x
        });
        canvas.add(player_object);
    });
}

function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_image_object=Img;

        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:player_y,left:player_x
        });
        canvas.add(block_image_object);
    });
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keyPressed=e.keyCode;
    if(keyPressed =='80' && e.shiftKey == true);
    {
        block_image_width = block_image_width+10;
        block_image_height = block_image_height+10;
        document.getElementById("Current_Width").innerHTML=block_image_width;
        document.getElementById("Current_Height").innerHTML=block_image_height;

    }

    if(keyPressed =='77' && e.shiftKey == true );
    {
        block_image_width = block_image_width-10;
        block_image_height = block_image_height-10;
        document.getElementById("Current_Width").innerHTML=block_image_width;
        document.getElementById("Current_Height").innerHTML=block_image_height;

    }

    if(keyPressed =='38'){
        up();
        console.log("up");

    }

    if(keyPressed =='40'){
        down();
        console.log("down");
        
    }

    if(keyPressed =='37'){
        left();
        console.log("left");
        
    }

    if(keyPressed =='39'){
        right();
        console.log("right");
        
    }

    if(keyPressed =='67'){
        new_image('captain_america_left_hand.png');
        console.log("c");
        
    }

    if(keyPressed =='70'){
        new_image('Final_output.png');
        console.log("f");
        
    }

    if(keyPressed =='72'){
        new_image('hulk_face.png');
        console.log("h");
        
    }

    if(keyPressed =='85'){
        new_image('hulk_left_hand.png');
        console.log("u");
        
    }

    if(keyPressed =='76'){
        new_image('hulk_legs.png');
        console.log("l");
        
    }

    if(keyPressed =='75'){
        new_image('hulk_right_hand.png');
        console.log("k");
        
    }

    if(keyPressed =='73'){
        new_image('hulkd_body.png');
        console.log("d");
        
    }

    if(keyPressed =='82'){
        new_image('ironman_body.png');
        console.log("i");
        
    }

    if(keyPressed =='79'){
        new_image('ironman_face.png');
        console.log("r");
        
    }

    if(keyPressed =='78'){
        new_image('ironman_left_hand.png');
        console.log("n");
        
    }

    if(keyPressed =='77'){
        new_image('ironman_legs.png');
        console.log("n");
        
    }

    if(keyPressed =='79'){
        new_image('ironman_right_hand.png');
        console.log("o");
        
    }

    if(keyPressed =='90'){
        new_image('player.png');
        console.log("z");
        
    }

    if(keyPressed =='68'){
        new_image('spiderman_body.png');
        console.log("s");
        
    }

    if(keyPressed =='69'){
        new_image('spiderman_face.png');
        console.log("e");
        
    }

    if(keyPressed =='65'){
        new_image('player_left_hand.png');
        console.log("a");
        
    }

    if(keyPressed =='71'){
        new_image('spiderman_legs.png');
        console.log("g");
        
    }

    if(keyPressed =='84'){
        new_image('spider_right_hand.png');
        console.log("t ");
        
    }

    if(keyPressed =='86'){
        new_image('thor_face.png');
        console.log("v");
        
    }

    if(keyPressed =='87'){
        new_image('thor_left_hand.png');
        console.log("w");
        
    }

    if(keyPressed =='88'){pg
        new_image('thor_right_hand.png');
        console.log("x");
        
    }

   
}

function up(){
    if(player_y>=0){
        player_y=player_y-block_image_height;
        canvas.remove(player_object);
        player_update();
    }
}

function down(){
    if(player_y<=500){
        player_y=player_y+block_image_height;
        canvas.remove(player_object);
        player_update();
    }
}

function left(){
    if(player_x>0){
        player_x=player_x-block_image_width;
        canvas.remove(player_object);
        player_update();
    }
}

function right(){
    if(player_x<=700){
        player_x=player_x+block_image_width;
        canvas.remove(player_object);
        player_update();
    }
}