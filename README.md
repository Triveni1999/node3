# node3
Middlewares are a general functions which takes three parameters request object , response object
and next() function.
After every middleware next function is executed.
If we give app.use(middleware) whole app will use that middleware globally.
