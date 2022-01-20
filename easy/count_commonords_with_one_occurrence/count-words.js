var countWords = function (words1, words2) {
  let n_words = 0;
  let words1_occ = {};
  let words2_occ = {};
  for (let i = 0; i < words1.length; i++) {
    if (words1[i] in words1_occ) {
      words1_occ[words1[i]] += 1;
    } else {
      words1_occ[words1[i]] = 1;
    }
  }

  for (let i = 0; i < words2.length; i++) {
    if (words2[i] in words2_occ) {
      words2_occ[words2[i]] += 1;
    } else {
      words2_occ[words2[i]] = 1;
    }
  }

  for (word in words1_occ) {
    if (
      (word in words2_occ) &
      (words1_occ[word] == 1) &
      (words2_occ[word] == 1)
    ) {
      n_words += 1;
    }
  }

  return n_words;
};