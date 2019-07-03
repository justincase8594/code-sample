// Write your function here:
function tipCalculator(quality, total) {
  if (quality === "bad"){
    return total * .05;
  }
  if (quality === "ok"){
    return total * .15;
  }
  if (quality === "good"){
    return total * .20;
  }
  if (quality === "excellent"){
    return total * .30;
  } else {
    return total * .18
  }
}