const fs = require('fs');

const handleAllErrors = (error) => {   
    const errorMsg = `${new Date().toDateString()} - ${error.stack}}`;
    fs.appendFileSync('Answer-9,10/error.log', errorMsg, (err) => {
        if (err) {
            console.error('Error writing to log file:', err)
        }
        console.log('Error log has been written to file');
    }) 
    if (error instanceof ValidationError) {
        console.error('Validation Error:', error.message);
        throw new CustomError('Validation Error occurred', 400);

    } else if (error instanceof RuntimeError) {
        console.error('Runtime Error:', error.message);
    } else if (error instanceof CustomError) {
        console.error('Custom Error:', error.message);
    } else {
        console.error('Unknown Error:', error.message);
        throw new Error('An unexpected error occurred');
    }
}
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ValidationError';
    }
}
 
class RuntimeError extends Error {
    constructor(message) {
        super(message);
        this.name = 'RuntimeError';
    }
}

class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = 'CustomError';
    }
}

try {
    throw new ValidationError('TESTING');
  } catch (error) {    
      handleAllErrors(error);
  };

