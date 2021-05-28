import store from '@/store/modules/auth.store';
export default function guest ({ next, store }){
    if(store.state.user.isLogged){
        return next({
            name: 'Main',
        })
    }
   
    return next()
   }


  



