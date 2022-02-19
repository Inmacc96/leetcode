def sumOfThree(num):
    x = float(num - 3) / 3
    if float.is_integer(x):
        return [int(x), int(x+1), int(x+2)] 
    else:
        return []