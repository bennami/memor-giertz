const cards = [

    {   name: 'unflipped',
        imgUrl: 'assets/img/becode.png'
    },
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


document.addEventListener("load", ()=>{

    cards.forEach(img=>{
        let card = document.createElement('img');
        card.setAttribute('src', img.imgUrl)
    })
    const canvas = document.querySelector(".mem-canvas");


});