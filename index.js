function buttonClicked(button){
    if(number.includes(button)){
        if(display.value == '0'){
            display.value = button;
        }else{
            display.value += button;
        }
    }else if(symbol.includes(button)){
        if(button == '='){
            try{
                display.value = eval(display.value);
            } catch(err){
                display.value = err;
            }
        }else{
            display.value += ' ' + button + ' '; 
        }
    }else{
        display.value = 0;
    }
}

var btn = document.getElementsByClassName('btn');
var display = document.getElementById('display-area');
var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var symbol = ['+', '-', '*', '/', '=']

for(let i=0 ; i<btn.length ; i++){
    btn[i].addEventListener('click', () => {
        buttonClicked(btn[i].innerHTML);
    })
}