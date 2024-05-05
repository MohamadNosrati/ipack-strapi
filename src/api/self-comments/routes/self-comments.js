module.exports = {
  routes: [
    {
     method: 'GET',
     path: '/self-comments',
     handler: 'self-comments.exampleAction',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
