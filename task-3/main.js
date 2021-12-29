
//fetch random cat image https://api.thecatapi.com/v1/images/search
//display image using the 'img' element
//create a button
//add event listener to change image


async function catImage(){
    const response = await fetch ("https://api.thecatapi.com/v1/images/search")
    const data = await response.json()
    const endofurl = data[0].url

    let catimg = document.querySelector("img")
    catimg.src = endofurl
}

catImage()

const newbutton = document.createElement("button")
document.body.appendChild(newbutton)
newbutton.innerText = "Click for another pic"
newbutton.addEventListener("click", catImage)