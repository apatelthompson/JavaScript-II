// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/*

  //Given this problem:

  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation
  firstItem(items, function(first) {
    console.log(first)
  });

*/


function getLength(items, cb) {
  // getLength passes the length of the array into the callback.
  cb(items.length);
}
 getLength(items, (length) => {
   console.log(length);
 });


function last(items, cb) {
  // last passes the last item of the array into the callback.
  cb(items[items.length-1]);
}
  last(items, (lastThing) =>{
    console.log(lastThing);
  }
);


function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  cb(x,y);
}

  sumNums(23,4,(x,y) => {
    console.log(x+y);
  });


function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  cb(x,y);
}
// multiplyNums(10,10, showResult)
  multiplyNums(10, 10, (x,y) => {
    console.log(x*y);
  }
)


function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  cb(items.includes(item));
}

  contains('Rosie', items, (showResult) => {
    console.log(showResult);
  });




/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
