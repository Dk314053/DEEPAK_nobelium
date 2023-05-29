//{ Driver Code Starts
//Initial Template for javascript

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function main() {
  let t = parseInt(readLine());
  let i = 0;
  for (; i < t; i++) {
    let [N, K] = readLine()
      .trim()
      .split(" ")
      .map((x) => parseInt(x));
    let Arr = readLine()
      .trim()
      .split(" ")
      .map((x) => parseInt(x));
    let obj = new Solution();
    let res = obj.maximumSumSubarray(K, Arr, N);
    console.log(res);
  }
}

// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number} k
 * @param {number[]} arr
 * @param {number} N
 * @return {number}
 */
class Solution {
  
  maximumSumSubarray(k,arr,n) {
let currsum=0
   let maxsum = 0;
   
    for (let i = 0; i <k; i++) {
      currsum += arr[i];
        }
        maxsum=currsum;
      for(let i=k;i<n;i++){
        currsum+= arr[i];
        currsum-=arr[i-k]
        maxsum=Math.max(maxsum,currsum)
      }
          return maxsum;
    }
 
     
}