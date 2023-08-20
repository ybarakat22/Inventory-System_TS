import express = require('express')

export const validateInput = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction) => {
  
  const name = req.body.name;
 
  if (!name) {
    return res.status(400).json({ message: "Invalid input" });
  }
  next();
};