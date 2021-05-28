

export default function auth ({ next, store }){
   
    if(!store.state.user.isLogged){
        return next({
            name: 'login'
        })
    }
    return next()
   }