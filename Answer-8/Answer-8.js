const cluster = require('cluster');
const os = require('os');
const fs = require('fs');
if (cluster.isMaster) {
  const totalCpuCores = os.cpus().length;
  for (let i = 0; i < totalCpuCores; i++) {
    cluster.fork();
  }
  cluster.on('exit', (worker, code, signal) => {
    console.log(`${worker.process.pid} is not functioanal. Restarting...`);
    cluster.fork();
  });
} else {
  function storeDataToFile(data, filename) {
    const writeStream = fs.createWriteStream(filename);
    data.forEach(chunk => {
      const chunkString = JSON.stringify(chunk);
      writeStream.write(chunkString + '\n');
    });
    writeStream.end();
    writeStream.on('finish', () => {
      console.log(`Data has been stored in ${filename} by worker ${cluster.worker.id}`);
    });
    writeStream.on('error', (err) => {
      console.error('Error writing to file:', err);
    });
  }

  const output = `Answer-8/Output_${cluster.worker.id}.json`;
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
  }];
  storeDataToFile(data, output);
};
