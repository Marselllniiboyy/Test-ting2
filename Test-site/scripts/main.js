const myImage = document.querySelector("img");

myImage.onclick= () => {
    const mySrc = myImage.getAttribute("src")
    if (mySrc === "images/IMG_1395.JPG") {
        myImage.setAttribute("src", "images/Marsel Ganteng.jpg");
    }else {
        myImage.setAttribute("src", "images/IMG_1395.JPG");
    }
    
}

// Personalized welcome message code

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");


function setUserName () {
    const myName = prompt("Please enter your name");
    if (!myName) {
        setUserName();
    }else {
        localStorage.setItem("name", myName);
        myHeading.textContent=`Marse is heandsome, ${myName}`;
    }
}   

if (!localStorage.getItem("name")) {
    setUserName();
}else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Marsel is cool, ${storedName}`;
}

myButton.onclick= function() {
    setUserName();
}

