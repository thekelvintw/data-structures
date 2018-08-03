var Tree = function( value) {
  var newTree = {};

  newTree.value = value;
  newTree.children = [];

  _.extend(newTree, treeMethods);
  
  // newTree.addChild();
console.log(newTree)
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};


treeMethods.contains = function(target) {

};




/*
 * Complexity: What is the time complexity of the above functions?
 */
