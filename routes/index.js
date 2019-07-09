const routerConfig = (app) => {
  app.use('/', require('./empty'));
  app.use('/signUp', require('./signup'));
  app.use('/signIn', require('./signin'));
  app.use('/signOut', require('./signout'));
  app.use('/posts', require('./posts'));
  app.use('/comments', require('./comments'));
};

module.exports = routerConfig;


