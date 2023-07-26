function total(){
    let num1 =  parseInt(document.getElementById("eng").value);
    let num2 =  parseInt(document.getElementById("mat").value);
    let num3 =  parseInt(document.getElementById("sci").value);
    
    if(num1>100 || num2>100 || num3> 100){
        alert("Please enter correct scores")
    }
    else{
        let total = num1 + num2 + num3
        document.getElementById("total").innerHTML = "</br> English marks: " +num1 + " </br> Maths marks: " +num2 + "</br> Science marks: " +num3 + "</br> </br> Total marks: " + total
    }
}

function average(){
    let num1 =  parseInt(document.getElementById("eng").value);
    let num2 =  parseInt(document.getElementById("mat").value);
    let num3 =  parseInt(document.getElementById("sci").value);
    
    if(num1>100 || num2>100 || num3> 100){
        alert("Please enter correct scores")
    }
    else{
        let total = num1 + num2 + num3
        let ave = total/3
        document.getElementById("ave").innerHTML = "Your average score is : " + ave
    }
}

function grade(){
    let num1 =  parseInt(document.getElementById("eng").value);
    let num2 =  parseInt(document.getElementById("mat").value);
    let num3 =  parseInt(document.getElementById("sci").value);
    
    if(num1>100 || num2>100 || num3> 100){
        alert("Please enter correct scores")
    }
    else{
        let total = num1 + num2 + num3
        let ave = total/3

        if(ave>=80 && ave <=100){
            document.getElementById("grade").innerHTML = "Grade A";
        }
        else if (ave >=70 && ave <80){
            document.getElementById("grade").innerHTML = "Grade B";
        }
        else if (ave >=60 && ave <70){
            document.getElementById("grade").innerHTML = "Grade C";
        }
        else if(ave >=50 && ave <60){
            document.getElementById('grade').innerHTML = "Grade D"
        }
        else if(ave < 50){
            document.getElementById('grade').innerHTML = "Grade F"
        }
}
} 