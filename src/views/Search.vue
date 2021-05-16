<template>
  <v-row>
    <v-col>
    <v-app-bar
  
    color="transparent"
    flat
    >
     <!-- <divider />
     <v-divider dark></v-divider> -->

     

      <v-toolbar-title>Search</v-toolbar-title>

      
   
   

    

      <template v-slot:extension>
        <v-tabs class="ml-n15" align-with-title>
          <v-tab>Users</v-tab>
          <v-tab>Groups</v-tab>
          <v-tab>Phone numbers</v-tab>
        </v-tabs>
      </template>
      
    </v-app-bar>

<v-col cols="8">
  <p>Filter:</p>
  <v-col class="d-flex">
    <v-list>
      <v-list-group
        v-for="item in items"
        :key="item.title"
        v-model="item.active"
      
        no-action
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
          v-for="child in item.items"
          :key="child.title"
        >
          <v-list-item-content>
            <v-list-item-title v-text="child.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>
     <Search_field />
     </v-col>
  </v-col>
   
    </v-col>
    </v-row>

</template>

<script>
import Search_field from "./Search_field_btn.vue"
  export default {
    data: () => ({
      items: [
        {
         
          items: [{ title: 'First name' }],
          title: 'User ID',
        },
       
        
      ],
    }),
    components:{Search_field}
  }
</script>

<style lang="scss" scoped>

</style>