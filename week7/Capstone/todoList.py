class todoList: 
    def __init__(self):
        self.list = []
    
    def addList(self, item):
        self.list.append(item)

    def addMult(self, items):
        self.list.extend(items)

    def removedFirst(self):
        self.list.remove()

    def removedLast(self):
        self.list.pop(len(self.list -1))

    def specific(self, item):
        index = self.list.index(item)
        if index:
            self.list.pop(index)

