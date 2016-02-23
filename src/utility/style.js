function mergeCSS(...objs) {
  objs.forEach((obj) => {
    if (obj && typeof obj != 'object') {
      console.log(obj);
      throw "In mergeCSS(...objs): An obj must be an Object";
    }
  })
  return Object.assign({}, ...objs);
}

export { mergeCSS }
