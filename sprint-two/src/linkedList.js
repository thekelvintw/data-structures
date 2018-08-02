var LinkedList = function() {
  var list = {};
  list.counter = 0;
  list.head = null;
  list.tail = null;
  

  list.addToTail = function(value) {
   // var node = Node(value);
   var node = Node(value);
      if (!list.head) {
        list.head = node 
        list.tail = node 
      } else {
        list.tail.next = node;
        list.tail = node ;
      }
  };

  list.removeHead = function() {

  };

  list.contains = function(target) {
  };

  return list;  

};

var Node = function(value) {
  var node = {};
  node.value = value;
  node.next = null;//maybe need to change to link to next node
  this.counter++;
  
  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
