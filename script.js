const checkButton = document.querySelector("#convert-btn");
const inputNumber = document.querySelector("#number");
const result = document.querySelector("#output");
const romanNumerals = ["M","CM","D","CD","C","XC","L", "XL","X","IX","V","IV","I"];
const arabicNumerals = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
const regex = /[0-9]/;
console.log(inputNumber.value);

function converter(){
     let romanNumeral = "";
     let number = inputNumber.value;
     if (number >= 1 && number < 4000){
        for (let i = 0; i < romanNumerals.length; i++){
          while (number >= arabicNumerals[i]){
           number -= arabicNumerals[i];
           romanNumeral += romanNumerals[i];
        }
       } 
      } else if (number < 1 && number.match(regex)){
        result.style.backgroundColor = "rgb(255, 0, 0, 0.6)";
        return result.innerText = "Please enter a number greater than or equal to 1";
      } else if (number > 3999) {
        result.style.backgroundColor = "rgb(255, 0, 0, 0.6)";
        return result.innerText = "Please enter a number less than or equal to 3999";
      } else
        {
          result.style.backgroundColor = "rgb(255, 0, 0, 0.6)";
          return result.innerText = "Please enter a valid number";
        }
    result.style.border = "solid white"
    result.style.backgroundColor = "rgb(251, 238, 193, 0.3)";
    result.innerText = romanNumeral;
    return romanNumeral;
   
   }
   