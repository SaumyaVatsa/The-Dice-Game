let randomNumber1 = Math.floor((Math.random()*6)+1)
let randomNumber2 = Math.floor((Math.random()*6)+1)
const image1 = document.querySelector(".img1")
const image2 = document.querySelector(".img2")
const h1 = document.querySelector('h1')

switch(randomNumber1){
    case 1:
        image1.setAttribute('src','images/dice1.png')
        break
    case 2:
        image1.setAttribute('src','images/dice2.png')
        break
    case 3:
        image1.setAttribute('src','images/dice3.png')
        break
    case 4:
        image1.setAttribute('src','images/dice4.png')
        break
    case 5:
        image1.setAttribute('src','images/dice5.png')
        break
    case 6:
        image1.setAttribute('src','images/dice6.png')
        break
    default:
        image1.setAttribute('src','images/dice1.png')
}

switch(randomNumber2){
    case 1:
        image2.setAttribute('src','images/dice1.png')
        break
    case 2:
        image2.setAttribute('src','images/dice2.png')
        break
    case 3:
        image2.setAttribute('src','images/dice3.png')
        break
    case 4:
        image2.setAttribute('src','images/dice4.png')
        break
    case 5:
        image2.setAttribute('src','images/dice5.png')
        break
    case 6:
        image2.setAttribute('src','images/dice6.png')
        break
    default:
        image2.setAttribute('src','images/dice1.png')
}

if(randomNumber1 > randomNumber2){
    h1.innerText = "Player 1 wins!"
}else if(randomNumber1 < randomNumber2){
    h1.innerText = "PLayer 2 Wins!"
}else{
    h1.innerText = "Draw"
}


// Another Method to Change the image 
// let randomImageSource1 = "images/dice" + randomNumber1 + ".png"
// image1.setAttribute("src",randomImageSource1)

// let randomImageSource2 = "images/dice" + randomNumber2 + ".png"
// image2.setAttribute("src",randomImageSource2)