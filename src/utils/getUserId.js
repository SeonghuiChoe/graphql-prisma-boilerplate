import jwt from 'jsonwebtoken';

//
// Goal: Pull JWT secret out of code and into env var for dev and production
//
// 1. Reference env vars in Node app
// 2. Add vars to config files and t heroku
// 3. Deploy and test

const getUserId = (request, requireAuth = true) => {
  const header = request.request
    ? request.request.headers.authorization
    : request.connection.context.Authorization;

  if (header) {
    const token = header.replace('Bearer ', '');
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded.userId;
  }

  if (requireAuth) {
    throw new Error('Authentication required');
  }

  return null;
};

export { getUserId as default };
