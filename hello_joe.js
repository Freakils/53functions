module.exports = function(name) {
  if (name === "Joe") {
    return "Hello!";
  }
  if (name === "Bob") {
    return "Hello!"
  }
  return "Hello, " + name.toUpperCase() + "!";

};
