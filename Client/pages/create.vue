<template>
  <div>
    <v-text-field
      class="mt-15"
      v-model="post.title"
      label="Post Başlığı"
      required
      color="error"
    ></v-text-field>
    <v-text-field
      v-model="post.content"
      label="Post İçeriği"
      required
      color="error"
    ></v-text-field>
    <v-text-field
      v-model="post.creator"
      label="Post Yazarı"
      required
      color="error"
    ></v-text-field>
    <v-btn large class="success" @click="addPost">Post Oluştur</v-btn>
    <v-btn large class="error" @click="clearInputs">Temizle</v-btn>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      post: {
        title: "",
        content: "",
        creator: "",
      },
    };
  },
  methods: {
    addPost() {
      axios
        .post("http://localhost:9000/posts", this.post)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      this.post.title = "";
      this.post.content = "";
      this.post.creator = "";
    },
    clearInputs() {
      this.post.title = "";
      this.post.content = "";
      this.post.creator = "";
    },
  },
};
</script>

<style></style>
