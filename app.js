var dotStatus = false;
function calculate(calcID){
var newVal,lastChar;
    var keys = calcID.getElementsByClassName('span');

    var input = calcID.getElementsByClassName('result');
    console.log(input);
    var inputVal = input[0].value;
    for (var i = 0; i < keys.length; i++) {

        keys[i].onclick = function (e) {

            var click = this.innerHTML;
            if(click == 'Bk') {
                newVal = inputVal.substr(0,inputVal.length-1);
                input[0].value = newVal;
            }
            else if (click == 'C') {
                input[0].value = '';
                dotStatus = false;
            }
            else if (click == '=') {
                var equation = inputVal;
                lastChar = equation[equation.length - 1];

                if (specialChars.indexOf(lastChar) > -1 || lastChar == '.')
                    equation = equation.replace(/.$/, '');

                if (equation)
                    input[0].value = eval(equation);

                dotStatus = false;
            }
            else if (specialChars.indexOf(click) > -1) {

                lastChar = inputVal[inputVal.length - 1];

                //Here am writing this code to check if the input is not empty and last click is not a symbol
                if (inputVal != '' && specialChars.indexOf(lastChar) == -1)
                    input[0].value += click;

                //Here am writing this code to enable the first click as '-'
                else if (inputVal == '' && click == '-')
                    input[0].value += click;

                dotStatus = false;

                //If the last click is operator , i should replace the new operator if clicked.
                if (specialChars.indexOf(lastChar) > -1 && inputVal.length > 1) {
                    input[0].value = inputVal.replace(/.$/, click);
                }


            }
            //to check if previous click is a dot
            else if (click == '.') {

                if (!dotStatus){
                    input[0].value += click;
                    dotStatus = true;
                }
            }

            else {
                input[0].value += click;
            }


        }
    
    }
}
