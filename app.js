function themechanger() {
    if (document.body.style.backgroundColor == 'black') {
        document.body.style.backgroundColor = 'white'
        document.body.style.color = 'black'
        document.querySelector('.color').innerHTML = 'white'
        document.getElementById("myDiv").style.borderColor = "black";
    }
    else {
        document.body.style.color = 'white'
        document.body.style.backgroundColor = 'black'
        document.querySelector('.color').innerHTML = 'black'
        document.getElementById("myDiv").style.borderColor = "white";
    }

}

// var colorArray = ['red' , 'green' , 'blue' , 'yellow' , 'orange' , 'black' , 'purple' , 'pink' , 'gray' , 'saddlebrown' , 'salmon']