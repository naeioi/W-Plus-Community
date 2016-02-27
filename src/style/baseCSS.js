var fgColor1 = 'rgb(236, 159, 60)';
var fgColor2 = 'rgb(132, 85, 46)';
var bgColor1 = 'rgb(237, 237, 246)';
var bgColor2 = 'rgb(164, 167, 167)';

const darkenBG = (e) => {
  e.currentTarget.style.backgroundColor='rgba(0,0,0,0.1)';
}

const msDelay = 50;

const clearBG = (e) => {
  let target = e.currentTarget;
  setTimeout(()=>target.style.backgroundColor='rgba(0,0,0,0)', msDelay);
}

export { fgColor1, fgColor2, bgColor1, bgColor2, darkenBG, clearBG }
