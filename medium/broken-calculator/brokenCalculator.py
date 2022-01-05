def brokenCalc(X, Y):
    cont = 0
    value = Y
    while X < value:
        if value % 2 != 0:
            value += 1
        else:
            value = value / 2
        cont += 1

    return cont + (X - value)