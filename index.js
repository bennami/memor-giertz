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
    },
    {
        name: 'koen',
        imgUrl: 'assets/img/koen.jpeg'
    },
    {
        name: 'sicco',
        imgUrl: 'assets/img/sicco.jpeg'
    }
]

//make a copy to get pairs
allCardImgUrl = cards.concat(cards);


//shuffle
allCardImgUrl.sort(() => Math.random() - 0.5);

//generate htlm tags and add click event
allCardImgUrl.forEach(img=>{
        //generate divs with imgs and append to div container
        let cardContainer = document.createElement('div');
        cardContainer.style.backgroundImage = 'Url("assets/img/becode.png")';
        let card = document.createElement('img');
        card.setAttribute('src', img.imgUrl);
        card.setAttribute('data-id', img.name);
        card.setAttribute('class',"card");
        cardContainer.appendChild(card);
        const canvas = document.querySelector(".mem-canvas");
        canvas.appendChild(cardContainer);

    //flip card on click
    // have a counter to prevent clicking on more than 2 cards,
    // push the 2 cards in array and do a check to see if the data matches
    // if its no match flip em back
    card.addEventListener("click", ()=>{

       card.style.opacity ="1";
       console.log(card);

    });
});








