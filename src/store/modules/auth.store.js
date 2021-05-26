const state = {
   
  };
  
  const getters = {};
  
  const mutations = {

  };


  
  const actions = {
    async SIGN_IN({ commit, dispatch }, payload) {

 

      axios({
        method: 'post',
        url: 'https://api-shark.herokuapp.com/login',
      
        data: payload,
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
      .then(function(response) {
       
        console.log(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
     
     
        // const response =  await fetch("https://api-shark.herokuapp.com/login", {
        //       method: "POST",
        //       headers: {
        //         "Content-Type": "application/json",
        //       },
        //       body: JSON.stringify(payload),
        //     });
        //     const data = await response.json();
        //     console.log(data);
    },
    async SIGN_UP({ commit, dispatch }, payload) {


      axios({
        method: 'post',
        url: 'https://api-shark.herokuapp.com/signup',
      
        data: payload,
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
      .then(function(response) {
        
        console.log(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
      
     
      // const response =  await fetch("https://api-shark.herokuapp.com/signup", {
      //       method: "POST",
      //       headers: {
      //         "Content-Type": "application/json",
      //       },
      //       body: JSON.stringify(payload),
      //     });
      //     const data = await response.json();
      //     console.log(data);
  },
  };
  
  export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
  };