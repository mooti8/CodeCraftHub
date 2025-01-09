exports.sendResponse = (res, statusCode, message, data = null) => {
       res.status(statusCode).json({
           success: statusCode < 400,
           message,
           data,
       });
   };