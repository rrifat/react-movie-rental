const array = ['dog', 'cat', 'melon'];
const hasMelon = array.includes('melon');

/**
 * Callback
 */

// function throwAwayPeelings() {
//     console.log('throw away peelings');
// }

// function err() {
//     console.log('woops look like there are no melons');
// }

function chewMelon(hasMelon, throwAwayPeelings, err) {
    hasMelon ? throwAwayPeelings() : err();
}

chewMelon(array.includes('melon'), function() {
    console.log('throw away peelings')
}, function() {
    console.log('woops, look like there are no melons');
});

/**
 * Promise
 */

 const promise = arr => new Promise((resolve, reject) => {
     if(arr.includes('melonn')) {
        resolve({message: "throw away peelings"});
     } else {
         reject({message: "woops! look like there are no melons"});
     }
 });

promise(array)
    .then(res => console.log(res))
    .catch(err => {
        throw new Error(err)
    });

/**
 * Async/Await
 */

 async function fetchPost() {
     const res = await fetch('http://jsonplaceholder.typicode.com/posts/1');
     const post = await res.json()

     console.log(post);
 }

 fetchPost();

 class Bork {
     instanceProp = "bork";
     boundFunction = () => {
         return this.instanceProp;
     }
     static staticProp = "babelIsCool";
     static staticFunc = function() {
         return Bork.staticFunc;
     }
 }

 let myBork = new Bork;

 console.log(myBork);