function loop() {
  let h2 = document.querySelector('h2');
  let string = 'Web developer';
  // let string = 'test';
  for (let i = 0; i < string.length; i++) {
    setTimeout(function() {
      h2.innerHTML += string[i];
    }, i * 100);
  }
}


function animateOld() {
  let h2 = document.querySelector('h2');
  h2.innerHTML = '';
  // h2.style.color = 'transparent';
  let string = 'Web developer';
  setTimeout(loop, 500);
}


function animate() {
  let h2 = document.querySelector('h2');
  h2.style.color = 'white';
  h2.innerHTML = '';
  let string = 'Web developer';
  for (let i = 0; i < string.length; i++) {
    setTimeout(function() {
      h2.innerHTML += string[i];
    }, i * 100);
  }
}

// window.onload = animate;
// window.onload = setTimeout(animate, 500);


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


// CHANGE SKILLS COLOR ON HOVER
function skillsHover() {
  let skills = document.querySelectorAll('i');
  Array.from(skills).forEach(skill => {
    skill.onmouseover = function() {
      skill.style.transition = 'color 0.4s';
      // skill.style.color = getGoogleColor();
      // skill.style.color = getColorPalette();
      skill.style.color = getRandomColor();
    };
    // CLICK RESETS ALL TO WHITE
    skill.onclick = function() {
      Array.from(skills).forEach(skill => {
        skill.style.color = 'white';
      })
    }
  });
}


// CHANGE SKILL COLOR TO DEFAULT ON HOVER, RESET TO WHITE ON CLICK
function skillsHoverNew() {
  let skills = document.querySelectorAll('i');
  Array.from(skills).forEach(skill => {
    let color = skill.style.color;
    skill.style.color = 'white';
    skill.onmouseover = function() {
      skill.style.transition = 'color 0.3s';
      // skill.style.color = 'white';
      skill.style.color = color;
    }
    skill.onclick = function() {
      Array.from(skills).forEach(skill => {
        skill.style.color = 'white';
      })
    }
  })
}


// FUNCTION CALLS
// windown.onload = changeBrackets;
// window.onload = setInterval(changeSkillsColor, 5000);
window.onload = setInterval(changeBracketsColor, 5000);
// window.onload = skillsHover;
window.onload = skillsHoverNew;


// BLUR FUNCTION
// window.onblur = function() {
//   html.style.opacity = '0.7';
//   document.querySelector('h1').innerHTML = 'Come Back';
// }

// window.onfocus = function() {
//   html.style.opacity = '1';
//   document.querySelector('h1').innerHTML = 'Marko Sarin';
// }
