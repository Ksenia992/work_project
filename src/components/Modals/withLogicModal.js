import Vue from 'vue'
import newAdmin from '@/components/Modals/newAdmin.vue'


const withLogicModal = (component) => {
    return Vue.component('withLogicModals', {
      render(createElement) {
        return createElement(component)
      },
      props:[''],
      data:() => ({
        
      }),
      methods: {
        showModal() {
          this.isOpen = !this.isOpen;
        },
        close() {
          this.$emit("close");
          this.open = false;
        
        }
    },
 
  })
}

  const newAdminWithLogicModal = withLogicModal(newAdmin)


  export default withLogicModal