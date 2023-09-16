const authRouter = require('./authRouter');
const userRouter = require('./userRouter');
const categoryRouter = require('./categoryRouter');
const productRouter = require('./ProductRouter');

function route(app) {
  app.use('/auth', authRouter);
  app.use('/user', userRouter);
  app.use('/users', userRouter);
  app.use('/category', categoryRouter);
  app.use('/product', productRouter);
}

module.exports = route;
