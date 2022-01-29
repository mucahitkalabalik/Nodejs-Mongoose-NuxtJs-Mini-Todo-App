<template>
 
      <v-data-table
        :headers="headers"
        :items="item"
      >
           <template v-slot:item.action="{ item }">
        <v-dialog
      v-model="dialog"
      width="700"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="yellow darken-2 ma-1"
          dark
          v-bind="attrs"
          v-on="on"
          small
        >
          Updated
        </v-btn>
         <v-btn
          color="red darken-2 ma-1"
          dark
          small
          @click="deleteItem(item._id)"
        >
          Deleted
        </v-btn>
      </template>

      <v-card>
        <v-row class="pa-15">
          <v-col > 
          
            <v-text-field  label="Title" v-model="item.title"></v-text-field>
            <v-text-field label="Content"  v-model="item.content"></v-text-field>
            <v-text-field label="Creator"  v-model="item.creator"></v-text-field>

          </v-col>
          <v-col class="d-flex align-center justify-center flex-column">
            <v-btn class="mb-5 success" @click="updatedPost(item._id,item)" >Save</v-btn>
            <v-btn class="error" @click="dialog = false">Cancel</v-btn>
          </v-col>
        </v-row>
     
      </v-card>
    </v-dialog>
    
    </template>
      </v-data-table>
   
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      item: [],
      headers: [
        { text: "title", value: "title" },
        { text: "content", value: "content" },
        { text: "creator", value: "creator" },
        { text: "Created Date", value: "created_at" },
        {text:"actions",value:"action"}
      ],
      dialog:false
    };
  },
  async fetch() {
   await this.getPost()
  },
  methods:{

    async getPost(){
        this.item = await fetch("http://localhost:9000/posts").then((res) =>
         res.json()
    );
    }

    ,
    updatedPost(id,item){
      axios
        .put("http://localhost:9000/posts/" + id, item)
        .then(function (response) {
          console.log(id);
        
        })
        .catch(function (error) {
          console.log(id);
        });
          this.getPost()
      this.dialog = false;
    },
    deleteItem(id){
       axios
        .delete("http://localhost:9000/posts/" + id)
        .then(function (response) {
          console.log(response);
           
          
        })
        .catch(function (error) {
          console.log(error);
        });
        this.getPost()
         this.dialog = false;
    },
    }
};
</script>

<style></style>
