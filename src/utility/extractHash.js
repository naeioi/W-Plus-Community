const extractHash = (hash) = {
  let arr = hash.split('/');
  arr.shift();
  return arr
}

export default extractHash
