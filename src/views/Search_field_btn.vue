<template>
<v-row>
  <v-col cols="12" class="d-flex">
  <v-text-field
        v-model="search"
        prepend-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
     
              <v-btn
                color="#1AAA8D"
                class="white--text pa-5"
                elevation="2"
               
                rounded
                ><v-icon left>mdi-magnify</v-icon>Search</v-btn
              >
           
            </v-col>
            </v-row>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>

</style>