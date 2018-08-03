var LinkedList = function() {
  var list = {};
  list.counter = 0;
  list.head = null;
  list.tail = null;
  

  list.addToTail = function(value) {
   var node = Node(value);
      if (!list.head) {
        list.head = node; 
        list.tail = node; 
      } else {
        list.tail.next = node;
        list.tail = node ;
      }
  };

  list.removeHead = function() {
      var firstNode = list.head
      list.head = firstNode.next
      return firstNode.value
  };

  list.contains = function(target) {
    var currNode = list.head
    while (currNode) {
      if (currNode.value === target) {
        return true;
      } 
      currNode = currNode.next
    } 
      return false
  };

  return list;  

};

var Node = function(value) {
  var node = {};
  node.value = value;
  node.counter = this.counter;
  node.next = null;
  this.counter++;
  
  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
