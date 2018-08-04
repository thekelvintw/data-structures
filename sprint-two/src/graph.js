

// Instantiate a new graph
var Graph = function(edge,nodeList) {
this.edge = []; 
this.nodeList = [];


};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  // var newNode = new Graph(node)
  this.nodeList.push(node);

  // return this.nodeList;
  // return this.node;
  

};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {

  for(var i =0; i<this.nodeList.length; i++){
      if(this.nodeList[i] === node){
       return true;
  } else {
    return false;
  }

  }
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  
  for(var i =0; i<this.nodeList.length; i++){
        if(this.nodeList[i] === node){
         this.nodeList[i] = undefined;
    } 
  }  
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
   
 var currentEdge = this.edge
  
    var hasIt = false;  
    // var finder = function(){
     
  
    
      if (currentEdge.length === 0 || currentEdge.length === undefined){

      return false
      } else {
       
      var finder =function(currentEdge){  

       console.log(currentEdge)
          for(var i =0; i<currentEdge.length; i++){ //[3,4]
     
            if (currentEdge[i].includes(fromNode) && currentEdge[i].includes(toNode)) {
              hasIt = true;
                 
            } else {
              // var findIt = finder(currentEdge[i])
              // if(findIt){
              //   hasIt = true
              // } 
            }
          }
        }
      finder(currentEdge)  
    }  
   // } 

// finder(currentEdge)

return hasIt; 
//     if (this.edge.length === 0 || this.edge.length === undefined){
//       return false
//     }
// console.log('this is lin50',this.edge)
//     for(var i =0; i<this.edge.length; i++){ //[3,4]
//       if (this.edge[i].includes(fromNode) && this.edge[i].includes(toNode)) {
//         return true;
//       } else {
//         return false;
//       }
//     } 
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  var relathionOfNodes = [];
  relathionOfNodes.push(fromNode);
  relathionOfNodes.push(toNode);
  this.edge.push(relathionOfNodes);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  
  for(var i = 0; i < this.edge.length; i++){
      // if(this.edge[i] === [fromNode, toNode] || this.edge[i] === [toNode, fromNode]){
      // console.log(this.edge)
       this.edge.splice(0,1)
        
      
    
  }
     
  

    return this.edge;
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  

  for (var i = 0; i < this.nodeList.length; i++) {
    cb(this.nodeList[i])
    
  }   

  // console.log(results)

 
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


