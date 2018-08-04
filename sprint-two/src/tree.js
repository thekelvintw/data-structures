var Tree = function( value) {
  var newTree = {};

  newTree.value = value;
  newTree.children = [];

  _.extend(newTree, treeMethods);
  
  // newTree.addChild();
// console.log('target',newTree)
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};


treeMethods.contains = function(target) {
 var finder = function(tree) {
   //check tree.value and see if === target -> return true
   //if not: look at children array. For each child, run finder
    if (tree.children.length === 0) {
        if (tree.value === target) {
          return true;
        } else {
          return false;
        }       
    }

    if (tree.value === target) {
      return true;
    } else {
        for (var i = 0; i < tree.children.length; i++) {
          if (tree.children[i].value === target) { 
            return true;
          } else  {
              var findIt = finder(tree.children[i])
              if (findIt===true) {
                return true
              }
          }        
        }
    }
  return false
  }
  
  //
   // for (var i = 0; i < tree.children.length; i++) {
   //    if(this.children[i].value === target) {
   //    console.log('checking')
   //      return true;
   //    } else {
   //      this.children.contains(target)
   //    }    
   //  }

   return finder(this);
};




/*
 * Complexity: What is the time complexity of the above functions?
 */
