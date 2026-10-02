const button = document.querySelector("#action");
const button2 = document.querySelector("#action2");
const hiddenButton = document.getElementById("action3");
const stopButton = document.getElementById("action4");
const description = document.getElementById("description");

//random hidden button position
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;
const buttonWidth = hiddenButton.offsetWidth;
const buttonHeight = hiddenButton.offsetHeight;
const randomX = Math.random() * (screenWidth - buttonWidth);
const randomY = Math.random() * (screenHeight - buttonHeight);
hiddenButton.style.left = randomX + "px";
hiddenButton.style.top = randomY + "px";

function randomizeHiddenButton() {
    const buttonWidth = hiddenButton.offsetWidth;
    const buttonHeight = hiddenButton.offsetHeight;

    const maxX = window.innerWidth - buttonWidth;
    const maxY = window.innerHeight - buttonHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    hiddenButton.style.left = `${randomX}px`;
    hiddenButton.style.top = `${randomY}px`;
}

let buttonClicked = false;
let button2Clicked = false;
let hiddenButtonClicked = false;
let imageTimeouts = [];

function updateBackground() {
  // Both must be true
  document.body.style.backgroundColor =
    buttonClicked && button2Clicked ? "#00003d": "#b1e0ff";
  
}

button?.addEventListener("click", () => {
  buttonClicked = !buttonClicked;
  button.textContent = buttonClicked ? "It works" : "Click me";
  button.style.backgroundColor = buttonClicked ? "#0098f0" : "";
  hiddenButton.style.display = buttonClicked ? "block" : "none";
  randomizeHiddenButton();
  updateBackground();
});

button2?.addEventListener("click", () => {
  button2Clicked = !button2Clicked;
  button2.textContent = button2Clicked ? "It works as well" : "Click me as well";
  button2.style.backgroundColor = button2Clicked ? "#0098f0" : "";
  updateBackground();
});

hiddenButton?.addEventListener("click", () => {
  hiddenButtonClicked = !hiddenButtonClicked;
  hiddenButton.style.display = hiddenButtonClicked ? "none" : "block";
  updateBackground();
});

const mover = document.querySelector(".title");

document.addEventListener("mousemove", (event) => {
  if (!mover) {
    return;
  }

  if (buttonClicked && button2Clicked) {
    mover.classList.add("titleactive");
    mover.style.left = `${event.clientX}px`;
    mover.style.top = `${event.clientY}px`;
  } else {
    mover.style.left = "50%";
    mover.style.top = "35%";
  }
});

const mediaItems = [
  { type: "image", src: "media/1.jfif" },
  { type: "image", src: "media/2.jfif" },
  { type: "image", src: "media/3.jfif" },
  { type: "image", src: "media/4.jfif" },
  { type: "image", src: "media/5.jfif" },
  { type: "image", src: "media/6.jfif" },
  { type: "image", src: "media/7.jfif" },
  { type: "image", src: "media/8.jfif" },
  { type: "image", src: "media/10.jfif" },
  { type: "image", src: "media/11.jfif" },
  { type: "image", src: "media/12.jfif" },
  { type: "image", src: "media/13.jfif" },
  { type: "image", src: "media/14.jfif" },
  { type: "image", src: "media/15.jfif" },
  { type: "image", src: "media/16.jfif" },
  { type: "image", src: "media/17.jfif" },
  { type: "image", src: "media/18.jfif" },
  { type: "image", src: "media/19.jfif" },
  { type: "image", src: "media/20.jfif" },
  { type: "image", src: "media/21.jfif" },
  { type: "gif", src: "media/1.gif" },
  { type: "gif", src: "media/2.gif" },
  { type: "gif", src: "media/3.gif" },
  { type: "gif", src: "media/4.gif" }
];

const mediaContainer = document.getElementById("mediaContainer");

hiddenButton?.addEventListener("click", () => {
  const numberOfImages = 500;

  for (let i = 0; i < numberOfImages; i++) {
    const timeout = setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * mediaItems.length);
      const randomMedia = mediaItems[randomIndex];
      const image = document.createElement("img");

      image.src = randomMedia.src;
      image.alt = "Random media";

      const size = Math.random() * 200 + 100;
      image.style.width = `${size}px`;

      const randomX = Math.random() * (window.innerWidth * 0.7);
      const randomY = Math.random() * (window.innerHeight * 0.4);
      const randomZIndex = Math.floor(Math.random() * 501) + 500;

      image.style.zIndex = String(randomZIndex);
      image.style.left = `${randomX}px`;
      image.style.top = `${randomY}px`;

      mediaContainer.appendChild(image);
    }, i * 100);

    imageTimeouts.push(timeout);
  }

  mediaContainer.style.display = "block";
  button.style.display = "none";
  button2.style.display = "none";
  hiddenButton.style.display = "none";
  stopButton.style.display = "block";
  description.style.display = "none";
});

stopButton?.addEventListener("click", () => {
  imageTimeouts.forEach((timeout) => {
    clearTimeout(timeout);
  });

  imageTimeouts = [];
  mediaContainer.innerHTML = "";
  button.style.display = "";
  button2.style.display = "";
  hiddenButton.style.display = "none";
  stopButton.style.display = "none";
  description.style.display = "";

  randomizeHiddenButton();
});


