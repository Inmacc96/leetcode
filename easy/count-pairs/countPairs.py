def countPairs(nums, k):
    num_pair = 0
    for (i,x) in enumerate(nums):
        for (j,y) in enumerate(nums):
            if i<j and nums[i] == nums[j] and (i*j)%k == 0:
                num_pair += 1
    return num_pair
                