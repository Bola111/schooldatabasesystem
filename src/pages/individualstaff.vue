<template>
  <div>
      <div class="row heads">
           <q-card class="my-card" flat bordered>
      <q-card-section horizontal>
        <q-card-section class="q-pt-xs">
          <div class="text-overline">{{staff.role}}</div>
          <div class="text-h5 q-mt-sm q-mb-xs">{{staff.name}}</div>
          <div class="text-caption text-grey">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </q-card-section>

        <q-card-section class="col-5 flex flex-center">
          <q-img
            class="rounded-borders"
            :src="staff.image"
          />
        </q-card-section>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat>
          {{staff.type}}
        </q-btn>
        <q-btn flat color="primary">
         <a v-if='staff.role != "Proprietor"'>staff details</a> 
        </q-btn>
      </q-card-actions>
    </q-card>
      </div>
  </div>
</template>
<script>

export default {
    props: ['staff']
}
</script>

