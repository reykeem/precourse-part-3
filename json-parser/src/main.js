/**
 * returns a javascript object from a JSON formatted string
 * Example json to javascript object:
 *   "5"          -> 5
 *   "'hello'"   -> 'hello'
 *   "[]"         -> []
 *   "{}"         -> {}
 *   "["hello"]"  -> ['hello']
 *
 *  For more examples, use the JSON.stringify method in the console
 */

function JSONParser(string) {
  // CODE HERE
	let obj = JSON.parse(string)
  return obj
}

console.log(JSONParser("chicken"))