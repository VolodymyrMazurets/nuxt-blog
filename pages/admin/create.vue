<template>
  <el-form
    :model="controls"
    :rules="rules"
    ref="form_post"
    @submit.native.prevent="onSubmit"
  >
    <h1 class="mb">Create a new post</h1>
    <el-form-item label="Enter title of the post" prop="title">
      <el-input v-model.trim="controls.title" />
    </el-form-item>
    <el-form-item label="Tex in format .md or .html" prop="text">
      <el-input
        v-model.trim="controls.text"
        type="textarea"
        resize="none"
        :rows="10"
      />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" round native-type="submit" :loading="loading"
        >Create post</el-button
      >
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  layout: "admin",
  middleware: ["admin-auth"],
  data() {
    return {
      loading: false,
      controls: {
        title: "",
        text: ""
      },
      rules: {
        text: [
          {
            required: true,
            message: "Text must be",
            trigger: "blur"
          }
        ],
        title: [
          {
            required: true,
            message: "Title is required",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    onSubmit() {
      this.$refs.form_post.validate(async valid => {
        if (valid) {
          this.loading = true;
          const formData = {
            title: this.controls.title,
            text: this.controls.text
          }
          try {
            await this.$store.dispatch('post/create', formData)
            this.controls.text = '';
            this.controls.title = '';
            this.$message.success('Post was created successfuly');
            this.loading = false;
          } catch(e) {
            this.loading = false;
          }
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
  form {
    width: 600px;
  }
</style>
