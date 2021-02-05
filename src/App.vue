<template>
  <div id="q-app">
    <q-pull-to-refresh no-mouse @refresh="refresh">
    <router-view />
    </q-pull-to-refresh>
  </div>
</template>
<script>

export default {
  name: 'App',
  created(){
   
  },
  mounted(){
    
  },
  methods:{
      refresh(){
          location.reload()
      }
  }
}
</script>
