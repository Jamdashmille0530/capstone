import jwt from "jsonwebtoken";

export const isAuth = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    res.status(401).json({
      message: "Unauthorized",
    });
  }

  try {
    const token = authorization.split(" ")[1];
    const payload = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
    req.payload = payload;
  } catch (err) {
    if (err.name === "TokenExpiredError") {
      res.status(401).json({
        message: err.name,
      });
    }
    res.status(401).json({
      message: "Unauthorized",
    });
  }

  return next();
};
