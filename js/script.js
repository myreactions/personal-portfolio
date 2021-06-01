const h1 = document.querySelector('h1').style;
// const trueH2 = document.querySelector('h2');
let h2 = document.querySelector('h2').style;
const html = document.querySelector('html');
function appear() {
  h1.transition = 'color 1s';
  // h1.color = 'white';
  h2.transition = 'color 2s';
  h2.color = 'black';
  // h2.background = 'none';
}

function invert() {
  // h2.transition = 'color 3s';
  // h2.transition = 'background-color 0.5s';
  h2.color = 'white';
  h2.background = 'transparent';
  // h2.borderBottom = '10px solid white';
  // h2.boxShadow = '0 0 20px white';
  // h2.textShadow = '0 0 30px white';
}

function underline() {
  h2.transition = 'all 1s';
  h2.background = 'white';
  // h2.color = '#0D101E';
  h2.color = 'initial';
}

let test = document.getElementById('test');

function disappear() {
  let test = document.getElementById('test').style;
  test.transition = 'all 2s ease-in-out';
  // test.width = '0';
  // test.transform = 'translate(300px)';
  // test.transform = 'rotate(1000deg)';
  test.height = 0;
}

function loop() {
  let h2 = document.querySelector('h2');
  // h2.style.color = 'white';
  let string = 'Web developer';
  for (let i = 0; i < string.length; i++) {
    setTimeout(function() {
      h2.innerHTML += string[i];
    }, i * 100);
  }
}

function animate() {
  let h2 = document.querySelector('h2');
  h2.innerHTML = '';
  // h2.style.color = 'transparent';
  let string = 'Web developer';
  setTimeout(loop, 500);
}

function showBrackets() {
  let brackets = document.getElementsByClassName('brackets');
  Array.from(brackets).forEach(bracket => {
    bracket.style.transition = 'color 1s';
    bracket.style.color = '#3484E3';
  })
}

function getRandomColor() {
  let letters = '0123456789ABCDEF'.split('');
  let color = '#';
  for (let i = 0; i < 6; i++ ) {
      color += letters[Math.round(Math.random() * 15)];
  }
  return color;
}

function getGoogleColor() {
  let colors = ['#4285F4', '#EA4335', '#FABC03', '#34A853'];
  let color;
  for (let i = 0; i < colors.length; i++) {
    color = colors[Math.floor(Math.random() * 4)];
  }
  return color;
}

function getColorPalette() {
  let colors = ['	#ff0000', '#ffa500', '#ffff00', '#008000', '#0000ff', '#4b0082', '	#ee82ee'];
  let color;
  for (let i = 0; i < colors.length; i++) {
    color = colors[Math.floor(Math.random() * colors.length)];
  }
  return color;
}

function changeBracketsColor() {
  let brackets = document.getElementsByClassName('brackets');
  let color = getRandomColor();
  Array.from(brackets).forEach(bracket => {
    bracket.style.transition = 'color 5s';
    bracket.style.color = color;
  })
}

function changeSkillsColor() {
  let skills = document.querySelectorAll('i');
  let color = getRandomColor();
  Array.from(skills).forEach(skill => {
    skill.style.transition = 'color 5s';
    skill.style.color = getRandomColor();
  })
}

// CHANGE COLOR ON HOVER
let skills = document.querySelectorAll('i');
Array.from(skills).forEach(skill => {
  skill.onmouseover = function() {
    skill.style.transition = 'color 0.4s';
    skill.style.color = getRandomColor();
    // skill.style.color = getGoogleColor();
    // skill.style.color = getColorPalette();
  };
  // CLICK RESETS ALL TO WHITE
  skill.onclick = function() {
    // skill.style.color = 'white';
    // let color = skill.style.color;
    let color = getRandomColor();
    // let color = getGoogleColor();
    Array.from(skills).forEach(skill => {
      // skill.style.color = getRandomColor();
      // skill.style.color = color;
      skill.style.color = 'white';
    })
  }
});


// h2.onmouseover = appear;
// window.onload = setTimeout(appear, 1000);
// window.onload = setTimeout(invert, 1000);
// window.onload = setTimeout(underline, 1000);
// test.onclick = disappear;
// window.onload = setTimeout(disappear, 1000);
// window.onload = setTimeout(animate, 1000);
// window.onload = animate;
// window.onload = showBrackets;
// window.onload = setTimeout(showBrackets, 1000);
// windown.onload = changeBrackets;
// window.onload = getRandomColor;
window.onload = setInterval(changeBracketsColor, 5000);
// window.onload = setInterval(changeSkillsColor, 5000);


// window.onblur = function() {
//   html.innerHTML = 'COME BACK';
// }
