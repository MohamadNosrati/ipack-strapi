module.exports = {
  routes: [
    {
     method: 'POST',
     path: '/sardar-ipack',
     handler: 'sardar-ipack.exampleAction',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
