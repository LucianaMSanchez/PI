const errorHandler = (err, req, res, next) => {
    return res
      .status(200)
      .json({ msg: "Ha ocurrido un error:", error: err });
  };
  
  module.exports = { errorHandler };
  