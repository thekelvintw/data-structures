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
  // var currChildren = this.children
  // if (this.children && this.children[0].value === target){
  //   return true;
  // }
    for (var i=0; i<this.children.length; i++) {
      if(this.children[i].value === target) {
      console.log('checking')
        return true;
      }     
    }
    return false 
  // }
};




/*
 * Complexity: What is the time complexity of the above functions?
 */
