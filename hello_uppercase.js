module.exports = function(name){
  if(name === undefined){
  return "HELLO!";
  }
  return  "Hello, " + name.toUpperCase() + "!";
};
