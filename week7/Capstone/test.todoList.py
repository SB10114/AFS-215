import pytest


@pytest.fixture 
def test_addList():
    x = todoList()
    assert x.addList(23) == [23]

