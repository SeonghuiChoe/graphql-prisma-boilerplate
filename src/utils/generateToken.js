import jwt from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET;
const EXPIRES_IN = '7 days';

const generateToken = (userId) => {
  return jwt.sign({ userId }, SECRET, { expiresIn: EXPIRES_IN });
};

export { generateToken as default };