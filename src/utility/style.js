function mergeCSS(...objs) {
  objs.forEach((obj) => {
    if (obj && typeof obj != 'object') {
      console.log(obj);
      throw "In mergeCSS(...objs): An obj must be an Object.";
    }
  })
  return Object.assign({}, ...objs);
}

function copyStyle(style) {
  return Object.assign({}, style);
}

function setAlpha(color, alpha) {
  if(typeof color != 'string') {
    throw 'In setAlpha(color, alpha): A color must be a String.';
  }
  color = color.replace(/\s/g, '');
  let arr, r, g, b;
  if (arr=color.match(/rgb\((\d+),(\d+),(\d+)\)/)) {
    [,r,g,b] = arr;
    return `rgba(${r},${g},${b},${alpha})`;
  }
  else {
    throw `In setAlpha(color, alpha): color not recogized - '${color}'`;
  }
}

export { mergeCSS, setAlpha, copyStyle }
