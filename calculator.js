var h2 = document.getElementsByTagName('h2');
var input = document.getElementsByTagName('p')[0];

var operand1 = "";
var operand2 = "";
var operator = "";

for(var i = 0; i < h2.length; i++){
    h2[i].addEventListener('click', function(){
        var value = this.getAttribute('data-value');
        
        if(value == '+' || value == '-' || value == '/' || value == '*' || value == '%'){
            if( operand1 != ""){
                operator = value;
                input.innerHTML = '';
            }
        }else if(value == '='){
            input.innerHTML = eval(operand1 + operator + operand2);
            console.log(input.innerHTML);
            operand2 = "";
            operand1 = input.innerHTML;
            operator = "";
        }else if(value == '-1'){
            if(operator == "" && operand1 != ""){
                operand1 = "" + (-1 * parseFloat(operand1));
                input.innerHTML = operand1;
            }else if(operator != "" && operand2 != ""){
                operand2 = "" + (-1 * parseFloat(operand2));
                input.innerHTML = operand2;
            }
        }else if(value == ' '){
            input.innerHTML = '';
            operand2 = "";
            operand1 = "";
            operator = "";
        }else{

            if(operator == ""){
                operand1 = operand1 + value;
                input.innerHTML = operand1;
                console.log(operand1);
            }else{
                operand2 = operand2 + value;
                input.innerHTML = operand2;
                console.log(operand2);
            }
        }
    });
}