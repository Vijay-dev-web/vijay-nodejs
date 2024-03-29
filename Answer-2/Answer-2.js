// Read and parse below JSON and extract the title, author, and publication year.

const input = {
  "library": [
    {
      "title": "Harry Potter and the Sorcerer&#39;s Stone",
      "author": "J.K. Rowling",
      "publicationYear": 1997
    },
    {
      "title": "The Hobbit",
      "author": "J.R.R. Tolkien",
      "publicationYear": 1937
    }
  ]
};

const keys = ['title', 'author', 'publicationYear'];

const res = keys.reduce((acc, key) => {
  acc[key] = input.library.map(item => item[key]).join(', ');
  return acc;
}, {});

console.log('Result : ', res);


