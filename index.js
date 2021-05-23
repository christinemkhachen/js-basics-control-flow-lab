function scuberGreetingForFeet(feet){
  if (feet <= 400) {
      return "This one is on me!";
  } 

  if (feet > 2000 && feet < 2500) {
    return "I will gladly take your thirty bucks."
  }

  if (feet > 2500)      {
    return "No can do."
  }  

}

function ternaryCheckCity(city){
  // Write your code here!
  // This is a ternary; ternary is shorthand for if statement
  return city === "NYC" ? "Ok, sounds good." : "No go."
}

// this is the same as: this is never going to run because we havent called or invoked the funtion. this is purely an example of a conditional rather than a ternary.
function conditionalCheckCity(city) {
  if (city === "NYC") {
    return "Ok, sounds good."
  } else {
    return "No go."
  }
}


function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip) {
    case "generous":
      return "Thank you so much."
    case "not as generous":
      return "Thank you."
    default: 
      return "Bye." 
  }
}
function equivalentToSwitch(tip) {
  if (tip === "generous") {
    return "Thank you so much."
  } else if (tip === "not as generous") {
    return "Thank you."
  } else {
    return "Bye"
  }
}