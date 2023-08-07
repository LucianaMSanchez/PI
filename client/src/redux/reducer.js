import { CREATE_USER_SUCCESS, CREATE_USER_FAILURE, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOGIN_PENDING, LOG_OUT, CREATE_POKEMON_SUCCESS, CREATE_POKEMON_FAILURE} from "./action.types";
import { GET_POKEMONS_SUCCESS, GET_POKEMONS_FAILURE, GET_POKEMON_ID_SUCCESS, GET_POKEMON_ID_FAILURE, GET_POKEMON_NAME_SUCCESS, GET_POKEMON_NAME_FAILURE, CREATE_OWN_POKEMON_SUCCESS, CREATE_OWN_POKEMON_FAILURE } from "./action.types";
import { GET_OWN_POKEMONS_SUCCESS, GET_OWN_POKEMONS_FAILURE, GET_OWN_POKEMON_ID_SUCCESS, GET_OWN_PPOKEMON_ID_FAILURE, GET_OWN_PPOKEMON_NAME_SUCCESS, GET_OWN_PPOKEMON_NAME_FAILURE } from "./action.types";
import { GET_TYPES_SUCCESS, GET_TYPES_FAILURE, GET_TYPE_NAME_SUCCESS, GET_TYPE_NAME_FAILURE, ADD_TYPE_TO_POK_SUCCESS, ADD_TYPE_TO_POK_FAILURE, ADD_POK_TO_TYPE_SUCCESS, ADD_POK_TO_TYPE_FAILURE } from "./action.types";
import { ADD_POKEDEX_SUCCESS, ADD_POKEDEX_FAILURE, REMOVE_POKEDEX_SUCCESS, REMOVE_POKEDEX_FAILURE, GET_POKEDEX_SUCCESS, GET_POKEDEX_FAILURE, CREATE_TYPE_SUCCESS, CREATE_TYPE_FAILURE } from "./action.types";
import { FILTER_TYPE_SUCCESS, FILTER_TYPE_FAILURE, ORDER_AZ_SUCCESS, ORDER_AZ_FAILURE, ORDER_HP_SUCCESS, ORDER_HP_FAILURE, ORDER_ATT_SUCCESS, ORDER_ATT_FAILURE } from "./action.types";
import { ORDER_DEF_SUCCESS, ORDER_DEF_FAILURE, ORDER_SPEED_SUCCESS, ORDER_SPEED_FAILURE, FILTER_ORIGIN_SUCCESS, FILTER_ORIGIN_FAILURE, CLEAR_SEARCH_POKEMONS } from "./action.types";
import { CLOSE_CARD_SUCCESS, CLOSE_CARD_FAILURE, CLEAR_POKEMONS, CLEAR_OWN_POKEMONS, CLEAR_TYPES, CLEAR_FILTERS, CLEAR_FILTERS_POKEDEX } from "./action.types";

const initialState = {
    pokemons: [],
    allPokemons: [],
    pokedex: [],
    allPokedex: [],
    newPokemons: [],
    types: [],
    created: null,
    user: null,
    access: false,
    error: null,
};

const rootReducer = (state= initialState, action) => {
    switch (action.type) {
        case CREATE_USER_SUCCESS:
            return {
                ...state,
                error: null,
                }; 
        case CREATE_USER_FAILURE:
            return {
                ...state,
                error: action.error
                };
        case LOG_IN_SUCCESS:
            return {
                ...state,
                user: action.payload,
                access: true,
                error: null,
                };
        case LOG_IN_FAILURE:
            return {
                ...state,
                error: action.error
                };  
        case LOGIN_PENDING:
            return {
                ...state,
                access: "pending",
                };          
        case LOG_OUT:
                return {
                ...state,
                user: null,
                access : false
                };   
        case GET_POKEMONS_SUCCESS: 
            return {
                ...state, 
                error: null,
                pokemons: [...state.pokemons, ...action.payload],
                allPokemons: [...state.allPokemons, ...action.payload]
                };
        case GET_POKEMONS_FAILURE: 
            return {
                ...state, 
                error: action.error
                };
        case GET_OWN_POKEMONS_SUCCESS: 
            return {
                ...state, 
                error: null,
                pokemons: [...state.pokemons, ...action.payload],
                allPokemons: [...state.allPokemons, ...action.payload]
                };
        case GET_OWN_POKEMONS_FAILURE: 
            return {
                ...state, 
                error: action.error
                };
        case GET_POKEMON_ID_SUCCESS: 
            return {
                ...state, 
                error: null,
                pokemons: [...state.pokemons, action.payload],
                };
        case GET_POKEMON_ID_FAILURE: 
            return {
                ...state, 
                error: action.error
                };
        case GET_POKEMON_NAME_SUCCESS: 
            return {
                ...state, 
                error: null,
                pokemons: [...state.pokemons, action.payload],
                };
        case GET_POKEMON_NAME_FAILURE: 
            return {
                ...state, 
                error: action.error
                };
        case GET_OWN_POKEMON_ID_SUCCESS: 
            return {
                ...state, 
                error: null,
                pokemons: [...state.pokemons, action.payload],
                };
        case GET_OWN_PPOKEMON_ID_FAILURE: 
            return {
                ...state, 
                error: action.error
                };
        case GET_OWN_PPOKEMON_NAME_SUCCESS: 
            return {
                ...state, 
                error: null,
                pokemons: [...state.pokemons, action.payload],
                };
        case GET_OWN_PPOKEMON_NAME_FAILURE: 
            return {
                ...state, 
                error: action.error
                };
        case CREATE_OWN_POKEMON_SUCCESS: 
            return {
                ...state, 
                newPokemons: [...state.newPokemons, action.payload],
                };
        case CREATE_OWN_POKEMON_FAILURE: 
            return {
                ...state, 
                error: action.error
                };
        case CREATE_POKEMON_SUCCESS: 
            return {
                ...state, 
                created: action.payload
                };
        case CREATE_POKEMON_FAILURE: 
            return {
                ...state, 
                error: action.error
                };
        case CREATE_TYPE_SUCCESS: 
            return {
                ...state, 
                created: action.payload
                };
        case CREATE_TYPE_FAILURE: 
            return {
                ...state, 
                error: action.error
                };
        case FILTER_TYPE_SUCCESS:
            return {
                ...state, 
                error: null,
                pokemons: action.payload
                };
        case FILTER_TYPE_FAILURE:
            return {
                ...state, 
                error: action.error
                };
        case FILTER_ORIGIN_SUCCESS:
            return {
                ...state, 
                error: null,
                pokemons: action.payload
                };
        case FILTER_ORIGIN_FAILURE:
            return {
                ...state, 
                error: action.error
                };
        case ORDER_AZ_SUCCESS:
            return {
                ...state, 
                error: null,
                pokemons: action.payload
                };
        case ORDER_AZ_FAILURE:
            return {
                ...state, 
                error: action.error
                };
        case ORDER_HP_SUCCESS:
            return {
                ...state,
                error: null,
                pokemons: action.payload
                };
        case ORDER_HP_FAILURE:
            return {
                ...state,
                error: action.error
                };
        case ORDER_DEF_SUCCESS:
            return {
                ...state, 
                error: null,
                pokemons: action.payload
                };
        case ORDER_DEF_FAILURE:
            return {
                ...state, 
                error: action.error
                };
        case ORDER_SPEED_SUCCESS:
            return {
                ...state,
                error: null,
                pokemons: action.payload
                };
        case ORDER_SPEED_FAILURE:
            return {
                ...state,
                error: action.error
                };
        case ORDER_ATT_SUCCESS:
            return {
                ...state,
                error: null,
                pokemons: action.payload
                };
        case ORDER_ATT_FAILURE:
            return {
                ...state,
                error: action.error
                };
        case GET_TYPES_SUCCESS: 
            return {
                ...state, 
                error: null,
                types: action.payload,
                };
        case GET_TYPES_FAILURE: 
            return {
                ...state, 
                error: action.error
                };
        case GET_TYPE_NAME_SUCCESS: 
            return {
                ...state, 
                error: null,
                types: action.payload,
                };
        case GET_TYPE_NAME_FAILURE: 
            return {
                ...state, 
                error: action.error
                };
        case ADD_TYPE_TO_POK_SUCCESS:
            return {
                ...state,
                types: action.payload
                }; 
        case ADD_TYPE_TO_POK_FAILURE: 
            return {
                ...state, 
                error: action.error
                };
        case ADD_POK_TO_TYPE_SUCCESS:
            return {
                ...state,
                pokemons: action.payload
                }; 
        case ADD_POK_TO_TYPE_FAILURE: 
            return {
                ...state, 
                error: action.error
                };     
        case ADD_POKEDEX_SUCCESS: 
            return {
                ...state, 
                error: null,
                pokedex:  action.payload,
                allPokedex: action.payload
                };
        case ADD_POKEDEX_FAILURE: 
            return {
                ...state, 
                error: action.error
                };
        case REMOVE_POKEDEX_SUCCESS:
            return {
                ...state, 
                error: null,
                pokedex: action.payload,
                allPokedex: action.payload
                };
        case REMOVE_POKEDEX_FAILURE:
            return {
                ...state, 
                error: action.error
                };
        case GET_POKEDEX_SUCCESS:
            return {
                ...state,
                error: null,
                pokedex: action.payload,
                allPokedex: action.payload,
                };
        case GET_POKEDEX_FAILURE:
            return {
                ...state,
                };
        case CLEAR_FILTERS:
            return {
                ...state,
                pokemons: state.allPokemons
                };
        case CLEAR_FILTERS_POKEDEX:
            return {
                ...state,
                pokedex: state.allPokedex
                };
        case CLOSE_CARD_SUCCESS:
            return {
                ...state,
                pokemons: action.payload
                }; 
        case CLOSE_CARD_FAILURE:
            return {
                ...state,
                error: action.error
                }; 
        case CLEAR_POKEMONS:
                return {
                ...state,
                pokemons: []
                }; 
        case CLEAR_OWN_POKEMONS:
                return {
                ...state,
                pokemons: []
                }; 
        case CLEAR_SEARCH_POKEMONS:
                return {
                ...state,
                searchPokemons: []
                }; 
        case CLEAR_TYPES:
                return {
                ...state,
                types: []
                };  
        default:
            return {...state};
    }
};

export default rootReducer;