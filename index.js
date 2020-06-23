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
        name: 'monkey',
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

let counter = 0;
let selectedCards = [];
function nextRound(){
         counter = 0;
         selectedCards = [];
}

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

    // flip card on click
    // have a counter to prevent clicking on more than 2 cards,
    // push the 2 cards in array and do a check to see if the data matches
    // if its no match flip em back
    card.addEventListener("click", ()=>{
        if(counter < 2){
            card.style.opacity ="1";
            selectedCards.push(card);
            console.log(card.dataset.id);
            counter++;
        }
        if(selectedCards[1] !== undefined){
            if(selectedCards[0].dataset.id  === selectedCards[1].dataset.id ){

                alert("u has match");
                nextRound();

            }else{
                selectedCards.forEach((card)=>{
                    card.style.opacity ="0"
                });
                nextRound();
            }
        }






    });
});








