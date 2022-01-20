def restoreString(s, indices):
    shuffled_string_list = [0] * len(indices)

    for (i,index) in enumerate(indices):
        shuffled_string_list[index] = s[i]
        
    return ''.join(shuffled_string_list)
            