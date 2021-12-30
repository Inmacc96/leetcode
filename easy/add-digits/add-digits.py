def addDigits(self, num):
        """
        :type num: int
        :rtype: int
        """
        listdig = [int(x) for x in str(num)]
        while len(listdig)!=1:
            suma = sum(listdig)
            listdig= [int(x) for x in str(suma)]
        return listdig[0]