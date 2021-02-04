<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
        </q-toolbar-title>


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
    icon: 'accessibility',
    link: '/staff'
  },
  {
    title: 'Students',
    icon: 'face',
    link: '/students'
  },
  {
    title: 'Forum',
    icon: 'chat',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Settings',
    icon: 'settings',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
];
import {mapGetters} from 'vuex'
export default {
  computed:{
      ...mapGetters({isLoggedIn:'auth/isLoggedIn', currentUser:'auth/currentUser'})
  },
  name: 'MainLayout',
  components: { EssentialLink },
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData
    }
  },
  created(){
    if(!this.isLoggedIn){
      this.$router.push('/')
    }
  }
}
</script>
