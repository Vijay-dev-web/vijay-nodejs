const fs = require('fs');

function storeDataToFile(data, output) {
  const writeStream = fs.createWriteStream(output);
  data.forEach(chunk => {
      const chunkString = JSON.stringify(chunk);
      writeStream.write(chunkString + '\n');
  });
  writeStream.end();
  writeStream.on('finish', () => {
    console.log('Data has been stored in', output);
  });
  writeStream.on('error', (err) => {
    console.error('Error writing to file:', err);
  });
}
 
const data = [{
  "title": "Harry Potter and the Sorcerer&#39;s Stone",
  "author": "J.K. Rowling",
  "publicationYear": 1997
},
{
  "title": "The Hobbit",
  "author": "J.R.R. Tolkien",
  "publicationYear": 1937
},{
  "title": "Harry Potter and the Sorcerer&#39;s Stone",
  "author": "J.K. Rowling",
  "publicationYear": 1997
},
{
  "title": "The Hobbit",
  "author": "J.R.R. Tolkien",
  "publicationYear": 1937
},{
  "title": "Harry Potter and the Sorcerer&#39;s Stone",
  "author": "J.K. Rowling",
  "publicationYear": 1997
},
{
  "title": "The Hobbit",
  "author": "J.R.R. Tolkien",
  "publicationYear": 1937
},{
  "title": "Harry Potter and the Sorcerer&#39;s Stone",
  "author": "J.K. Rowling",
  "publicationYear": 1997
},
{
  "title": "The Hobbit",
  "author": "J.R.R. Tolkien",
  "publicationYear": 1937
},{
  "title": "Harry Potter and the Sorcerer&#39;s Stone",
  "author": "J.K. Rowling",
  "publicationYear": 1997
},
{
  "title": "The Hobbit",
  "author": "J.R.R. Tolkien",
  "publicationYear": 1937
}]
const output = 'Answer-7/Output.json';
 
storeDataToFile(data, output);
