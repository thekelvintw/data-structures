

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {

  var index = getIndexBelowMaxForKey(k, this._limit);

   
  var innerArr = this._storage.get(index).set(index, []);
  innerArr.push([k, v]);
  
  

  

  
  
// console.log(Array.isArray(this._storage) )
  
//   var bucket = this._storage.get(index);
// if (!bucket) {
// var tuples = bucket.set(index, []);
// tuples.push([k, v]);


// } else { 
//     for (var i = 0; i < bucket.length; i++) {
//       if (bucket[i][0] === k) {
//         bucket[i][1] === v;
//       } else {
//         bucket.push([k, v]);
//       }
//     }
   
 // }      

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


