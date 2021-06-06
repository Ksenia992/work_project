

export default function auth ({ next, store }){
   
    if(!store.state.isLogged){
        return next({
            name: 'login'
        })
    }
    return next()
   }