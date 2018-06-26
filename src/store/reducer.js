/**
 * État initial pour le state de l'application
 */
const initialState = {
  settings: {
    active: false,
  },
  messages: [
    {
      username: 'jd',
      content: 'Ça va ?',
      own: true,
    },
    {
      username: 'Yo',
      content: 'Oui et toi ?',
      own: false,
    },
    {
      username: 'jd',
      content: 'Il fait chaud :D',
      own: true,
    },
  ],
};

/**
 * Reducer de l'application
 */
const reducer = (currentState = initialState, action = {}) => {
  switch (action.type) {
    case 'TOGGLE_SETTINGS':
      return {
        ...currentState,
        settings: {
          ...currentState.settings,
          active: !currentState.settings.active,
        },
      };
    default: return currentState;
  }
};

export default reducer;
