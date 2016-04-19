'use strict';

function wrapper() {
  return function(err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
      let message = 'Your session is invalid';

      res.status(401).json({
        message: message
      });

      next(message);
    } else {
      next();
    }
  };
}

module.exports = wrapper;
