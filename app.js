/* 
  With Promises we do not use the same callback functions
  Instead we create a Promise Object,
   which has two name function parameters - like 2 callbacks.

  callback was commented out to see what we have to change.

  The setTimeout function was commented out - 
    we have to put it into the Promise function.

  The getPosts callback parameter was commented out - 
    with Promise we use the .then(getPosts) method to access the resolve
    or catch(callbackFunction) to 'catch' the error aka the reject function
*/

const posts = [
  {title: 'Post One', body: 'This is post one'},
  {title: 'Post Two', body: 'This is post two'}
];

function createPost(post /*, callback */) {
  return new Promise(function(resolve, reject){
    setTimeout(function() {
      posts.push(post);
      resolve();

      const error = false;

      if(!error){
        resolve();
      } else {
        reject('Error: something went wrong')
      }

    }, 2000);
  });
  
  /* setTimeout(function() {
    posts.push(post);
    // callback();
  }, 2000); */
}


function getPosts() {
  setTimeout(function() {
    let output = '';
    posts.forEach(function(post){
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({title: 'Post Three', body: 'This is post three'} /*, getPosts */)
  .then(getPosts)
  .catch(function(err){
    console.log(err);
  });