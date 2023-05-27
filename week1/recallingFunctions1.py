class myClass:

    def __init__(self):
        self.status = []

    def numbers(self, num):
        self.status.append(num)

    def myString(self, str):
        self.status.append(str)

    def myDictionary(self, dict):
        self.status.append(dict)
    
    def myTuple(self, tuple):
        self.status.append(tuple)


classInstance = myClass()

numberSample = 3
classInstance.numbers(numberSample)
print(classInstance.status)

strSample = " "
classInstance.myString(strSample)
print(classInstance.status)

dictSample = {"six" : 5}
classInstance.myDictionary(dictSample)
print(classInstance.status)

tupleSample = ("free", "shav", "acado")
classInstance.myTuple(tupleSample)
print(classInstance.status)