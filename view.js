/**
 * Created by nikhileshch on 9/4/2015.
 */
var calcID = 1;

function createCalc(){
    var myMainCalc = document.getElementById("parent");
    var tableP = document.createElement("TABLE");
    tableP.className="table"+calcID +" extra";
    tableP.addEventListener("click",function(event){
        calculate(tableP);
        event.preventDefault();
    });
    var tableBodyP = document.createElement("TBODY");
    tableP.appendChild(tableBodyP);
    var trP = document.createElement("TR");
    tableBodyP.appendChild(trP);
    var tdP = document.createElement("TD");
    var div = document.createElement("DIV");
    div.className='value-box result';
    var input = document.createElement("INPUT");
    input.valueType='text';
    input.className='value-box result';
    tdP.colSpan='2';
    tdP.appendChild(input);
    trP.appendChild(tdP);
    trP = document.createElement("TR");
    tableBodyP.appendChild(trP);
    var firstPanel=createNumberPanel();
    trP.appendChild(firstPanel);
    var secondPanel=operatorPanel();
    trP.appendChild(secondPanel);
    myMainCalc.appendChild(tableP);
    calcID++;
}

function createNumberPanel(){
    var tdP1 = document.createElement("TD");
    var tableC1 = document.createElement("TABLE");
    var tableBodyC1 = document.createElement("TBODY");
    tableC1.appendChild(tableBodyC1);
    var i=0;
    while(i%3==0){
        var trC1 = document.createElement("TR");
        trC1.className='row';
        tableBodyC1.appendChild(trC1);
        var k = 0;
        for( var n=i;n<i+3&&n!=numbers.length;n++){
            var num = document.createTextNode(numbers[n]);
            var tdC1 = document.createElement("TD");
            tdC1.className='span key-color effect-click';
            tdC1.appendChild(num);
            k++;
            trC1.appendChild(tdC1);
        }
        i=n;
    }
    tableC1.appendChild(tableBodyC1);
    tdP1.appendChild(tableC1);
    return tdP1;
}

function operatorPanel(){
    var tdP2 = document.createElement("TD");
    var tableC2 = document.createElement("TABLE");
    var tableBodyC2 = document.createElement("TBODY");
    tableC2.appendChild(tableBodyC2);
    var flag=0;
    for(var l=0; l<4;l++ ){
        var trC2 = document.createElement("TR");
        trC2.className='row';
        tableBodyC2.appendChild(trC2);
        for(var m=0;m<=(specialChars.length/4);m++)
        {   if(flag==specialChars.length){
            break;
        }
            var num1 = document.createTextNode(specialChars[flag]);
            var tdC2 = document.createElement("TD");
            tdC2.className='span key-color effect-click';
            tdC2.appendChild(num1);
            flag++;
            trC2.appendChild(tdC2);
        }

    }
    tableC2.appendChild(tableBodyC2);
    tdP2.appendChild(tableC2);
    return tdP2;
}
