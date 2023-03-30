// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".


var longestCommonPrefix = function(strs) {
 
  let empty=""
  if(strs.length>0){
      empty =strs[0]
      for(let i=1;i<strs.length;i++){
          for(let j=0;j<empty.length;j++){
              if(strs[i][j]!=empty[j]){
                  empty=empty.slice(0,j)
                  break
              }
          }
      }
  }
    return empty
};