let aroundNumP1=8;
let aroundNumP2=8;
let prevCard;
let currentTurn = 'user';


let cardarr=[...cards];
let cardsOfCump = [];

if (!JSON.parse(localStorage.getItem("currentUser"))) {
    alert("עליך להתחבר כדי לשחק.");
    window.location.href = "enter.html"
}
function duplicateArray(arr) {//הכפלת מערך
    return arr.flatMap(item => [item, item]);
}
const duplicatlefcard = duplicateArray(cardarr);


function getRandomInt(max) {//הגרלת מספר
    return Math.floor(Math.random() * max);
}



//של מי התור*********************************

function playerRow(){

    const cards=document.querySelectorAll('.cards');
    cards.forEach(card=>card.classList.remove('inactive'));
}



function computerRow(){

    const cards=document.querySelectorAll('.cards');
    cards.forEach(card=>card.classList.add('inactive'));

    setTimeout(computerPlay, 1000);    
}

//*********************************************** */


function startGame(){    
    let index = getRandomInt(31);
    console.log(index);
    prevCard=cards[index];
    let img=document.createElement('img');
    img.classList.add( "image");
    img.src=cards[index].img;
    document.querySelector('#garbage').append(img);
    document.getElementById('startGame').style.display="none";
    let i = 0;
    const interval = setInterval(() => {
    if (i < 16) {
        if (i % 2 === 0) {
            addCardsUserS();
        } else {
            addCardsCump();
        }
        i++;
    } else {
        clearInterval(interval);
        if(aroundNumP2<1){
            endGame();
        }
        playerRow(); 
    }
    }, 300);
}


function newTurn() {
    let i = 0;

    if (currentTurn === 'user') {
        aroundNumP1--;
        currentTurn = 'other';

        const interval = setInterval(() => {
            if (i < aroundNumP1) {
                addCardsUserS();
                i++;
            } else {
                clearInterval(interval);
            }
        }, 500);

    } else if (currentTurn === 'other') {
        aroundNumP2--;
        currentTurn = 'user';

        const interval = setInterval(() => {
            if (i < aroundNumP2) {
                addCardsCump();
                i++;
            } else {
                clearInterval(interval);
            }
        }, 500);
    }
}


let lefpic = [...duplicatlefcard];
function addCardsUserS(){
    if(lefpic.length === 0){
        lefpic = [...duplicatlefcard];
    }
    if (document.getElementById('addCardS').classList.contains('inactive')) return;
    let index = getRandomInt(lefpic.length);
    let div = document.createElement('div');
    div.id=`${lefpic[index].id}`;
    let img=document.createElement('img');
    img.classList.add( "image");
    img.src=lefpic[index].img;
    div.innerHTML='';
    div.append(img);
    div.onclick = check;
    div.classList.add( "cards");
    document.querySelector('#user').append(div);
    lefpic.splice(index, 1);   
}


function addCardsUser(){
    if(lefpic.length === 0){
        lefpic = [...duplicatlefcard];
    }
    if (document.getElementById('addCardS').classList.contains('inactive')) return;
    let index = getRandomInt(lefpic.length);
    let div = document.createElement('div');
    div.id=`${lefpic[index].id}`;
    let img=document.createElement('img');
    img.classList.add( "image");
    img.src=lefpic[index].img;
    console.log(index);
    div.innerHTML='';
    div.append(img);
    div.onclick = check;
    div.classList.add( "cards");
    document.querySelector('#user').append(div);
    lefpic.splice(index, 1);   
    if(prevCard.name=="plus2" || prevCard.name=="plus3"){
        document.getElementById('addCardS').classList.remove('inactive');
    }
    if(aroundNumP1<1){
        endGame();
    }
    computerRow();
}


function addCardsCump(){
    if(lefpic.length === 0){
        lefpic = [...duplicatlefcard];
    }
    let index = getRandomInt(lefpic.length);
    let div = document.createElement('div');
    div.id=`${lefpic[index].id}`;
    let image=document.createElement('img');
    image.classList.add( "image");
    image.src="../html/תמונות/57.jpg";
    console.log(index);
    div.classList.add( "cards");
    div.append(image);
    document.querySelector('#other').append(div);
    lefpic.splice(index, 1);    
    cardsOfCump.push(div.id);
}

//בדיקה שחקן****************************

function check(event) {
    let currentCard = cards[event.currentTarget.id - 1];

    // קלף טאקי
    if (currentCard.type === "special" && currentCard.name === "taki") {
        if (currentCard.color === prevCard.color || prevCard.color === "netral") {
            document.getElementById('garbage').innerHTML = "";
            let img = document.createElement('img');
            img.classList.add("image");
            img.src = currentCard.img;
            document.getElementById('garbage').append(img);
            document.querySelector('#user').removeChild(event.currentTarget);
            prevCard = currentCard;

            let userCards = Array.from(document.querySelector('#user').children);
            let sameColorCards = userCards.filter(card => {
                let cardObj = cards[card.id - 1];
                return cardObj.color === currentCard.color && cardObj.type === "ordinary";
            });

            let index = 0;
            function throwNextCard() {
                if (index < sameColorCards.length) {
                    let card = sameColorCards[index];
                    let cardObj = cards[card.id - 1];

                    document.getElementById('garbage').innerHTML = "";
                    let img = document.createElement('img');
                    img.classList.add("image");
                    img.src = cardObj.img;
                    document.getElementById('garbage').append(img);
                    document.querySelector('#user').removeChild(card);
                    prevCard = cardObj;

                    index++;
                    setTimeout(throwNextCard, 500);
                } else {
                    if (document.querySelector('#user').children.length < 1) {
                        currentTurn = 'user';
                        setTimeout(newTurn, 1000);
                    } else {
                        if(aroundNumP1<1){
                            endGame();
                        }
                        setTimeout(computerRow, 1000);
                    }
                }
            }

            setTimeout(throwNextCard, 500);
            return;
        } else {
            return;
        }
    }


    // קלף רגיל
    if (currentCard.type === "ordinary") {
        if (prevCard.color === currentCard.color || prevCard.number === currentCard.number || prevCard.color === "netral") {
            document.getElementById('garbage').innerHTML = "";
            let img = document.createElement('img');
            img.classList.add("image");
            img.src = currentCard.img;
            document.getElementById('garbage').append(img);
            document.querySelector('#user').removeChild(event.currentTarget);
            prevCard = currentCard;

            if (document.querySelector('#user').children.length < 1) {
                currentTurn = 'user';
                setTimeout(newTurn, 2000);
            } else {
                if(aroundNumP1<1){
                    endGame();
                }
                setTimeout(computerRow, 1000);
            }
        } else {
            return;
        }
    }
}

//************************************************* */


//משחק המחשב*****************************************

function computerPlay() {
    console.log(cardsOfCump);
    let currentPrevCard = prevCard;
    let currentCard;
    let cardsOther = [];

    for (let i = 0; i < cardsOfCump.length; i++) {
        cardsOther.push(cards[cardsOfCump[i] - 1]);
    }

    // טאקי
    for (let i = 0; i < cardsOther.length; i++) {
        if (cardsOther[i].type === "special" && cardsOther[i].name === "taki") {
            if (cardsOther[i].color === currentPrevCard.color) {
                currentCard = cardsOther[i];

                document.getElementById('garbage').innerHTML = "";
                let img = document.createElement('img');
                img.classList.add("image");
                img.src = currentCard.img;
                document.getElementById('garbage').append(img);

                if (document.querySelector('#other').hasChildNodes()) {
                    document.querySelector('#other').firstElementChild.remove();
                }
    
                cardsOfCump.splice(i, 1);
                prevCard = currentCard;

                let sameColorCards = [];
                for (let j = 0; j < cardsOfCump.length; j++) {
                    let cardObj = cards[cardsOfCump[j] - 1];
                    if (cardObj.color === currentCard.color && cardObj.type === "ordinary") {
                        sameColorCards.push({ obj: cardObj, index: j });
                    }
                }

                let index = 0;
                function throwNextCard() {
                    if (index < sameColorCards.length) {
                        let cardObj = sameColorCards[index].obj;

                        document.getElementById('garbage').innerHTML = "";
                        let img = document.createElement('img');
                        img.classList.add("image");
                        img.src = cardObj.img;
                        document.getElementById('garbage').append(img);

                        if (document.querySelector('#other').hasChildNodes()) {
                            document.querySelector('#other').firstElementChild.remove();
                        }

                        let idToRemove = cardsOfCump.findIndex(id => cards[id - 1].img === cardObj.img);
                        if (idToRemove !== -1) {
                            cardsOfCump.splice(idToRemove, 1);
                        }

                        prevCard = cardObj;
                        index++;
                        setTimeout(throwNextCard, 500);
                    } else {
                        if (document.querySelector('#other').children.length < 1) {
                            currentTurn = 'other';
                            setTimeout(newTurn, 1000);
                        } else {
                            if(aroundNumP2<1){
                                endGame();
                            }
                            playerRow();
                        }
                    }
                }

                setTimeout(throwNextCard, 500);
                return;
            }
        }
    }


    // קלף רגיל
    for (let i = 0; i < cardsOther.length; i++) {
        if (cardsOther[i].type === "ordinary") {
            currentCard = cardsOther[i];

            if (currentPrevCard.color === currentCard.color || currentPrevCard.number === currentCard.number) {
                document.getElementById('garbage').innerHTML = "";
                let img = document.createElement('img');
                img.classList.add("image");
                img.src = currentCard.img;
                document.getElementById('garbage').append(img);

                if (document.querySelector('#other').hasChildNodes()) {
                    document.querySelector('#other').firstElementChild.remove();
                }

                prevCard = currentCard;
                cardsOfCump.splice(i, 1);

                if (document.querySelector('#other').children.length < 1) {
                    currentTurn = 'other';
                    setTimeout(newTurn, 2000);
                } else {
                    if(aroundNumP2<1){
                        endGame();
                    }
                    playerRow();
                }
                return;
            }
        }
    }

    // אם לא הצליח לשחק כלום
    if (document.querySelector('#other').children.length < 1) {
        currentTurn = 'other';
        setTimeout(newTurn, 2000);
    }

    setTimeout(() => {
        addCardsCump();
        if(aroundNumP2<1){
            endGame();
        }
        playerRow();
    }, 1000);
}

//********************************************************** */






function endGame() {
    const main = document.getElementById('main');
    main.classList.add("hidden");
    const victoryDiv = document.getElementById('victory-message');
    const messageDiv = document.getElementById('message');
    const audio = document.getElementById('victorySound');
    const audio2=document.getElementById('looseSound');


    if (aroundNumP2 < 1) {
        messageDiv.classList.remove("hidden");
        document.body.classList.add("lose");
        messageDiv.textContent = "😞 הפסדת... נסה שוב!";
        messageDiv.classList.remove("hidden");
        audio2.play();
    }

    if (aroundNumP1 < 1) {
        messageDiv.classList.add("hidden")
        document.body.classList.add("win");
        victoryDiv.classList.remove("hidden");
        audio.play();
        createConfetti();
    }

    // לאחר 5 שניות - החזרת המצב
    setTimeout(() => {
        main.classList.remove("hidden");
        victoryDiv.classList.add("hidden");
        messageDiv.classList.add("hidden");
        document.body.classList.remove("win", "lose");
        window.location.href="select_game.html";
    }, 5000);
}
 function createConfetti() {
    const colors = ['#ff0', '#f0f', '#0ff', '#f00', '#0f0', '#00f'];
    for (let i = 0; i < 150; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      confetti.style.left = `${Math.random() * 100}vw`;
      confetti.style.top = `-${Math.random() * 20}vh`;
      confetti.style.width = confetti.style.height = `${5 + Math.random() * 10}px`;
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.animationDuration = `${2 + Math.random() * 3}s`;
      confetti.style.transform = `rotateX(${Math.random()*360}deg) rotateY(${Math.random()*360}deg)`;
      document.body.appendChild(confetti);
  
      setTimeout(() => confetti.remove(), 5000);
    }
  }