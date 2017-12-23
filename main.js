// Create a function method that allow you to wrap an existing function. 
// The method signature would look something like this:


function speak(name){
   return "Hello " + name;
}


// afaik this add a method to the function object
Function.prototype.wrap = function (callback) {
    // this is the original function which is the speak
    // function
    var that = this;
    
    return function(yn, mn) {
        return callback(that, yn, mn)
    }
}

speak = speak.wrap(function(original, yourName, myName){
   greeting = original(yourName);
   return greeting + ", my name is " + myName;
})

var greeting = speak("Mary", "Kate");


