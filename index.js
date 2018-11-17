function takeANumber(katzDeliLine, newPerson){
  katzDeliLine.push(newPerson);
  return "Welcome, "+ newPerson + ". You are number " + katzDeliLine.length + " in line."
}

function nowServing(katzDeliLine){

  if(katzDeliLine === 0){
    var firstInLine;
    return ("There is nobody waiting to be served!");
  } else {
    firstInline = (katzDeliLine[0]);
    katzDeliLine.shift();
    return ("Currently serving" + firstInLine + ".");
  }
}