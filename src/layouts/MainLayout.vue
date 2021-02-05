<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>

        <q-toolbar-title>
         <span class="text-weight-bold">Data</span>save
        </q-toolbar-title>

        <q-btn @click="logout">logout</q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          DATASAVE
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
       <q-footer bordered class="bg-white footer-toolbar text-primary">
        <q-tabs no-caps active-color="primary" indicator-color="transparent" class="text-grey" v-model="tab">
         <router-link tag="li" to='/staffs'><q-tab name="staff" icon="perm_identity" /></router-link> 
         <router-link tag="li" to='/students'><q-tab name="students" icon="accessibility" /></router-link> 
           <router-link tag="li" to='/dashboard'><q-tab name="dashboard" icon="dashboard" /></router-link> 
          <router-link tag="li" to='/dashboard'><q-tab name="chat" icon="chat" /></router-link> 
          <router-link tag="li" to='/dashboard'><q-tab name="settings" icon="circle_notifications"  /></router-link> 
          <router-link tag="li" to='/dashboard'><q-tab name="settings" icon="settings"  /></router-link> 
        </q-tabs>
      </q-footer>
    </q-page-container>
    
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
  {
    title: 'Dashboard',
    icon: 'dashboard',
    link: '/dashboard'
  },
  {
    title: 'Staff',
    icon: 'perm_identity',
    link: '/staffs'
  },
  {
    title: 'Students',
    icon: 'accessibility',
    link: '/students'
  },
  {
    title: 'Forum',
    icon: 'chat',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Notifications',
    icon: 'circle_notifications',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Settings',
    icon: 'settings',
    link: 'https://facebook.quasar.dev'
  },
];
import {mapGetters} from 'vuex'
import firebase from '../boot/config'
export default {
  computed:{
      ...mapGetters({isLoggedIn:'auth/isLoggedIn', currentUser:'auth/currentUser'})
  },
  name: 'MainLayout',
  components: { EssentialLink },
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData,
      tab: 'dashboard'
    }
  },
  methods:{
      logout(){
        this.$store.dispatch('auth/logOut').then(() => {
          this.$router.push('/')
        })
      }
  },
  created(){
    if(!this.isLoggedIn){
      this.$router.push('/')
    }
  }
}
</script>
