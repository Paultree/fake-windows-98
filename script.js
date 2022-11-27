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
  const rightSide = document.getElementById('time');
  rightSide.appendChild(span);
  span.innerText = time;
  span.classList.add('time')
  let t = setTimeout(function () {
    currentTime();
  }, 1000);
}

currentTime();

const desktopIconArr = ['bin', 'notepad', 'computer', 'folder', 'calculator', 'ie'];

const desktopIconNames = ['Recycling Bin', 'Notepad', 'My Computer', 'Images'];

let arrHighlighted = [];

desktopIconArr.forEach((type) => {
  const desktopIcon = document.querySelector(`.desktop__icon--${type}`);


  desktopIcon.addEventListener("click", (e) => {
    
    let selectedFolder = e.currentTarget.classList[1];
    let hIcon = document.querySelector(`.${e.currentTarget.classList[1]}`)
    if (!arrHighlighted.includes(selectedFolder)) {
      arrHighlighted.forEach((folder) => {
      let removeIcon = document.querySelector(`.${folder}`);
      removeIcon.classList.remove("highlighted");
        })
    arrHighlighted = [];
    arrHighlighted.push(selectedFolder);
    hIcon.classList.add('highlighted');
  };
})

})

let applications = {
  'ie': ['windowsIe', 'minIe', 'closeIe', 'tabIe', 'ie'],
  'calculator': ['windowsCalculator', 'minCalculator', 'closeCalculator', 'tabCalculator', 'calculator'],
  'notepad': ['windowsNotepad', 'minNotepad', 'closeNotepad', 'tabNotepad', 'notepad'],
}

for (let app in applications ) {
  let box = document.getElementById(`${applications[app][0]}`);
  let minimize = document.getElementById(`${applications[app][1]}`);
  let close = document.getElementById(`${applications[app][2]}`);
  let tab = document.getElementById(`${applications[app][3]}`);
  let desktopIcon = document.querySelector(
    `.desktop__icon--${applications[app][4]}`
  );

  minimize.addEventListener('click', () => {
    box.style.display = 'none';
  });

  close.addEventListener('click', ()=> {
    box.style.display = 'none';
    tab.style.display = 'none';
  })

  tab.addEventListener('click', ()=> {
    box.style.display = 'block';
  })

  desktopIcon.addEventListener("dblclick", () => {
    box.style.display = "block";
    tab.style.display = "block";
  });
}

const startButton = document.querySelector('.taskbar__start');

const startMenu = document.querySelector('.taskbar__startmenu');

startButton.addEventListener('click', () => {
  startMenu.classList.toggle('visible');
})