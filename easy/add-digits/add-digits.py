def addDigits(num):
    listdig = [int(x) for x in str(num)]
    while len(listdig)!=1:
        suma = sum(listdig)
        listdig= [int(x) for x in str(suma)]
    return listdig[0]