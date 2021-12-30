def countWords(words1, words2):
    n_words = 0
    words1_occ = {}
    words2_occ = {}
    for x in words1:
        words1_occ[x] = words1.count(x);
    for x in words2:
        words2_occ[x] = words2.count(x);
    for x in set(words1_occ.keys()) & set(words2_occ.keys()):
        if words1_occ[x]==1 and words2_occ[x]==1:
            n_words += 1;
    return n_words;