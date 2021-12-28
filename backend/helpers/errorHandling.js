function errorHandling(error, req, res, next) {
  // console.log(error, 'asdasdsa')

  if (error.name === "ValidationError") {
    const errors = Object.values(error.errors).map((val) => val.message);
    return res.status(403).json({ status: "error", errors, message: 'Bad request' });
  }
  if (error.name === "Error") {
    return res.status(403).json({ status: "error", errors: error.message, message: 'Bad request' });
  }

  if (error.name === "MongoServerError") {
    return res.status(403).json({ status: "error", errors: [capitalizeFirstLetter(Object.keys(error.keyValue) + " " + 'is already exist')], message: 'Bad request' });
  }

  res.status(403).json({ status: "error", errors: error.stack, message: 'Bad request' });
}

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

module.exports = errorHandling

