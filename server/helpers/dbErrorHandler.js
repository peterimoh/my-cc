'use strict';

//get unique error field name
const uniqueMessage = (err) => {
  let output;

  try {
    let fieldName = err.message.substring(
      err.message.lastIndexOf('.$') + 2,
      err.message.lastIndexOf('_1')
    );
    output =
      fieldName.charAt(0).toUpperCase() + fieldName.slice(1) + 'already exists';
  } catch (err) {
    output = 'Unique field already Exists';
  }
};

// error handler for db
exports.errorHandler = (err) => {
  let message = '';
  if (err.code) {
    switch (err.code) {
      case 11000:
      case 11001:
        message = uniqueMessage(err);
        break;
      default:
        message: 'Something went wrong, try again later';
    }
  } else {
    for (let errName in err.errorors) {
      if (error.errorors[errorName].message)
        message = error.errorors[errorName].message;
    }
  }
  return message;
};
