const { constant } = require("../constants");
const errorHandle = (err, req, res, next) => {
  const statusCode = req.statusCode ? req.statusCode : 500;

  switch (statusCode) {
    case constant.VALIDATION_ERROR:
      res.json({
        title: "validation error",
        message: err.message,
        stackTrace: err.stack,
      });
      break;

    case constant.UNAUTHORIZED:
      res.json({
        title: "Unauthorized",
        message: err.message,
        stackTrace: err.stack,
      });
      break;

    case constant.FORBIDDEN:
      res.json({
        title: "Forbidden",
        message: err.message,
        stackTrace: err.stack,
      });
      break;

    case constant.NOT_FOUND:
      res.json({
        title: "not found",
        message: err.message,
        stackTrace: err.stack,
      });
      break;

    case constant.SERVER_ERROR:
      res.json({
        title: "server error",
        message: err.message,
        stackTrace: err.stack,
      });
      break;

    default:
      console.log("no Error all good");
      break;
  }
};

module.exports = errorHandle;
