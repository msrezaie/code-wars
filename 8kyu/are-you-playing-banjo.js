// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.

// my solution
function areYouPlayingBanjo(name) {
    let firstLetter = name.split('')[0];
    firstLetter = firstLetter == 'r' || firstLetter == 'R' ? name + " plays banjo" : name + " does not play banjo";
    return firstLetter;
}