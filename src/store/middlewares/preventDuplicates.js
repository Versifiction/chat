const preventDuplicates = store => next => (action) => {
  console.log('TODO: nettoyer le middleware');
  next(action);
};

export default preventDuplicates;
