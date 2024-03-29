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

const newItem = {
  title: 'Test',
  author: 'Test',
  publicationYear: 'Test'
};

const res = input.library.concat(newItem);

console.log('Result : ', res );

