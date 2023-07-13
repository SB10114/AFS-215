import pytest
from lib.todoList import todoList

@pytest.fixture 
def xList():
    x = todoList()
    
    return x

def testAddList(xList):
    # x = todoList()
    assert xList.addList(23) == [23]

def testAddMult(xList):
    # x = todoList()
    assert xList.addMult(["blue", "green", "yellow"]) == ["blue", "green", "yellow"]

def testRemovedFirst(xList):
    # x = todoList()
    xList.addList("rainbow")
    xList.addList("unicorn")
    assert xList.removedFirst() == ["unicorn"]

def testRemovedLast(xList):
    # x = todoList()
    xList.addList("rainbow")
    xList.addList("unicorn")
    assert xList.removedLast() == ["rainbow"]

def testSpecific(xList):
    # x = todoList
    xList.addMult(["blue", "green", "yellow"])
    assert xList.specific("green") == ["blue", "yellow"]