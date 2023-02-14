


const allCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let generatePassword = document.getElementById("generatePassword");

let password = "";

generatePassword.addEventListener("click", function () {

    let number = document.getElementById("number").value;
    
    if(number<8){
        alert("number cannot be less than 8")
    }else if(number>99){
        alert("number cannot be greater than 99")
    }else{

        for(i=0;i<number;i++){
            let randomCharacter = allCharacters[Math.floor(Math.random() * allCharacters.length)]
            password += randomCharacter
            }
        
            document.getElementById("password1").innerHTML = password
        
            password = ''
        
            for(i=0;i<number;i++){
            let randomCharacter = allCharacters[Math.floor(Math.random() * allCharacters.length)]
            password += randomCharacter
            }
            
            document.getElementById("password2").innerHTML = password
            password = ''

    }


   
});


function copy1(){
  // Get the text field
  var copyText = document.getElementById("password1");
  
  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.textContent);

  // Alert the copied text
  alert("password copied!!");
}

function copy2(){
  // Get the text field
  var copyText = document.getElementById("password2");
  
  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.textContent);

  // Alert the copied text
  alert("password copied!!");
}





