const xml2js = require('xml2js');
const fs = require('fs');
try {
  const xmlContents = fs.readFileSync('Answer-1/Answer-1.xml', 'utf-8');

  if(xmlContents) {
    xml2js.parseString(xmlContents, (err, data) => {
    if(err) {
      console.log(err);
      process.exit(1);
    }
    
    if(data) {
      const keys = ['title', 'author', 'publicationYear'];
      console.log(data);
      const res = keys.reduce((acc, key) => {
        acc[key] = data?.library?.book?.map(book => book[key]).join(', ');
        return acc;
      }, {})
      console.log('Result : ', res);
    }
  })
  }

} catch(err) {
  console.log(err);
}
