exports.high = function(list){
var highest = 0;

list.forEach(function(max){
  if(max > highest){
    highest = max;
  }
})
  return highest;
}

exports.low = function(list){
var lowest = Infinity;

list.forEach(function(min){
  if(min < lowest){
    lowest = min;
  }
})
  return lowest;
}
