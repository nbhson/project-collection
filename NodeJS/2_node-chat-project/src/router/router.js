const authRouter = require('./authRouter');
const userRouter = require('./userRouter');
const messageRouter = require('./messageRouter');

function route(app) {
  app.use('/auth', authRouter);
  app.use('/user', userRouter);
  app.use('/users', userRouter);
  app.use('/message', messageRouter);
}

module.exports = route;
