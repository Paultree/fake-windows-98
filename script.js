const taskbarIconArr = ['ie', 'calculator', 'spider', 'cards'];

const taskbarIconArrTwo = ['speaker', 'msn'];

//renders the taskbar
function renderTaskBar() {
  //creates the actual taskbar
    const container = document.createElement('div');
    const button = document.createElement('button');
    
    container.classList.add('taskbar');
    button.classList.add('taskbar__start')
    document.body.appendChild(container);
    button.innerHTML = '<img src="icons/windows.png">Start';
    container.appendChild(button); 

    renderIcons('left', taskbarIconArr);
    renderIcons('right', taskbarIconArrTwo);
    currentTime();
}

//renders icons on the taskbar
function renderIcons(position, arr) {
    const container = document.createElement("div");
    //create left icons on for container being appended onto taskbar next to start button//
    for (let i = 0; i < arr.length; i++) {
        const icon = document.createElement("span");
        icon.classList.add(`${arr[i]}`);
        icon.innerHTML = `<img src="icons/${arr[i]}.png"/>`;
      container.appendChild(icon);
    }

    //append container onto taskbar//
    container.classList.add(`taskbar__icons`);
    container.classList.add(`taskbar__icons--${position}`);
    const taskbar = document.querySelector('.taskbar');
    console.log(taskbar);
    taskbar.appendChild(container);

    //span element appended to bottom of taskbar icon containers//
    const span = document.createElement('span');
    span.classList.add(`taskbar__span`);
    span.classList.add(`taskbar__span--${position}`);
    container.appendChild(span);


}

let span = document.createElement("span"); //scope this globally so that time doesn't duplicate.

//creates a clock
function currentTime() {
    let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let session = "AM";

  if (hh == 0) {
    hh = 12;
  }
  if (hh > 12) {
    hh = hh - 12;
    session = "PM";
  }

  hh = hh < 10 ? "0" + hh : hh;
  mm = mm < 10 ? "0" + mm : mm;

  let time = `${hh} : ${mm} ${session}`
  const rightSide = document.querySelector('.taskbar__span--right');
  rightSide.appendChild(span);
  span.innerText = time;
  span.classList.add('time')
  let t = setTimeout(function () {
    currentTime();
  }, 1000);
}

const desktopIconArr = ['bin', 'notepad', 'computer', 'folder'];

const desktopIconNames = ['Recycling Bin', 'Notepad', 'My Computer', 'Images'];

let arrHighlighted = [];

function renderDesktop() {
const desktop = document.createElement('main');
  desktop.classList.add('desktop');
  document.body.appendChild(desktop);

  for (let i = 0; i < desktopIconArr.length; i++) {
    const icon = document.createElement("span");
    icon.classList.add(`desktop__icon`);
    icon.classList.add(`desktop__icon--${desktopIconArr[i]}`);
    icon.innerHTML = `<img src="icons/${desktopIconArr[i]}.png"><p>${desktopIconNames[i]}</p>`
    desktop.appendChild(icon);

    
    //only allows one icon to be highlighted at a time//
    
    icon.addEventListener("click", (e) => {

      let selectedFolder = e.currentTarget.classList[1];
      let hIcon = document.querySelector(`.${e.currentTarget.classList[1]}`);
      
      if (!arrHighlighted.includes(selectedFolder)) {
        arrHighlighted.forEach((folder) => {
          let removeIcon = document.querySelector(`.${folder}`);
          removeIcon.classList.remove("highlighted");
        });

        arrHighlighted = [];
        arrHighlighted.push(selectedFolder);
        hIcon.classList.add('highlighted');
        
      }
      
    });

    icon.addEventListener('dblclick', () => {
      console.log('deez')
    })
  }
}


renderDesktop();
renderTaskBar();

let windowsBox = document.getElementById('windowsBox');

const closeButton = document.getElementById('closeButton');

const minimizeButton = document.getElementById('minimizeButton');

closeButton.addEventListener('click', () => {
  console.log(windowsBox);
  windowsBox.style.display = "none";
})