//import { combineReducers, createStore } from "redux";

import { createSlice } from "@reduxjs/toolkit"

const initialCustomerState = {
    fullName: "",
    nationalID: "",
    createdAt: ""
}

const customerSlice = createSlice({
    name: 'customer',
    initialCustomerState,
    reducers: {
        createCustomer: {
            prepare(fullName, nationalID) {
                return { 
                    payload: {
                        fullName,
                        nationalID,
                        createdAt: new Date().toISOString()
                    },
                };
            },
            reducer(state, payload) {
                state.fullName = action.payload.fullName;
                state.nationalID = action.payload.nationalID;
                state.createdAt = action.payload.createdAt;
            },    
        },
        updatedName(state, action) {
            state.fullName = action.payload;
        },
    },
});


export  { customerSlice,  initialCustomerState};

// export default function customerReducer(state = initialCustomerState, action){
//     switch(action.type) {
//        case "customer/createCustomer":
//            return {
//                ...state,
//                fullName: action.payload.fullName,
//                nationalID: action.payload.nationalID,
//                createdAt: action.payload.createdAt,
//            };
//        case "customer/updateName":
//              return {
//                ...state,
//                fullName: action.payload
//            };
       
//        default:
//            return state;         
//     }
// }

// export function createCustomer(fullName, nationalID) {
//     return {
//         type: 'customer/createCustomer', 
//         payload: {fullName, nationalID, createdAt: new Date().toISOString() },
//     };
//  }


// export  function updateName(fullName) {
//     return {
//         type: "account/updateName", 
//         payload: fullName
//     }
//  }

 