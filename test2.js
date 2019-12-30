const posts = [
  {
    title: "post 1",
    body: "This is post 1"
  },
  {
    title: "post 2",
    body: "This is post 2"
  }
];

function getPosts(indices) {
  setTimeout(() => {
    let output = "";
    // console.log("\n");
    // console.log("posts:  ");
    // console.log(posts);
    posts.forEach((post, index) => {
      //   console.log("/nindex:  ",index);
      //   console.log("post:  ");
      //   console.log(post);
      //   if (indices.includes(index + 1)) {
      //     console.log("if true, concatenate");
      output += post.title;
      //     console.log("Output:  ", output);
      //   } else {
      //     console.log("if false...");
      //     output += "skip";
      //     console.log("output:  ", output);
    });
    console.log(output);
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false;
      // const error = true;

      if (!error) {
        resolve();
      } else {
        reject("Error");
      }
    }, 2000);
  });
}

createPost({ title: "Post 3", body: "This is post 3" })
//   .then(getPosts([1, 3]))
  .then(getPosts)
  .catch(err => console.log(err));
