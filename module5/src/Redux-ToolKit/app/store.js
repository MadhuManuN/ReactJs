const configreStore=require('@reduxjs/toolkit').configureStore
const cakeReducer=require('../feature/cake/cakeSlice')

const store=configreStore({
    reducer:{
        cake:cakeReducer
    }
})

module.exports=store