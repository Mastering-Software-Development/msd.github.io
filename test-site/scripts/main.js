const image = document.querySelector("img");
image.onclick = () => {
    const imgSrc = image.getAttribute("src");
    if (imgSrc === "images/firefox.png") {
        image.setAttribute("src", "images/firefox-developer-edition.png");
    } else {
        image.setAttribute("src", "images/firefox.png");
    }
};

const heading = document.querySelector("h1");
const button = document.querySelector("button");

function setUserName() {
    const name = prompt("Please enter your name.");
    console.log("name", name);
    if (!name) {
        setUserName();
    } else {
        localStorage.setItem("name", name);
        heading.textContent = `Mozilla is cool ${name}`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    heading.textContent = `Mozilla is cool ${storedName}`;
}

button.onclick = () => {
    setUserName();
};
