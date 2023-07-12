import pytest


@pytest.fixture 
def testaddList():
    x = todoList()
    assert x.addList(23) == [23]

