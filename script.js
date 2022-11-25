//renders the entire view
function renderView() {

}

const taskbarIconArr = ['ie', 'notepad', 'spider', 'cards'];

const taskbarIconArrTwo = ['speaker', 'msn'];

//renders the taskbar
function renderTaskBar() {
  //creates the actual taskbar
    const container = document.createElement('div');
    const button = document.createElement('button');
    
    container.classList.add('taskbar');
    button.classList.add('taskbar__start')
    document.body.appendChild(container);
    button.innerHTML = 'Start';
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
        const button = document.createElement("button");
        button.classList.add(`${arr[i]}`);
        button.innerHTML = `${arr[i]}`;
      container.appendChild(button);
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
  rightSide.innerText = time;
  let t = setTimeout(function () {
    currentTime();
  }, 1000);
}

const desktopIconArr = ['bin', 'calculator', 'computer', 'folder']

function renderDesktop() {
const desktop = document.createElement('main');
  desktop.classList.add('desktop');
  document.body.appendChild(desktop);

  for (let i = 0; i < desktopIconArr.length; i++) {
    const icon = document.createElement("div");
    icon.classList.add(`desktop__icon`);
    icon.classList.add(`desktop__icon--${desktopIconArr[i]}`);
    desktop.appendChild(icon);
  }
}

renderDesktop();
renderTaskBar();