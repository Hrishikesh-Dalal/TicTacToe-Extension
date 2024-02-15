//define variable
var selected_tile;
//true == x false == 0
var toggle_turn = 1; 
let mode = 0;
let count = 0;
window.onload = function(){
    set_board();
    set_buttons();
    
}
function set_board(){
    for(let r = 0; r<3; r++){
        for(let c = 0; c<3; c++){
            let unit = document.createElement("div");
            unit.id = r.toString() +"-"+ c.toString();
            unit.classList.add("unit");
            this.value = "null";
            document.getElementById("board").appendChild(unit);
            
            unit.addEventListener("click", play);
            
            // play_comp();
        }
    }
}
function set_buttons(){
    for(let i = 0; i<3; i++){
        let btn = document.createElement("button");
        btn.id =i;
        if(i===0){
        btn.innerText = "Human";}
        else if(i===1){
            btn.innerText = "Easy Comp";}
        else if(i===2){
                btn.innerText = "Evil Comp";}
        btn.classList.add("button");
        document.querySelector(".buttons").appendChild(btn);
        display_scr();
        btn.addEventListener("click", set_mode);
        
    }
    
    //set_board();
}
function set_mode(){
    let level = this;
    if(level.id == 0){
        mode = 0;
    }
    if(level.id == 1){
        mode = 1;
    }
    if(level.id == 2){
        mode = 2;
    }
}

function display_scr(){
    document.getElementById("score").innerText = "X : " + localStorage.getItem("x_scr") + "  , 0 : " + localStorage.getItem("o_scr");
}


function play(){
    
    if(count <= 8){
        if(mode == 0) {
            selected_tile = this;
            if(toggle_turn == 2 || toggle_turn == 4 || toggle_turn == 6 || toggle_turn == 8 || toggle_turn == 10){
                // document.getElementById("turn_text").innerText = "O Turn";
                //play_0();
                count++;
                play_0();
                //play_comp();
            }
            else if(toggle_turn == 1 || toggle_turn == 3 || toggle_turn == 5 || toggle_turn == 7 || toggle_turn == 9){
                //document.getElementById("turn_text").innerText = "X Turn";
                count++;
                play_x();
                // setTimeout(smart_comp, 2000);
                // play_comp();
                // smart_comp();
            }
            chk_win();
        }
        if(mode == 1) {
            selected_tile = this;
            if(toggle_turn == 2 || toggle_turn == 4 || toggle_turn == 6 || toggle_turn == 8 || toggle_turn == 10){
                // document.getElementById("turn_text").innerText = "O Turn";
                //play_0();
                //play_0();
                //play_comp();
            }
            else if(toggle_turn == 1 || toggle_turn == 3 || toggle_turn == 5 || toggle_turn == 7 || toggle_turn == 9){
                //document.getElementById("turn_text").innerText = "X Turn";
                play_x();
                count++;
                setTimeout(play_comp, 2000);
                //play_comp();
                // smart_comp();
            }
            chk_win();
        }
        if(mode == 2) {
            selected_tile = this;
            if(toggle_turn == 2 || toggle_turn == 4 || toggle_turn == 6 || toggle_turn == 8 || toggle_turn == 10){
                // document.getElementById("turn_text").innerText = "O Turn";
                //play_0();
                play_0();
                //play_comp();
            }
            else if(toggle_turn == 1 || toggle_turn == 3 || toggle_turn == 5 || toggle_turn == 7 || toggle_turn == 9){
                //document.getElementById("turn_text").innerText = "X Turn";
                play_x();
                count++;
                setTimeout(smart_comp, 2000);
                // play_comp();
                // smart_comp();
            }
            chk_win();
        }   
        
        console.log("here "+count)
    }
}
function play_x(){
    selected_tile.classList.remove("add_0");
    selected_tile.classList.add("add_x");
    selected_tile.innerText = "X";
    toggle_turn++;
}
function play_0(){
    selected_tile.classList.remove("add_x");
    selected_tile.classList.add("add_0");
    selected_tile.innerText = "0";
    toggle_turn++;
}
function chk_win(){
    chk_row();
    chk_col();
    chk_dia();
}
function chk_row(){
    for(let r = 0; r<3; r++){
        if(
            document.getElementById(r.toString()+"-"+"0").innerText == document.getElementById(r.toString()+"-"+"1").innerText && document.getElementById(r.toString()+"-"+"2").innerText == document.getElementById(r.toString()+"-"+"1").innerText && document.getElementById(r.toString()+"-"+"1").innerText != ""
        ){
        document.getElementById("turn_text").innerText = document.getElementById(r.toString()+"-"+"2").innerText + " Wins! Row" +r
        if(document.getElementById(r.toString()+"-"+"2").innerText == "X"){
            //keeping score board
            let x_score = parseInt(localStorage.getItem("x_scr"));
            console.log(x_score)
            if(x_score==null){
                x_score=0;
            }
            x_score++;
            //localStorage.removeItem("x_scr");
            localStorage.setItem("x_scr", JSON.stringify(x_score));
        }
        if(document.getElementById(r.toString()+"-"+"2").innerText == "0"){
            //keeping score board
            let o_score = parseInt(localStorage.getItem("o_scr"));
            console.log(o_score)
            if(o_score==null){
                o_score=0;
            }
            o_score++;
            //localStorage.removeItem("o_scr");
            localStorage.setItem("o_scr", JSON.stringify(o_score));
        }
    }
    }
}

function chk_col(){
    for(let c = 0; c<3; c++){
        if(
            document.getElementById("0"+"-"+c.toString()).innerText == document.getElementById("1"+"-"+c.toString()).innerText && document.getElementById("2"+"-"+c.toString()).innerText  == document.getElementById("1"+"-"+c.toString()).innerText && document.getElementById("1"+"-"+c.toString()).innerText != ""
        ){
        document.getElementById("turn_text").innerText = document.getElementById("2"+"-"+c.toString()).innerText + " Wins! Col" + c;
        if(document.getElementById("2"+"-"+c.toString()).innerText == "X"){
            //keeping score board
            let x_score = parseInt(localStorage.getItem("x_scr"));
            console.log(x_score)
            if(x_score==null){
                x_score=0;
            }
            x_score++;
            //localStorage.removeItem("x_scr");
            localStorage.setItem("x_scr", JSON.stringify(x_score));
        }
        if(document.getElementById("2"+"-"+c.toString()).innerText == "0"){
            //keeping score board
            let o_score = parseInt(localStorage.getItem("o_scr"));
            console.log(o_score)
            if(o_score==null){
                o_score=0;
            }
            o_score++;
            //localStorage.removeItem("o_scr");
            localStorage.setItem("o_scr", JSON.stringify(o_score));
        }
    }
    }
}

function chk_dia(){
    if(
        document.getElementById("0-0").innerText == document.getElementById("1-1").innerText
        && document.getElementById("1-1").innerText == document.getElementById("2-2").innerText
        && document.getElementById("2-2").innerText != ""
    ){
        document.getElementById("turn_text").innerText = document.getElementById("0-0").innerText + " Wins!  Dia"
        if(document.getElementById("0-0").innerText == "X"){
            //keeping score board
            let x_score = parseInt(localStorage.getItem("x_scr"));
            console.log(x_score)
            if(x_score==null){
                x_score=0;
            }
            x_score++;
            //localStorage.removeItem("x_scr");
            localStorage.setItem("x_scr", JSON.stringify(x_score));
        }
        if(document.getElementById("0-0").innerText == "0"){
            //keeping score board
            let o_score = parseInt(localStorage.getItem("o_scr"));
            console.log(o_score)
            if(o_score==null){
                o_score=0;
            }
            o_score++;
            //localStorage.removeItem("o_scr");
            localStorage.setItem("o_scr", JSON.stringify(o_score));
        }
    }
    else if(
        document.getElementById("2-0").innerText == document.getElementById("1-1").innerText
        && document.getElementById("1-1").innerText == document.getElementById("0-2").innerText
        && document.getElementById("1-1").innerText != ""
    ){
        document.getElementById("turn_text").innerText = document.getElementById("2-0").innerText + " Wins!  Dia"
        if(document.getElementById("2-0").innerText == "X"){
            //keeping score board
            let x_score = parseInt(localStorage.getItem("x_scr"));
            console.log(x_score)
            if(x_score==null){
                x_score=0;
            }
            x_score++;
            //localStorage.removeItem("x_scr");
            localStorage.setItem("x_scr", JSON.stringify(x_score));
        }
        if(document.getElementById("2-0").innerText == "0"){
            //keeping score board
            let o_score = parseInt(localStorage.getItem("o_scr"));
            console.log(o_score)
            if(o_score==null){
                o_score=0;
            }
            o_score++;
            //localStorage.removeItem("o_scr");
            localStorage.setItem("o_scr", JSON.stringify(o_score));
        }
    }


}
var r_comp = 0;
var c_comp = 0;
function play_comp(){
    //console.log("reached here")
    while(document.getElementById(r_comp.toString() +"-"+c_comp.toString()).innerText!=""){
    r_comp = Math.floor(Math.random()*3);
    c_comp = Math.floor(Math.random()*3);
    //console.log(r_comp,c_comp)
    }
    // if(document.getElementById(r_comp.toString() +"-"+c_comp.toString()).innerText!=""){
        //console.log("inside if")
        let p = document.getElementById(r_comp.toString() +"-"+c_comp.toString())
        p.classList.add("add_0");
        document.getElementById(r_comp.toString() +"-"+c_comp.toString()).innerText = "0";
        toggle_turn++;
        
        
    // }
}
function play_comp_0(a, b){
    //console.log(a,b)
    let p = document.getElementById(a.toString() +"-"+b.toString())
        p.classList.add("add_0");
        document.getElementById(a.toString() +"-"+b.toString()).innerText = "0";
        toggle_turn++;
}
function smart_comp(){
    //for row
    for(let r = 0; r<3; r++){
        //case 1 x x _
        if(
            document.getElementById(r.toString()+"-"+"0").innerText == document.getElementById(r.toString()+"-"+"1").innerText 
            && document.getElementById(r.toString()+"-"+"1").innerText =="X" && document.getElementById(r.toString()+"-"+"2").innerText !="0"
        ){
            play_comp_0(r,2); return;
        }
        //case 2 _ x x
        if(
            document.getElementById(r.toString()+"-"+"1").innerText == document.getElementById(r.toString()+"-"+"2").innerText 
            && document.getElementById(r.toString()+"-"+"1").innerText =="X" && document.getElementById(r.toString()+"-"+"0").innerText !="0"
        ){
            play_comp_0(r,0); return;
        }
        //case 3 x _ x
        if(
            document.getElementById(r.toString()+"-"+"0").innerText == document.getElementById(r.toString()+"-"+"2").innerText 
            && document.getElementById(r.toString()+"-"+"0").innerText =="X" && document.getElementById(r.toString()+"-"+"1").innerText !="0"
        ){
            play_comp_0(r,1); return;
        }
    }

    //for col
    for(let c = 0; c<3; c++){
        //case 1 x x _
        if(
            document.getElementById("0"+"-"+c.toString()).innerText == document.getElementById("1"+"-"+c.toString()).innerText
            && document.getElementById("1"+"-"+c.toString()).innerText == "X" && document.getElementById("2"+"-"+c.toString()).innerText != "0"
        ){
            play_comp_0(2,c); return;
        }
        //case 2 _ x x
        if(
            document.getElementById("2"+"-"+c.toString()).innerText == document.getElementById("1"+"-"+c.toString()).innerText
            && document.getElementById("1"+"-"+c.toString()).innerText == "X" && document.getElementById("0"+"-"+c.toString()).innerText != "0"
        ){
            play_comp_0(0,c); return;
        }
        //case 3 x _ x
        if(
            document.getElementById("0"+"-"+c.toString()).innerText == document.getElementById("2"+"-"+c.toString()).innerText
            && document.getElementById("0"+"-"+c.toString()).innerText == "X" && document.getElementById("1"+"-"+c.toString()).innerText != "0"
        ){
            play_comp_0(1,c); return;
        }
    }

    //for dia 1
        // case 1 x x _
        if(
            document.getElementById("0-0").innerText == document.getElementById("1-1").innerText
            && document.getElementById("1-1").innerText == "X" && document.getElementById("2-2").innerText != "0"
        ){
            play_comp_0(2,2); return;
        }
        // case 2 _ x x
        if(
            document.getElementById("2-2").innerText == document.getElementById("1-1").innerText
            && document.getElementById("1-1").innerText == "X" && document.getElementById("0-0").innerText != "0"
        ){
            play_comp_0(0,0); return;
        }
        // case 3 x x _
        if(
            document.getElementById("0-0").innerText == document.getElementById("2-2").innerText
            && document.getElementById("2-2").innerText == "X" && document.getElementById("1-1").innerText != "0"
        ){
            play_comp_0(1,1); return;
        }

    //for dia 2
        // case 1 x x _
        if(
            document.getElementById("2-0").innerText == document.getElementById("1-1").innerText
            && document.getElementById("1-1").innerText == "X" && document.getElementById("0-2").innerText != "0"
        ){
            play_comp_0(0,2); return;
        }
        // case 2 _ x x
        if(
            document.getElementById("0-2").innerText == document.getElementById("1-1").innerText
            && document.getElementById("1-1").innerText == "X" && document.getElementById("2-0").innerText != "0"
        ){
            play_comp_0(2,0); return;
        }
        // case 3 x x _
        if(
            document.getElementById("0-2").innerText == document.getElementById("2-0").innerText
            && document.getElementById("2-0").innerText == "X" && document.getElementById("1-1").innerText != "0"
        ){
            play_comp_0(1,1); return;
        }
        if( document.getElementById("1-1").innerText == ""  && document.getElementById("1-1").innerText != "0" ){
            play_comp_0(1,1); return;
        }
        else{
            play_comp(); return;s
        }
}

function reload(){
    window.location.reload(true);
}

