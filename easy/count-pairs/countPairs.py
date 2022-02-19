def countPairs(nums, k):
    num_pair = 0
    for i in range(len(nums)):
        for j in range(i+1,len(nums)):
            if nums[i] == nums[j] and ( i * j ) % k == 0:
                num_pair += 1
    return num_pair