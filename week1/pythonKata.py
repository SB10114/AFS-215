def myFunction(num):
    if num % 3 == 0 and num % 5 == 0:
        return str("PepsiCoke")
    if num % 3 == 0:
        return str("Pepsi")
    if num % 5 == 0:
        return str("Coke")
    return str(num)

print([myFunction(1)])
print([myFunction(2)])
print([myFunction(3)])
print([myFunction(5)])
print([myFunction(9)])
print([myFunction(20)])
print([myFunction(30)])