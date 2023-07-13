class todoList: 
    def __init__(self):
        self.list = []
    
    def addList(self, item):
        self.list.append(item)
        return self.list
    
    def addMult(self, items):
        self.list.extend(items)
        return self.list
    
    def removedFirst(self):
        self.list.pop(0)
        return self.list
    
    def removedLast(self):
        self.list.pop()
        return self.list
    
    def specific(self, item):
        index = self.list.index(item)
        if index:
            self.list.pop(index)
        return self.list
