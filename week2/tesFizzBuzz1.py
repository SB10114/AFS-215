def myFunction(num):
    if num % 3 == 0 and num % 5 == 0:
        return "PepsiCoke"
    if num % 3 == 0:
        return "Pepsi"
    if num % 5 == 0:
        return "Coke"
    return str(num)

def test_1():
    assert myFunction(1) == "1"
def test_2():
    assert myFunction(2) == "2"
def test_3():
    assert myFunction(3) == "Pepsi"
def test_4():
    assert myFunction(5) == "Coke"
def test_5():
    assert myFunction(12) == "Pepsi"
def test_6():
    assert myFunction(20) == "Coke"
def test_7():
    assert myFunction(15) == "PepsiCoke"