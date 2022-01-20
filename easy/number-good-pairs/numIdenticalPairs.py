def numIdenticalPairs(nums):
    cont = 0;
    for (i,num_i) in enumerate(nums):
        for num_j in nums[i+1:]:
            if num_i == num_j:
                cont += 1;
    return(cont)