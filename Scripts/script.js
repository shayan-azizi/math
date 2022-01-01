function BMMKMM () {
    let firstNumber = document.getElementById("number1").value;
    let secondNumber = document.getElementById("number2").value;

    function BMM (a , b) {
        if (a % b == 0) {
            return b;
        }
        return BMM (b, a % b);
    }

    function KMM (a, b) {
        number = BMM (a , b);
        return a * b / number;
    }

    document.getElementById("b-m-m").innerHTML ="ب.م.م برابر است با: " + BMM(firstNumber, secondNumber);
    document.getElementById("k-m-m").innerHTML = "ک.م.م برابر است با: " + KMM(firstNumber, secondNumber);
    

}

function isPrime () {
    number = document.getElementById("number3").value

    if (number > 1) {

        for (let i = 2; i < Math.round(number / 2) + 1; i++) {
            
            if (number % i == 0) {
                document.getElementById("prime").innerHTML = "عدد اول نیست!";
                break;
            }

            else {
                document.getElementById("prime").innerHTML = "عدد اول است...";
            }
        } 
    }

    else {
        document.getElementById("prime").innerHTML = "عدد اول نیست!";
    }
}

function Shomarandeh () {
    let myList = [];
    let counter = 0;
    number = document.getElementById("number4").value;

    for (let i = 0; i < number + 1; i++) {
        if (number % i == 0) {
            myList[counter] = i;
            counter += 1;
        }
    }

    document.getElementById("maghsom").innerHTML = myList;
}




