// use setInterval on the <p> tag to increment every second
// clear interval after 12 seconds

let counter = 0;


let counterloc = document.querySelector("p")


function calculateCount(){
    if (counter < 13){
        counterloc.innerText = counter
        counter += 1
    } else {
        clearInterval(timerset)
    }
    
}

let timerset = setInterval(calculateCount, 1000)

timerset

console.log(timerset)




//clearInterval(timerset)

