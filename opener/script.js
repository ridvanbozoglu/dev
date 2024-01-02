 // Text animation

let words = ['Front-End developer', 'Based in Samsun',"Civil Engineer","Curious Person"];
let part;
let i = 0;
let offset = 0;
let len = words.length;
let forwards = true;
let skip_count =0;
let skip_delay = 15;
let speed = 70;

const wordflick = () => {
    let forwards = true;
    let offset = 0;
    let skip_count = 0;
    const len = words.length;
    let i = 0;
    setInterval(() => {
      if (forwards) {
        if (offset >= words[i].length) {
          skip_count++;
          if (skip_count === skip_delay) {
            forwards = false;
            skip_count = 0;
          }
        }
      } else {
        if (offset === 0) {
          forwards = true;
          i++;
          offset = 0;
          if (i >= len) {
            i = 0;
          }
        }
      }
  
      const part = words[i].substring(0, offset);
      if (skip_count === 0) {
        forwards ? offset++ : offset--;
      }
      
      document.querySelector('.slide').textContent = part;
    }, speed);
  };
  
  document.addEventListener('DOMContentLoaded', () => {
    wordflick();
  });


  // Audio playing 

  const button = document.querySelector(".play-button");
  const audio = document.querySelector(".meme-song");

const audioControl = () => {

    if(button.textContent==="Play"){
      button.textContent="Pause";
      audio.play();}else{
      button.textContent="Play";
      audio.pause();
    }
}

button.addEventListener('click', audioControl);




  

  
