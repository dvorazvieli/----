const pic = ['תמונות/תמונה 1.jpg',
       'תמונות/תמונה 1.jpg',
       'תמונות/תמונה 2.jpg',
       'תמונות/תמונה 2.jpg',
       'תמונות/תמונה 3.jpg',
       'תמונות/תמונה 3.jpg',
       'תמונות/תמונה 4.jpg',
       'תמונות/תמונה 4.jpg',
       'תמונות/תמונה 5.jpg',
       'תמונות/תמונה 5.jpg',
       'תמונות/תמונה 6.jpg',
       'תמונות/תמונה 6.jpg',
       'תמונות/תמונה 7.jpg',
       'תמונות/תמונה 7.jpg',
       'תמונות/תמונה 8.jpg',
       'תמונות/תמונה 8.jpg',
       'תמונות/תמונה 9.jpg',
       'תמונות/תמונה 9.jpg',
       'תמונות/תמונה 10.jpg',
       'תמונות/תמונה 10.jpg',
       'תמונות/תמונה 11.jpg',
       'תמונות/תמונה 11.jpg',
       'תמונות/תמונה 12.jpg',
       'תמונות/תמונה 12.jpg',
       'תמונות/תמונה 13.jpg',
       'תמונות/תמונה 13.jpg',
       'תמונות/תמונה 14.jpg',
       'תמונות/תמונה 14.jpg',
       'תמונות/תמונה 15.jpg',
       'תמונות/תמונה 15.jpg',
       'תמונות/תמונה 16.jpg',
       'תמונות/תמונה 16.jpg',
    ];
let currentSelection = [];
let numOfCards;
let currentSelect = 0;
let selectedCards = new Set();
const select=document.getElementById('select');
select.addEventListener('change',function(){
    startGame();
})


function startGame(){
    document.getElementById('gamebord').innerHTML='';
    const selectedOption=select.options[select.selectedIndex];
    numOfCards=selectedOption.id;
    randCards();
    let cardDiv = document.querySelectorAll('.cards');
    cardDiv.forEach((cd) => { 
        cd.onclick = selectCard;
    });
}

function selectCard(event){
    currentSelect++;
    let img = document.createElement('img');
    img.src=currentSelection[event.currentTarget.id];
    img.id=`#img${currentSelect}`;
    img.classList.add( "img");
    event.currentTarget.innerHTML='';
    event.currentTarget.append(img);
    if(currentSelect % 2 === 0 && img.src != document.getElementById(`#img${currentSelect-1}`).src){
        setTimeout(cover, 1000, img);
        let img2=document.getElementById(`#img${currentSelect-1}`);
        setTimeout(cover, 1000, img2);
    }
}


function cover(img){
    img.classList.add( "img2");
    img.classList.remove( "img");
}


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


function randCards(){
    let lefpic = [...pic];
    lefpic.splice(numOfCards, lefpic.length-numOfCards);
    let img = [];
    for (let i = 0; i < numOfCards; i++) {
        let index = getRandomInt(lefpic.length);
        let div = document.createElement('div');
        div.id=`${i}`;
        div.classList.add( "cards");
        document.querySelector('#gamebord').append(div);
        img.push(lefpic[index]);
        lefpic.splice(index, 1);
    }
    console.log(img);
    currentSelection=img;
}