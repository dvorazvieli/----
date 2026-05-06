const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'brown', 'pink'];
let currentSelection = [];
let currentSelect = 0;
let selectedColors = new Set();
function startGame() { 
    generateColor();
    let colorDiv = document.querySelectorAll('.color');
    colorDiv.forEach((divColor) => { 
        divColor.onclick = selectColor;
    });
}

function selectColor(event) {
    const selectedColor = event.currentTarget.style.backgroundColor;
    if (selectedColors.has(selectedColor) || currentSelect >= 32) {
        return;
    }
    selectedColors.add(selectedColor);
    currentSelect++;
    document.querySelector(`#guess${currentSelect}`).style.backgroundColor = event.currentTarget.style.backgroundColor;
    if (currentSelect %4 === 0) {
        selectedColors=new Set();
        check(currentSelect);
        
    }
}



function check(currentSelect){
    let randcolors=document.querySelectorAll('.select-guess .guess-color');
    let count=0;
    currentSelect-=3;
    for(let i=0;i<4;i++){
        if(document.querySelector(`#guess${currentSelect}`).style.backgroundColor===randcolors[i].style.backgroundColor){
            document.querySelector(`#ans${currentSelect}`).style.backgroundColor="black";
            count++;
        }
        else{
            for(let j=0;j<4;j++){
                if(document.querySelector(`#guess${currentSelect}`).style.backgroundColor===randcolors[j].style.backgroundColor){
                    document.querySelector(`#ans${currentSelect}`).style.backgroundColor="red";
                }
            }
        }
        currentSelect++;
    }
    if(count===4){
        document.getElementById("resh1").textContent="!!!!you win";
        document.getElementById("resh1").style.color="green";
        end();
    }
    else if(currentSelect>=32){
        document.getElementById("resh1").textContent="!game over... let's try again";
        document.getElementById("resh1").style.color="red";
        end();
    }
}


function end(){
    document.getElementById("select-guess").style.display="flex";
}


function generateColor() {
    let leftColors = [...colors];
    let color = [];
    for (let i = 0; i < 4; i++) {
        let index = getRandomInt(leftColors.length);
        color.push(leftColors[index]);
        leftColors.splice(index, 1);
    }
    currentSelection = color;
    let guessColor = document.querySelectorAll('.select-guess .guess-color');
    for (let i = 0; i < guessColor.length; i++) {
        guessColor[i].style.backgroundColor = currentSelection[i];
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

document.querySelector("#submit-guess").addEventListener("click", () => {
    alert(`
     בתחילת המשחק בוחר כל שחקן מספר בן כמה ספרות, כאשר נהוג לבחור מספר בן ארבע ספרות, אסורות חזרות על ספרות ונהוג שהמספר לא יתחיל ב-0. לדוגמה, 1234 הוא מספר חוקי, 1123 ו-0123 אינם חוקיים.
 
 כל שחקן מחלק דף נייר לשלוש עמודות, באחת נרשמים ניחושיו, בשנייה מספר הבולים ובשלישית מספר הפגיעות. את המספרים אותם צריך לנחש רושמים על פיסת נייר נפרדת ומצפינים אותה.
 
 המשחק מתנהל בתורות כאשר כל שחקן בתורו מנחש את מספרו של היריב, לאחר הניחוש על היריב לגלות למנחש מהו טיב ניחושו באמצעות רמזים הנקראים: בולים ופגיעות.
    `);
});