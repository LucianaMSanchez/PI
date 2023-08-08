import axios from "axios";
import { CREATE_USER_SUCCESS, CREATE_USER_FAILURE, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOGIN_PENDING, LOG_OUT, CREATE_POKEMON_SUCCESS, CREATE_POKEMON_FAILURE} from "./action.types";
import { GET_POKEMONS_SUCCESS, GET_POKEMONS_FAILURE, GET_POKEMON_ID_SUCCESS, GET_POKEMON_ID_FAILURE, GET_POKEMON_NAME_SUCCESS, GET_POKEMON_NAME_FAILURE, CREATE_OWN_POKEMON_SUCCESS, CREATE_OWN_POKEMON_FAILURE } from "./action.types";
import { GET_OWN_POKEMONS_SUCCESS, GET_OWN_POKEMONS_FAILURE, GET_OWN_POKEMON_ID_SUCCESS, GET_OWN_PPOKEMON_ID_FAILURE, GET_OWN_PPOKEMON_NAME_SUCCESS, GET_OWN_PPOKEMON_NAME_FAILURE } from "./action.types";
import { GET_TYPES_SUCCESS, GET_TYPES_FAILURE, GET_TYPE_NAME_SUCCESS, GET_TYPE_NAME_FAILURE, ADD_TYPE_TO_POK_SUCCESS, ADD_TYPE_TO_POK_FAILURE, ADD_POK_TO_TYPE_SUCCESS, ADD_POK_TO_TYPE_FAILURE } from "./action.types";
import { ADD_POKEDEX_SUCCESS, ADD_POKEDEX_FAILURE, REMOVE_POKEDEX_SUCCESS, REMOVE_POKEDEX_FAILURE, GET_POKEDEX_SUCCESS, GET_POKEDEX_FAILURE, CREATE_TYPE_SUCCESS, CREATE_TYPE_FAILURE } from "./action.types";
import { FILTER_TYPE_SUCCESS, FILTER_TYPE_FAILURE, ORDER_AZ_SUCCESS, ORDER_AZ_FAILURE, ORDER_HP_SUCCESS, ORDER_HP_FAILURE, ORDER_ATT_SUCCESS, ORDER_ATT_FAILURE } from "./action.types";
import { ORDER_DEF_SUCCESS, ORDER_DEF_FAILURE, ORDER_SPEED_SUCCESS, ORDER_SPEED_FAILURE, FILTER_ORIGIN_SUCCESS, FILTER_ORIGIN_FAILURE, CLEAR_SEARCH_POKEMONS } from "./action.types";
import { CLOSE_CARD_SUCCESS, CLOSE_CARD_FAILURE, CLEAR_POKEMONS, CLEAR_OWN_POKEMONS, CLEAR_TYPES, CLEAR_FILTERS, CLEAR_FILTERS_POKEDEX } from "./action.types";


export const createUser = (userData) => {
  const {name, email, password } = userData;
  const endpoint = "http://localhost:3001/users/create";
  return async (dispatch) => {
    try {
       const {data} = await axios.post(endpoint, {name, email, password})
       return dispatch({
        type: CREATE_USER_SUCCESS,
        payload: data,
      });
    } catch (error) {
      return dispatch({
        type: CREATE_USER_FAILURE,
        error: error.message,
      });
    }
  };
};

export const login = (userData) => {
  const { email, password } = userData;
  const endpoint = "http://localhost:3001/users/login";
  return async (dispatch) => {
    try {
      const { data } = await axios.post(endpoint, { email, password });
      return dispatch({
        type: LOG_IN_SUCCESS,
        payload: data,
      });
    } catch (error) {
      return dispatch({
        type: LOG_IN_FAILURE,
        error: error.message,
      });
    }
  };
};

export const loginPending = () => {
  return {type:LOGIN_PENDING}
};

export const logout = () => {
      return {type: LOG_OUT}
};

export const getPokemons = () => {
  const endpoint = "http://localhost:3001/pokemons";
  return async (dispatch) => {
   try {
      const {data} = await axios(endpoint)
      return dispatch({
         type: GET_POKEMONS_SUCCESS,
         payload: data,
       });
     } catch (error) {
       return dispatch({
         type: GET_POKEMONS_FAILURE,
         error: error.message,
       });
     }
   };
 };

 export const getPokemonId = (id) => {
  const endpoint = "http://localhost:3001/pokemons/" + id;
  return async (dispatch) => {
   try {
      const {data} = await axios(endpoint)
      return dispatch({
         type: GET_POKEMON_ID_SUCCESS,
         payload: data,
       });
     } catch (error) {
       return dispatch({
         type: GET_POKEMON_ID_FAILURE,
         error: error.message,
       });
     }
   };
 };

 export const getPokemonName = (name) => {
  const endpoint = "http://localhost:3001/pokemons/search?name=" + name;
  return async (dispatch) => {
   try {
      const {data} = await axios(endpoint)
      return dispatch({
         type: GET_POKEMON_NAME_SUCCESS,
         payload: data,
       });
     } catch (error) {
       return dispatch({
         type: GET_POKEMON_NAME_FAILURE,
         error: error.message,
       });
     }
   };
 };

 export const createPokemon = (id) => {
  const endpoint = "http://localhost:3001/pokemons/detail/" + id;
  return async (dispatch) => {
    try {
       const {data} = await axios(endpoint)
       return dispatch({
          type: CREATE_POKEMON_SUCCESS,
          payload: data,
        });
      } catch (error) {
        return dispatch({
          type: CREATE_POKEMON_FAILURE,
          error: error.message,
        });
      }
 };
};

 export const createOwnPokemon = (pokemonData) => {
  const {id, name, image, hitPoints, attack, defense, speed, height, weight, typesNames} = pokemonData;
  const endpoint = "http://localhost:3001/ownPokemons";
  return async (dispatch) => {
   try {
      const {data} = await axios.post(endpoint, {id, name, image, hitPoints, attack, defense, speed, height, weight, typesNames})
      return dispatch({
         type: CREATE_OWN_POKEMON_SUCCESS,
         payload: data,
       });
     } catch (error) {
       return dispatch({
         type: CREATE_OWN_POKEMON_FAILURE,
         error: error.message,
       });
     }
   };
 };

 export const getOwnPokemons = (userId) => {
  const endpoint = "http://localhost:3001/ownPokemons";
  return async (dispatch) => {
   try {
      const {data} = await axios(endpoint, {userId})
      return dispatch({
         type: GET_OWN_POKEMONS_SUCCESS,
         payload: data,
       });
     } catch (error) {
       return dispatch({
         type: GET_OWN_POKEMONS_FAILURE,
         error: error.message,
       });
     }
   };
 };

 export const getOwnPokemonId = (id) => {
  const endpoint = "http://localhost:3001/ownPokemons/" + id;
  return async (dispatch) => {
   try {
      const {data} = await axios(endpoint)
      return dispatch({
         type: GET_OWN_POKEMON_ID_SUCCESS,
         payload: data,
       });
     } catch (error) {
       return dispatch({
         type: GET_OWN_PPOKEMON_ID_FAILURE,
         error: error.message,
       });
     }
   };
 };

 export const getOwnPokemonName = (name) => {
  const endpoint = "http://localhost:3001/ownPokemons/search/" + name;
  return async (dispatch) => {
   try {
      const {data} = await axios(endpoint)
      return dispatch({
         type: GET_OWN_PPOKEMON_NAME_SUCCESS,
         payload: data,
       });
     } catch (error) {
       return dispatch({
         type: GET_OWN_PPOKEMON_NAME_FAILURE,
         error: error.message,
       });
     }
   };
 };

 export const getTypes = () => {
  const endpoint = "http://localhost:3001/types/";
  return async (dispatch) => {
   try {
      const {data} = await axios(endpoint)
      return dispatch({
         type: GET_TYPES_SUCCESS,
         payload: data,
       });
     } catch (error) {
       return dispatch({
         type: GET_TYPES_FAILURE,
         error: error.message,
       });
     }
   };
 };

 export const getTypeName = (name) => {
  const endpoint = "http://localhost:3001/types/search/" + name;
  return async (dispatch) => {
   try {
      const {data} = await axios(endpoint)
      return dispatch({
         type: GET_TYPE_NAME_SUCCESS,
         payload: data,
       });
     } catch (error) {
       return dispatch({
         type: GET_TYPE_NAME_FAILURE,
         error: error.message,
       });
     }
   };
 };

 export const createType = (name) => {
  const endpoint = "http://localhost:3001/types/detail";
  return async (dispatch) => {
    try {
       const {data} = await axios.post(endpoint, { name })
       return dispatch({
          type: CREATE_TYPE_SUCCESS,
          payload: data,
        });
      } catch (error) {
        return dispatch({
          type: CREATE_TYPE_FAILURE,
          error: error.message,
        });
      }
 };
};

 export const addTypeToPok = (id) => {
  const endpoint = "http://localhost:3001/types/addTypes";
  return async (dispatch) => {
   try {
      const {data} = await axios.post(endpoint, {id})
      return dispatch({
        type: ADD_TYPE_TO_POK_SUCCESS,
        payload: data,
      });
    } catch (error) {
      return dispatch({
        type: ADD_TYPE_TO_POK_FAILURE,
        error: error.message,
      });
    }
  };
};

export const addPokToType = (name) => {
  const endpoint = "http://localhost:3001/types/addPokemons";
  return async (dispatch) => {
   try {
      const {data} = await axios.post(endpoint, {name})
      return dispatch({
        type: ADD_POK_TO_TYPE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      return dispatch({
        type: ADD_POK_TO_TYPE_FAILURE,
        error: error.message,
      });
    }
  };
};

export const addPokedex = (id, userId) => {
    const endpoint = "http://localhost:3001/users/pokedex";
    return async (dispatch) => {
      try {
         const {data} = await axios.post(endpoint, { id, userId })
         return dispatch({
            type: ADD_POKEDEX_SUCCESS,
            payload: data,
          });
        } catch (error) {
          return dispatch({
            type: ADD_POKEDEX_FAILURE,
            error: error.message,
          });
        }
   };
};

export const removePokedex = (id, userId) => {
  const endpoint = "http://localhost:3001/users/pokedex";
  return async (dispatch) => {
    try {
       const {data} = await axios.delete(endpoint, { data: { id, userId }})
       return dispatch({
          type: REMOVE_POKEDEX_SUCCESS,
          payload: data,
        });
      } catch (error) {
        return dispatch({
          type: REMOVE_POKEDEX_FAILURE,
          error: error.message,
        });
      }
 };
};

export const getPokedex = (userId) => {
  const endpoint = "http://localhost:3001/users/pokedex";
  return async (dispatch) => {
    try {
       const {data} = await axios(endpoint, { userId })
       return dispatch({
          type: GET_POKEDEX_SUCCESS,
          payload: data,
        });
      } catch (error) {
        return dispatch({
          type: GET_POKEDEX_FAILURE,
          error: error.message,
        });
      }
 };
};

export const filterType = (type, allPokemons) => {
   const endpoint = "http://localhost:3001/filter/type";
   return async (dispatch) => {
     try {
        const {data} = await axios.post(endpoint, { type, allPokemons })
        return dispatch({
         type: FILTER_TYPE_SUCCESS,
         payload: data,
       });
     } catch (error) {
       return dispatch({
         type: FILTER_TYPE_FAILURE,
         error: error.message,
       });
     }
   };
};

export const orderAz = (order, pokemons) => {
  const endpoint = "http://localhost:3001/filter/Az";
  return async (dispatch) => {
    try {
       const {data} = await axios.post(endpoint, { order, pokemons })
       return dispatch({
        type: ORDER_AZ_SUCCESS,
        payload: data,
      });
    } catch (error) {
      return dispatch({
        type: ORDER_AZ_FAILURE,
        error: error.message,
      });
    }
  };
};

export const orderHp = (order, pokemons) => {
  const endpoint = "http://localhost:3001/filter/hitPoints";
  return async (dispatch) => {
    try {
       const {data} = await axios.post(endpoint, { order, pokemons })
       return dispatch({
        type: ORDER_HP_SUCCESS,
        payload: data,
      });
    } catch (error) {
      return dispatch({
        type: ORDER_HP_FAILURE,
        error: error.message,
      });
    }
  };
};

export const orderAttack = (order, pokemons) => {
  const endpoint = "http://localhost:3001/filter/attack";
  return async (dispatch) => {
    try {
       const {data} = await axios.post(endpoint, { order, pokemons })
       return dispatch({
        type: ORDER_ATT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      return dispatch({
        type: ORDER_ATT_FAILURE,
        error: error.message,
      });
    }
  };
};

export const orderDefense = (order, pokemons) => {
  const endpoint = "http://localhost:3001/filter/defense";
  return async (dispatch) => {
    try {
       const {data} = await axios.post(endpoint, { order, pokemons })
       return dispatch({
        type: ORDER_DEF_SUCCESS,
        payload: data,
      });
    } catch (error) {
      return dispatch({
        type: ORDER_DEF_FAILURE,
        error: error.message,
      });
    }
  };
};

export const orderSpeed = (order, pokemons) => {
  const endpoint = "http://localhost:3001/filter/speed";
  return async (dispatch) => {
    try {
       const {data} = await axios.post(endpoint, { order, pokemons })
       return dispatch({
        type: ORDER_SPEED_SUCCESS,
        payload: data,
      });
    } catch (error) {
      return dispatch({
        type: ORDER_SPEED_FAILURE,
        error: error.message,
      });
    }
  };
};

export const filterOrigin = (origin, allPokemons) => {
  const endpoint = "http://localhost:3001/filter/origin";
  return async (dispatch) => {
    try {
       const {data} = await axios.post(endpoint, { origin, allPokemons })
       return dispatch({
        type: FILTER_ORIGIN_SUCCESS,
        payload: data,
      });
    } catch (error) {
      return dispatch({
        type: FILTER_ORIGIN_FAILURE,
        error: error.message,
      });
    }
  };
};

export const closeCard = (id, pokemons) => {
  const endpoint = "http://localhost:3001/closeCard";
  return async (dispatch) => {
    try {
       const {data} = await axios.post(endpoint, { id , pokemons})
       return dispatch({
        type: CLOSE_CARD_SUCCESS,
        payload: data,
      });
    } catch (error) {
      return dispatch({
        type: CLOSE_CARD_FAILURE,
        error: error.message,
      });
    }
  };
};


export const clearPokemons = () => ({
   type: CLEAR_POKEMONS,
 });

export const clearOwnPokemons = () => ({
  type: CLEAR_OWN_POKEMONS,
});

export const clearSearchPokemons = () => ({
  type: CLEAR_SEARCH_POKEMONS,
});

export const clearTypes = () => {
    return {type:CLEAR_TYPES}
};

export const clearFilters = () => {
  return {type:CLEAR_FILTERS}
};

export const clearFiltersPokedex = () => {
  return {type:CLEAR_FILTERS_POKEDEX}
};


