const toCapitalizeCase = word => word.slice(0,1).toUpperCase() + word.slice(1).toLowerCase();

const detectCapitalUse = function (word) {
  return [word.toUpperCase(), word.toLowerCase(), toCapitalizeCase(word)].includes(word)  
};