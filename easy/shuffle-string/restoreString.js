const restoreString = function(s, indices) {
    
    let shuffled_string_list = new Array(indices.length).fill(0);
    
    for (let i=0; i < indices.length; i++){
        shuffled_string_list[indices[i]] = s[i]
    }

    return shuffled_string_list.join('');
};
