const cards = [

    {
        name: 'qr',
        imgUrl: 'assets/img/qr.png'
    },
    {
        name: 'code',
        imgUrl: 'assets/img/code.png'
    },
    {
        name: 'qr',
        imgUrl: 'assets/img/monkey.png'
    }
]

//make a copy to get pairs
allCardImgUrl = cards.concat(cards);


//shuffle
allCardImgUrl.sort(() => Math.random() - 0.5);







//create imgs
let arrCards = [];
    allCardImgUrl.forEach(img=>{
        //generate divs with imgs and append to div container
        let cardContainer = document.createElement('div');
        cardContainer.style.backgroundImage = 'Url("assets/img/becode.png")';
        let card = document.createElement('img');
        card.setAttribute('src', img.imgUrl);
        cardContainer.appendChild(card);
        const canvas = document.querySelector(".mem-canvas");
        canvas.appendChild(cardContainer);

        //flip card on click
        card.addEventListener("click", ()=>{
        card.style.opacity = '1';
        });
    });



