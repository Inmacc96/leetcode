var toCapitalizeCase = word => word.slice(0,1).toUpperCase() + word.slice(1).toLowerCase();

var detectCapitalUse = function(word) {
  return [word.toUpperCase(), word.toLowerCase(), toCapitalizeCase(word)].includes(word)  
};