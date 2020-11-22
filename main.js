var canvas = new fabric.Canvas("myCanvas");
var block_image_width = 30;
var block_image_height = 30;
var player_x_position = 10;
var player_y_position = 10;
var player_image_object = "";
var block_image_object = "";
function player_update(){
    fabric.Image.fromURL("player.png", function(uploaded_player_image){
        player_image_object = uploaded_player_image;
        player_image_object.scaleToWidth(100);
        player_image_object.scaleToHeight(120);
        player_image_object.set({
            top: player_y_position,
            left: player_x_position
        });
        canvas.add(player_image_object);
    });
}
function new_image(new_image){
    fabric.Image.fromURL(new_image, function(uploaded_object_image){
        block_image_object = uploaded_object_image;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top: player_y_position,
            left: player_x_position
        });
        canvas.add(block_image_object);
    });
}
player_update();
window.addEventListener("keydown", mykeydown);
function mykeydown(superhero) {
    keypressed = superhero.keyCode;
    console.log(keypressed);
    if (superhero.shiftKey == true && keypressed == '80') {
        console.log("Shift & letter P are pressed together");
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    if (superhero.shiftKey == true && keypressed == '77') {
        console.log("Shift & letter M are pressed together");
        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    if (keypressed == '65') {
        new_image('captain_america_left_hand.png');
        console.log("A is pressed");
    }
    if (keypressed == '66') {
        new_image('hulk_body.png');
        console.log("B is pressed");
    }
    if (keypressed == '67') {
        new_image('hulk_face.png');
        console.log("C is pressed");
    }
    if (keypressed == '68') {
        new_image('hulk_left_hand.png');
        console.log("D is pressed");
    }
    if (keypressed == '69') {
        new_image('hulk_legs.png');
        console.log("E is pressed");
    }
    if (keypressed == '70') {
        new_image('hulk_right_hand.png');
        console.log("F is pressed");
    }
    if (keypressed == '71') {
        new_image('ironman_body.png');
        console.log("G is pressed");
    }
    if (keypressed == '72') {
        new_image('ironman_face.png');
        console.log("H is pressed");
    }
    if (keypressed == '73') {
        new_image('ironman_left_hand.png');
        console.log("I is pressed");
    }
    if (keypressed == '74') {
        new_image('ironman_legs.png');
        console.log("J is pressed");
    }
    if (keypressed == '75') {
        new_image('ironman_right_hand.png');
        console.log("K is pressed");
    }
    if (keypressed == '76') {
            new_image('spiderman_body.png');
            console.log("L is pressed");
    }
    if (keypressed == '84') {
        new_image('spiderman_face.png');
        console.log("T is pressed");
    }
    if (keypressed == '78') {
        new_image('siderman_left_hand.png');
        console.log("N is pressed");
    }
    if (keypressed == '79') {
        new_image('spiderman_legs.png');
        console.log("O is pressed");
    }
    if (keypressed == '85') {
        new_image('spiderman_right_hand.png');
        console.log("U is pressed");
    }
    if (keypressed == '81') {
        new_image('thor_face.png');
        console.log("Q is pressed");
    }
    if (keypressed == '82') {
        new_image('thor_left_hand.png');
        console.log("R is pressed");
    }
    if (keypressed == '83') {
        new_image('thor_right_hand.png');
        console.log("S is pressed");
    }
    if (keypressed == '37') {
        left();
        console.log("Left arrow key is pressed");
    }
    if (keypressed == '38') {
        up();
        console.log("Up arrow key is pressed");
    }if (keypressed == '39') {
        right();
        console.log("Right arrow key is pressed");
    }if (keypressed == '40') {
        down();
        console.log("Down arrow key is pressed");
    }
}
function up() {
    if (player_y_position >= 0) {
        player_y_position = player_y_position - block_image_height;
        console.log("block image height = " + block_image_height);
        console.log("When Up arrow key is pressed, X = " + player_x_position + ", Y = " + player_y_position);
        canvas.remove(player_image_object);
        player_update();
    }
}
function down() {
    if (player_y_position <= 500) {
        player_y_position = player_y_position + block_image_height;
        console.log("block image height = " + block_image_height);
        console.log("When Down arrow key is pressed, X = " + player_x_position + ", Y = " + player_y_position);
        canvas.remove(player_image_object);
        player_update();
    }
}
function left() {
    if (player_x_position >= 0) {
        player_x_position = player_x_position - block_image_width;
        console.log("block image width = " + block_image_width);
        console.log("When Left arrow key is pressed, X = " + player_x_position + ", Y = " + player_y_position);
        canvas.remove(player_image_object);
        player_update();
    }
}
function right() {
    if (player_x_position <= 700) {
        player_x_position = player_x_position + block_image_width;
        console.log("block image width = " + block_image_width);
        console.log("When Right arrow key is pressed, X = " + player_x_position + ", Y = " + player_y_position);
        canvas.remove(player_image_object);
        player_update();
    }
}