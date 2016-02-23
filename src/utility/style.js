function mergeCSS(...objs) {
  objs.forEach((obj) => {
    if (typeof obj != 'object') {
      console.log(obj);
      throw "In mergeCSS(...objs): An obj must be an Object";
    }
  })
  return Object.assign({}, ...objs);
}

export { mergeCSS }
