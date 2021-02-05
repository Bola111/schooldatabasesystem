<template>
  <div>
      <br>
      
      <q-page-sticky style="z-index:1" position="bottom-right" :offset="[18, 18]">
            <q-fab
              icon="add"
              direction="up"
              color="primary"
              @click="newstaff = !newstaff"
            >
            </q-fab>
          </q-page-sticky>
        <div class="q-gutter-y-md column"  style="max-width: 300px; margin: 1em; margin-top: 0">
      <q-input color="primary" v-model="search" label="Search Staff">
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>
      </q-input>
        </div>
      <div class="row">
          
    <staff v-for="(staff,i) in filteredstaff" :key='i' :staff='staff' /></div>
    
    <q-dialog v-model="newstaff">
      <q-card>
        <q-card-section>
          <div class="text-h6"><q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar><span class="text-weight-bold">Data</span>save</div>
        </q-card-section>

        <q-separator />

        <q-card-section style="max-height: 50vh" class="scroll">
             <div>
              <q-btn class="inpt" :loading="loading" @click="click1"
                ><i class="fa fa-upload" />Upload Staff Image</q-btn
              >
              <input
                type="file"
                ref="input1"

                style="display: none"
                @change="previewImage"
                accept="image/*"
              />
            </div>
            <div v-if="imageData != ''">
            <img class="inpt" height="268" width="356" :src="img1" />
          </div>
             <q-select outlined class="inpt" :options="prefix" v-model="text" label="Prefix" />
            <div class="row">
         <q-input outlined class="inpt" v-model="text" label="Firstname" /><q-input outlined class="inpt" v-model="text" label="Lastname" /></div>
         <q-input outlined class="inpt" v-model="text" label="Salary" >
              <template v-slot:prepend>
          <q-icon name="credit_card" />
        </template>
         </q-input>    
         <q-select outlined class="inpt" :options="role" v-model="text" label="Type" />
         <q-input outlined class="inpt" v-model="text" label="Phone Number" >
              <template v-slot:prepend>
          <q-icon name="phone" />
        </template>
         </q-input>  
         <q-input outlined class="inpt" v-model="text" label="Email" >
              <template v-slot:prepend>
          <q-icon @click="date" name="mail" />
        </template>
         </q-input>
         <q-input outlined class="inpt" v-model="date" label="Birthday" >
              <template v-slot:append>
          <q-icon @click="datee = !datee" name="event" />
        </template>
         </q-input>  
         <q-date
      v-model="date"
      today-btn
      v-if="datee"
    />
        </q-card-section>

        <q-separator />

        <q-card-actions align="right">
          <q-btn flat label="Decline" color="primary" v-close-popup />
          <q-btn flat label="Accept" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
    
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import firebase from '../boot/config'
import staff from './individualstaff'
export default {
    components:{
        staff
    },
    computed:{
        ...mapGetters({isLoggedIn:'auth/isLoggedIn', currentUser:'auth/currentUser'}),
        filteredstaff: function(){
            return this.staffs.filter((staff) => {
                return staff.name.match(this.search)
            })
        }
    },
    data(){
        return{
            staffs:[],
            newstaff: false,
            text: '',
            prefix: ['Mr', 'Miss', 'Mrs'],
            role:['Administrator Staff', 'Teaching Staff', 'Non-Teaching Staff'],
            date: '',
            datee: false,
            tab: 'staff',
            imageData: "",
            img1: "",
            loading: false,
            search: '',
            
        }
    },
    created() {
        firebase.database.collection('staff').where('email', '==', this.currentUser.email).onSnapshot((querySnapshot) => {
            this.staffs = []
                querySnapshot.forEach((doc) => {
                    let data = {
                        name: doc.data().name,
                        role: doc.data().role,
                        type: doc.data().type,
                        sex: doc.data().sex,
                        image: doc.data().image
                    }
                    this.staffs.push(data)
                })
            })
    },
    methods:{
        previewImage(event) {
      this.uploadValue = 0;
      this.img1 = null;
      this.imageData = event.target.files[0];
      this.onUpload();
    },
    onUpload() {
      this.img1 = null;
      const storageRef = firebase.storage
        .ref(`${this.imageData.name}`)
        .put(this.imageData);
      storageRef.on(
        `state_changed`,
        (snapshot) => {
          this.loading = true;
          this.uploadValue =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        (error) => {
          console.log(error.message);
        },
        () => {
          this.uploadValue = 100;
          storageRef.snapshot.ref.getDownloadURL().then((url) => {
            this.img1 = url;
            this.loading = false;
          });
        }
      );
    },
    click1() {
      this.$refs.input1.click();
    },
    }
}
</script>

<style>
.inpt{
    margin: 1em
}
</style>