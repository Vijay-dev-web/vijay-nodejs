const xml2js = require('xml2js');
const fs = require('fs');
const title = "Test";
try {
  const xmlContents = fs.readFileSync('Answer-1/Answer-1.xml', 'utf-8');

  if(xmlContents) {
    xml2js.parseString(xmlContents, (err, data) => {
    if(err) {
      console.log(err);
      process.exit(1);
    }
    
    if(data) {
      data?.library?.book.forEach(item => {
        item.title = title;
      });
      data.library.book.forEach((item) => {
        if(item !== undefined) {
          console.log(item);
        }
      });
      const builder = new xml2js.Builder();
      const xmlDest = builder.buildObject(data);
      fs.writeFile('Answer-5/Answer-5-Title-Updated.xml', xmlDest,(err) => {
        if(err) {
          process.exit(1);
        }
        console.log(`All titles updated to ${title}`);
      })
    }
  })
  }

} catch(err) {
  console.log(err);
}
