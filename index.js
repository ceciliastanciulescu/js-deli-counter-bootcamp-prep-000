function takeANumber(katzDeliLine, newPerson){
  katzDeliLine.push(newPerson);
  return "Welcome, "+ newPerson + ". You are number " + katzDeliLine.length + " in line."
}

function nowServing(katzDeliLine){
  var firstInLine = katzDeliLine[0];
  if (katzDeliLine.length === 0){
    return ("There is nobody waiting to be served!");
  } else {
    katzDeliLine.shift();
    return ("Currently serving " + firstInLine + ".");
  }
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length === 0){
    return ("The line is currently empty.");
  } else {
    katzDeliLine.toString();
  }
}