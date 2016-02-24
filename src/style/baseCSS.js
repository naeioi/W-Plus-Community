var fgColor1 = 'rgb(235, 165, 39)';
var fgColor2 = 'rgb(137, 83, 35)';
var bgColor1 = 'rgb(242, 242, 240)';
var bgColor2 = 'rgb(172, 173, 170)';

const darkenBG = (e) => {
  e.target.style.backgroundColor='rgba(0,0,0,0.1)';
}

const msDelay = 50;

const clearBG = (e) => {
  let target = e.target;
  setTimeout(()=>target.style.backgroundColor='rgba(0,0,0,0)', msDelay);
}

export { fgColor1, fgColor2, bgColor1, bgColor2, darkenBG, clearBG }
