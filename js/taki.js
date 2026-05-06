// let aroundNumP1=8;
// let aroundNumP2=8;
// let player=1;
// let prevCard;
// let pl2 = 0;
// let pl3 = 0;


// let cardarr=[...cards];
// let cardsOfCump = [];


// function duplicateArray(arr) {//הכפלת מערך
//     return arr.flatMap(item => [item, item]);
// }
// const duplicatlefcard = duplicateArray(cardarr);


// function getRandomInt(max) {//הגרלת מספר
//     return Math.floor(Math.random() * max);
// }


//למי שיך התור
function cumpRow(){//תור המחשב
    if(prevCard.name === "plus2"){
        const availableCards = Array.from(document.getElementById('other').children).filter(card => card.name === "plus2");
        if(availableCards.length === 0){
            for(let i = 0; i<pl2; i++){
                setTimeout(() => {
                    addCardsCump();
                }, 1000);
            }
        }
    }
    const cards = document.querySelectorAll('.cards');
    cards.forEach(card => card.classList.add('inactive'));
    computerPlay();
    if(aroundNumP2<1){
        endGame();
    }
    if (document.querySelector('#other').children.length === 1) {
        player = 0;
        setTimeout(newTurn, 2000);
    }
    playerRow();
}

function playerRow(){//תור השחקן
    if(prevCard.name === "plus2"){
        const availableCards = Array.from(document.getElementById('other').children).filter(card => card.name === "plus2");
        if(availableCards.length === 0){
            console.log(true);
            for(let i = 0; i<pl2; i++){
                setTimeout(() => {
                    addCardsUser();
                }, 1000);
            }
        }
    }
    const cards=document.querySelectorAll('.cards');
    cards.forEach(card=>card.classList.remove('inactive'));
    if(aroundNumP1<1){
        endGame();
    }
    if (document.querySelector('#user').children.length === 1) {
        console.log(true);
        player = 1;
        setTimeout(newTurn, 2000);
    }
}


// function startGame(){    
//     let index = getRandomInt(31);
//     console.log(index);
//     prevCard=cards[index];
//     let img=document.createElement('img');
//     img.classList.add( "image");
//     img.src=cards[index].img;
//     document.querySelector('#garbage').append(img);
//     document.getElementById('startGame').style.display="none";
//     let i = 0;
//     const interval = setInterval(() => {
//     if (i < 16) {
//         if (i % 2 === 0) {
//             addCardsUserS();
//         } else {
//             addCardsCump();
//         }
//         i++;
//     } else {
//         clearInterval(interval);
//         playerRow(); 
//     }
//     }, 300);
// }

// function newTurn(){
//     let i=0;
//     if(player===1){
//         aroundNumP1--;
//         const interval = setInterval(() => {
//             if (i < aroundNumP1) {
//                 addCardsUser();
//                 i++;
//             } 
//             else {
//                 clearInterval(interval); 
//             }
//         }, 500); 
//     }
//     else{
//         aroundNumP2--;
//         const interval = setInterval(() => {
//             if (i < aroundNumP2) {
//                 addCardsCump();
//                 i++;
//             } 
//             else {
//                 clearInterval(interval); 
//             }
//         }, 500); 
//     }
// }



// let lefpic = [...duplicatlefcard];
// function addCardsUserS(){
//     if (document.getElementById('addCardS').classList.contains('inactive')) return;
//     let index = getRandomInt(lefpic.length);
//     let div = document.createElement('div');
//     div.id=`${lefpic[index].id}`;
//     let img=document.createElement('img');
//     img.classList.add( "image");
//     img.src=lefpic[index].img;
//     console.log(index);
//     div.innerHTML='';
//     div.append(img);
//     div.onclick = check;
//     div.classList.add( "cards");
//     document.querySelector('#user').append(div);
//     lefpic.splice(index, 1);   
// }


// function addCardsUser(){
//     if (document.getElementById('addCardS').classList.contains('inactive')) return;
//     let index = getRandomInt(lefpic.length);
//     let div = document.createElement('div');
//     div.id=`${lefpic[index].id}`;
//     let img=document.createElement('img');
//     img.classList.add( "image");
//     img.src=lefpic[index].img;
//     console.log(index);
//     div.innerHTML='';
//     div.append(img);
//     div.onclick = check;
//     div.classList.add( "cards");
//     document.querySelector('#user').append(div);
//     lefpic.splice(index, 1);   
//     if(prevCard.name=="plus2" || prevCard.name=="plus3"){
//         document.getElementById('addCardS').classList.remove('inactive');
//     }
//     cumpRow();
// }


// function addCardsCump(){
//     let index = getRandomInt(lefpic.length);
//     let div = document.createElement('div');
//     div.id=`${lefpic[index].id}`;
//     let image=document.createElement('img');
//     image.classList.add( "image");
//     image.src="../html/תמונות/57.jpg";
//     console.log(index);
//     div.classList.add( "cards");
//     div.append(image);
//     document.querySelector('#other').append(div);
//     lefpic.splice(index, 1);    
//     cardsOfCump.push(div.id);
// }

function check(event) {
    const currentCard = cards[event.currentTarget.id - 1];
    if (!prevCard || !currentCard) return;
    if (event.currentTarget.classList.contains('inactive')) return;
    if(prevCard.name === "plus2" && currentCard.name !== "plus2") return;
    if(prevCard.name === "taki"){
        if(currentCard.color === prevCard.color){
            document.getElementById('garbage').innerHTML="";
            let img=document.createElement('img');
            img.classList.add( "image");
            duplicatlefcard.forEach((dlc) => {
                if(dlc.id==event.currentTarget.id){
                    img.src=dlc.img;
                }
            });
            document.getElementById('garbage').append(img);
            document.querySelector('#user').removeChild(event.currentTarget);
        } 
        else {
            return;
        }
        
    }
    //קלף רגיל
    if (currentCard.type === "ordinary") {
        if (prevCard.color === currentCard.color || prevCard.number === currentCard.number) {
            document.getElementById('garbage').innerHTML="";
            let img=document.createElement('img');
            img.classList.add( "image");
            duplicatlefcard.forEach((dlc) => {
                if(dlc.id==event.currentTarget.id){
                    img.src=dlc.img;
                }
            });
            document.getElementById('garbage').append(img);
            document.querySelector('#user').removeChild(event.currentTarget);
            cumpRow();
        } 
        else {
            playerRow();
        }
    }
    //קלף מיוחד
    else if (currentCard.type === "special") {
        switch (currentCard.name) {
            case "plus":
                if(prevCard.color === currentCard.color || prevCard.name === "plus"){
                    document.getElementById('garbage').innerHTML="";
                    let img=document.createElement('img');
                    img.classList.add( "image");
                    duplicatlefcard.forEach((dlc) => {
                        if(dlc.id==event.currentTarget.id){
                            img.src=dlc.img;
                        }
                    });
                    document.getElementById('garbage').append(img);
                    document.querySelector('#user').removeChild(event.currentTarget);
                    playerRow();
                }
                break

            case "changeDir":
                if(prevCard.color === currentCard.color || prevCard.name === "changeDir"){
                    document.getElementById('garbage').innerHTML="";
                    let img=document.createElement('img');
                    img.classList.add( "image");
                    duplicatlefcard.forEach((dlc) => {
                        if(dlc.id==event.currentTarget.id){
                            img.src=dlc.img;
                        }
                    });
                    document.getElementById('garbage').append(img);
                    document.querySelector('#user').removeChild(event.currentTarget);
                    playerRow();
                }
                break;

            case "stop":
                if(prevCard.color === currentCard.color || prevCard.name === "stop"){
                    document.getElementById('garbage').innerHTML="";
                    let img=document.createElement('img');
                    img.classList.add( "image");
                    duplicatlefcard.forEach((dlc) => {
                        if(dlc.id==event.currentTarget.id){
                            img.src=dlc.img;
                        }
                    });
                    document.getElementById('garbage').append(img);
                    document.querySelector('#user').removeChild(event.currentTarget);
                    playerRow();
                }
                break;

            case "plus2":
                pl2 += 2;
                break;

            case "plus3":
                pl3 += 3;
                break;
            
            case "taki":
                if(prevCard.color === currentCard.color || (currentCard.name === "taki" && currentCard.color === "netral")){
                    document.getElementById('garbage').innerHTML="";
                    let img=document.createElement('img');
                    img.classList.add( "image");
                    duplicatlefcard.forEach((dlc) => {
                        if(dlc.id==event.currentTarget.id){
                            img.src=dlc.img;
                        }
                    });
                    document.getElementById('garbage').append(img);
                    document.querySelector('#user').removeChild(event.currentTarget);

                    if(currentCard.name === "taki"){
                        currentCard.color === prevCard.color; 
                    }
                    const availableCards = Array.from(document.getElementById('user').children).filter(card => card.color === currentCard.color);
                    if(availableCards.length === 0){
                        cumpRow();
                        break;
                    }
                    else{
                        playerRow();
                    }
                }
                break;

                // case "changeColor":
                // let div1 = document.createElement('div');
                // div1.id="yellow";
                // div1.classList.add('colors');
                // div1.style.backgroundColor = "yellow";
                // div1.onclick = changeColor;
                // document.getElementById('chCol').append(div1);

                // let div2 = document.createElement('div');
                // div2.id="red";
                // div2.classList.add('colors');
                // div2.style.backgroundColor = "red";
                // div2.onclick = changeColor;
                // document.getElementById('chCol').append(div2);

                // let div3 = document.createElement('div');
                // div3.id="green";
                // div3.classList.add('colors');
                // div3.style.backgroundColor = "green";
                // div3.onclick = changeColor;
                // document.getElementById('chCol').append(div3);

                // let div4 = document.createElement('div');
                // div4.id="blue";
                // div4.classList.add('colors');
                // div4.style.backgroundColor = "blue";
                // div4.onclick = changeColor;
                // document.getElementById('chCol').append(div4);
                // prevCard=cards[event.currentTarget.id-1];
                // break;
            default:

                break;
        }
    }
    
    prevCard = currentCard;
    event.currentTarget.classList.add('inactive'); // Set as inactive after the move
}


// function changeColor(event){
//     prevCard.color = event.currentTarget.style.backgroundColor;
//     prevCard.name = "changeColor";
//     document.getElementById('chCol').innerHTML = "";
//     let div = document.createElement('div');
//     div.classList.add('colors');
//     div.style.backgroundColor = prevCard.color;
//     document.getElementById('chCol').append(div); 
//     setTimeout(function(){
//         document.getElementById('chCol').innerHTML = "";
//         cumpRow();
//     }, 2000);
// }


function computerPlay(){
    alert(computerPlay);
    console.log(prevCard.name);
    const currentCard = prevCard; 
    
    console.log(cardsOfCump);
    let result = [];
    let max = 0;
    let maxIndex = 0;
    let lenOfRoute = 0;
    let count = 1;

    // בדיקה על כל הקלפים של המחשב אם הם תואמים לקלף שבפח (prevCard)
    for(let i = 0; i < cardsOfCump.length; i++){
        let cmpCard = cards[cardsOfCump[i]];
        let tempCard=cmpCard;
        console.log(tempCard.id)
        if(cmpCard.color === "netral" && cmpCard.name === "taki"){
            cmpCard.color = currentCard.color;
        }

        if(currentCard.name === "plus2"){
            if(cmpCard.name !== "plus2"){
                break;
            }
        }
        if(cmpCard.color === currentCard.color || cmpCard.number === currentCard.number || cmpCard.name === currentCard.name || cmpCard.color === "netral"){
            if(cmpCard.type === "ordinary"){
                lenOfRoute = 1;
            }
            else if(cmpCard.name === "taki"){
                count = 1;
                for(let j = 0; j < cardsOfCump.length; j++){
                    if(i !== j){
                        const innerCard = cards[cardsOfCump[j]];
                        console.log(cmpCard.name);
                        if(innerCard.color === cmpCard.color && innerCard.name != "plus2"){
                            count++;
                        }
                    }
                }
                lenOfRoute = count;
            }
            else if(cmpCard.name === "plus2" || cmpCard.name === "plus" || cmpCard.name === "stop" || cmpCard.name === "changeDir"){
                lenOfRoute = 2;
            }
        }
        else if(cmpCard.name === "plus3"){
            lenOfRoute = 3;
        }

        if(lenOfRoute > max){
            max = lenOfRoute;
            maxIndex = i;
        }
    }

    // הכנסת הקלפים המתאימים למערך result
    const bestCard = cards[cardsOfCump[maxIndex]];
    if(bestCard.type === "ordinary" || bestCard.name === "plus2" || bestCard.name === "plus3"){
        if(bestCard.name === "plus2"){
            pl2 += 2;
        }
        else if(bestCard.name === "plus2"){
            pl3 += 3;
        }
        result.push(cardsOfCump[maxIndex]);
        if (maxIndex < cardsOfCump.length) {
            cardsOfCump.splice(maxIndex, 1);
        }
    }
    else if(bestCard.name === "taki"){
        let takiArr = [];
        takiArr.push(cardsOfCump[maxIndex]);
        if (maxIndex < cardsOfCump.length) {
            cardsOfCump.splice(maxIndex, 1);
        }
        for(let j = 0; j < cardsOfCump.length; j++){
            if(cards[cardsOfCump[j]].color == bestCard.color){
                takiArr.push(cardsOfCump[j]);
                cardsOfCump.splice(j, 1);
            }
        }
        result = takiArr;
    }
    else if(bestCard.name === "plus" || bestCard.name === "stop" || bestCard.name === "changeDir"){
        result.push(cardsOfCump[maxIndex]);
        cardsOfCump.splice(maxIndex, 1);
    }

    // אם אין קלפים חוקיים – בדוק אם יש changeColor
    if(result.length === 0){
    //     let changeColorIndex = cardsOfCump.findIndex(id => cards[id].name === "changeColor");

    //     if(changeColorIndex !== -1){
    //         let colorCounts = {yellow: 0, red: 0, green: 0, blue: 0};

    //         for(let i = 0; i < cardsOfCump.length; i++){
    //             const color = cards[cardsOfCump[i]].color;
    //             if(colorCounts[color] !== undefined){
    //                 colorCounts[color]++;
    //             }
    //         }

    //         const maxColor = Object.entries(colorCounts).reduce((a, b) => a[1] > b[1] ? a : b)[0];

    //         let div = document.createElement('div');
    //         div.classList.add('colors');
    //         div.style.backgroundColor = maxColor;
    //         document.getElementById('chCol').append(div); 
    //         prevCard.color = maxColor;

    //         setTimeout(() => {
    //             document.getElementById('chCol').innerHTML = "";
    //             playerRow();
    //         }, 2000);
    //         return;
    //     } else {
            // אין קלף מתאים – שולף קלף
            setTimeout(() => {
                addCardsCump();
                playerRow();
            }, 1000);
            return;
            
        //}
    }
    // ביצוע המהלך בפועל – זריקת הקלפים
    let k = 0;
    const interval = setInterval(() => {
        if(k < result.length){
            document.getElementById('garbage').innerHTML = "";
            let img = document.createElement('img');
            img.classList.add("image");
            img.src = cards[result[k]].img;
            document.getElementById('garbage').append(img);
            console.log(currentCard.name);
            console.log(currentCard.number);
            console.log(currentCard.color);
            console.log(cards[result[k]].name);
            console.log(cards[result[k]].number);
            console.log(cards[result[k]].color);
            document.querySelector('#other').firstElementChild.remove();
            prevCard = cards[result[k]];
            k++;
        } 
        else {
            clearInterval(interval);
            if(["stop", "changeDir", "plus"].includes(prevCard.name)&&prevCard.name!=="taki"){
                // prevCard = cards[result[k]];
                setTimeout(cumpRow, 1000);
            } else {
                playerRow();
            }
        }
    }, 500);
}


// function endGame(){   
    
    
// }