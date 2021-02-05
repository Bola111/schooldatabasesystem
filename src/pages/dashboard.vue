<template>
  <div>
      
      <div class="row heads">
    <q-card flat bordered class="my-card">

      <q-card-section>
        

        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">
            <q-icon name="school" /> {{name}}
            <br>
          </div>
          <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
           
          </div>
        </div>

        <q-rating v-model="stars" readonly :max="5" size="32px" />
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">
          {{type}}
        </div>
        <div class="text-caption text-grey">
          {{currentUser.email}}
        </div>
      </q-card-section>
      
    </q-card>
    <q-card flat bordered class="my-card">

      <q-card-section>
        

        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">
           <q-icon name="perm_identity" /> Students
            <br>
          </div>
          <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
           
          </div>
        </div>

        
      </q-card-section>
        <p style="margin-left: 1em;  font-weight: bolder">{{students.length}} Students</p>
      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">
          {{type}}
        </div>
        <div class="text-caption text-grey">
          {{currentUser.email}}
        </div>
      </q-card-section>
      
    </q-card>
     <q-card flat bordered class="my-card">

      <q-card-section>
        

        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">
           <q-icon name="perm_identity" /> Staff
            <br>
          </div>
          <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
           
          </div>
        </div>

        
      </q-card-section>
        <p style="margin-left: 1em;  font-weight: bolder">{{staff.length}} Staff(s)</p>
      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">
          {{type}}
        </div>
        <div class="text-caption text-grey">
          {{currentUser.email}}
        </div>
      </q-card-section>
      
    </q-card>
    
  </div>
  <q-card flat class="my-cardss" bordered>
  <q-table
      :data="staff"
      row-key="name"
    /></q-card>
    <br>
    <q-card flat class="my-cardss" bordered>
  <q-table
      :data="students"
      row-key="name"
    /></q-card>
    <br>
   
  </div>
</template>

<script>
import firebase from '../boot/config'

import {mapGetters} from 'vuex'
export default {
    methods:{

    },
    computed:{
        ...mapGetters({isLoggedIn:'auth/isLoggedIn', currentUser:'auth/currentUser'})
    },
    data(){
        return{
            data: [
                {
                    name: '1'
                },
                {
                    name: '2'
                },
                {
                    name: '3'
                }
            ],
            tab: 'dashboard',
            stars: 2,
            name: '',
            type: '',
            id: '',
            expanded: false,
            lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            splitterModel: 50,
      selected: 'food',
      staff: [],
      students: []    
        }
    },
    created(){
        firebase.database.collection('schools').where('email', '==', this.currentUser.email).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                    this.id = doc.id;
                    this.name = doc.data().name;
                    this.type =  doc.data().type;
        })
            }).catch(err => {
                console.log(err)
            });
            firebase.database.collection('staff').where('email', '==', this.currentUser.email).get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    let data = {
                        Staff_Name: doc.data().name,
                        role: doc.data().role,
                        type: doc.data().type,
                        sex: doc.data().sex
                    }
                    this.staff.push(data)
                })
            })
            firebase.database.collection('students').where('email', '==', this.currentUser.email).get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    let data = {
                        Student_Name: doc.data().name,
                        School_Role: doc.data().SchoolRole,
                        Class: doc.data().class,
                        gender: doc.data().Gender
                    }
                    this.students.push(data)
                })
            })
    }
}
</script>

<style>

</style>