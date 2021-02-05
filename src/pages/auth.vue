<template>
  <div>
      <div class="uppercircle"></div>
      <div class="lowercircle"></div>
      <div class="login" v-if="show">
      <q-input outlined label="Email" type="email" v-model="email" color="black" class="logininput">
           <template v-slot:prepend>
          <q-icon name="mail" />
        </template>
      </q-input>
      <a href="" class="forgottenpassword">Forgot Password?</a>
      <q-input outlined label="Password" v-model="password" type="Password" color="black" class="logininput2">
           <template v-slot:prepend>
          <q-icon name="lock" />
        </template>
      </q-input>
      <q-btn class="bttn" @click="login" :disabled='!email || !password' :loading='loading' push label="Login"/></div>
      <div v-if="!show">
      <q-input outlined color="black" type="text" v-model="schoolname" class="logininput4" label='school Name'> <template v-slot:prepend>
          <q-icon name="school" />
        </template></q-input>
      <q-input outlined color="black" type="email" v-model="email" class="logininput5" label="School Email"> <template v-slot:prepend>
          <q-icon name="mail" />
        </template></q-input>
      <q-select :options='options' v-model="schooltype" label="School Type" class="logininput3">
           <template v-slot:prepend>
          <q-icon name="school" />
        </template>
      </q-select>
      <q-input outlined type="password" v-model="password" label="Password" color="black" class="logininput6">
           <template v-slot:prepend>
          <q-icon name="lock" />
        </template>
      </q-input>
      <q-input outlined type="password" v-model="confirmpassword" label="Confirm Password" color="black" class="logininput7">
           <template v-slot:prepend>
          <q-icon name="lock" />
        </template>
      </q-input>
      <q-btn class="bttn2" @click="createUser" :loading='loading' :disabled='!email || !password || !schoolname || !schooltype || !confirmpassword' push label="Create Database"/>
</div>
      {{isLoggedIn}}{{currentUser}}
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import firebase from '../boot/config';
export default {
    computed:{
        ...mapGetters({isLoggedIn:'auth/isLoggedIn', currentUser:'auth/currentUser'})
    },
    data(){
        return{
            options: ['Primary School', 'Primary & Secondary school', 'Secondary School', 'Tertiary Institution'],
            schooltype: '',
            email: '',
            password: '',
            schoolname: '',
            confirmpassword: '',
            show: true,
            loading: false
        }
    },
    methods:{
        login(){
                this.loading = true
                this.$store.dispatch('auth/login',{email: this.email,password: this.password}).then((response) => {
                    alert(response)
                    this.loading = false
                    this.$router.push('/dashboard')
                }).catch((err) => {
                    alert(err)
                    this.loading = false
                })
            },
            createUser(){
                this.loading = true
                if(this.password === this.confirmpassword){
                    this.$store.dispatch('auth/signup',{email: this.email,password: this.password}).then((response) => {
                        firebase.database.collection('schools').add({
                            name: this.schoolname,
                            type: this.schooltype,
                            email: this.email,
                        })
                        alert(response)
                        this.loading = false
                        this.$router.push('/dashboard')
                    }).catch((err) => {
                        alert(err)
                        this.loading = false
                    })
                }else {
                    this.loading = false;
                    alert('Passwords do not match')
                }
            }
    },
    mounted(){
        console.log(this.isLoggedIn)
},
    created(){
        if(this.isLoggedIn){
            this.$router.push('/dashboard')
        }
    }
}
</script>

<style>

</style>