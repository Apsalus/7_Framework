const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

const h2 = document.querySelector("h2");

const superEventHandler = {
  mouseEnter: () => {
    h2.innerHTML = "The mouse is here!";
    h2.style.color = colors[0];
  },
  mouseLeave: () => {
    h2.innerHTML = "The mouse is gone!";
    h2.style.color = colors[1];
  },
  contextMenu: () => {
    h2.innerHTML = "That was right click!";
    h2.style.color = colors[4];
  },
  reSize: () => {
    h2.innerHTML = "You just resized!";
    h2.style.color = colors[2];
  }
};

h2.addEventListener("mouseenter", superEventHandler["mouseEnter"]);
h2.addEventListener("mouseleave", superEventHandler["mouseLeave"]);
window.addEventListener("contextmenu", superEventHandler["contextMenu"]);
window.addEventListener("resize", superEventHandler["reSize"]);

// h2.addEventListener("mouseover", ()=>{

//   h2.innerHTML = "The mouse is here!";
//   h2.style.color = colors[0];
// })

// h2.addEventListener("mouseout", ()=>{

//   h2.innerHTML = "The mouse is gone!";
//   h2.style.color = colors[1];
// })

// window.addEventListener("contextmenu", ()=>{

//   h2.innerHTML = "That was right click!";
//   h2.style.color = colors[2];

// })

// window.addEventListener("resize",()=>{
//   h2.innerHTML = "You just resized!"
//   h2.style.color = colors[3];
// })
