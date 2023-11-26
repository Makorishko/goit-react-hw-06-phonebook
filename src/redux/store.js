import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';


const initialState = {
  contacts: JSON.parse(localStorage.getItem('contacts')) || [],
  filters: '',
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
      case 'contact/adding': {
          return {
              ...state,
              contacts: [...state.contacts, action.payload],
          };
      }
      case 'contact/delete': {
        return {
          ...state,
          contacts:  state.contacts.filter(item => item.id !== action.payload)
        };
      }
      case 'filter/change': {
        return {
            contacts: state.contacts,
            filters: action.payload
        };
      }   
    default:
      return state;
    };
 
    
    
};

const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);
