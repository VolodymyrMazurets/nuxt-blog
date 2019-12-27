<template>
  <el-form
    :model="controls"
    :rules="rules"
    ref="form_post"
    @submit.native.prevent="onSubmit"
  >
    <h1 class="mb">Create a new post</h1>
    <el-form-item label="Enter title of the post" prop="title">
      <el-input v-model="controls.title" />
    </el-form-item>
    <el-form-item label="Tex in format .md or .html" prop="text">
      <el-input
        v-model="controls.text"
        type="textarea"
        resize="none"
        :rows="6"
      />
    </el-form-item>
    <el-button type="success" plain @click="previewDialog = true" class="mb"
      >Preview</el-button
    >
    <el-dialog title="Preview" :visible.sync="previewDialog">
      <div :key="controls.text">
        <vue-markdown>{{ controls.text }}</vue-markdown>
      </div>
    </el-dialog>
    <el-upload
      class="mb"
      drag
      ref="upload"
      action="https://jsonplaceholder.typicode.com/posts/"
      :on-change="handleImageChange"
      :auto-upload="false"
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">
        Drop file here or <em>click to upload</em>
      </div>
      <div class="el-upload__tip" slot="tip">
        jpg/png files
      </div>
    </el-upload>
    <el-form-item>
      <el-button type="primary" round native-type="submit" :loading="loading"
        >Create post</el-button
      >
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  image: null,
  layout: "admin",
  middleware: ["admin-auth"],
  head: {
    title: `Create | ${process.env.appName}`
  },
  data() {
    return {
      previewDialog: false,
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
        if (valid && this.image) {
          this.loading = true;
          const formData = {
            title: this.controls.title,
            text: this.controls.text,
            image: this.image
          };
          try {
            await this.$store.dispatch("post/create", formData);
            this.controls.text = "";
            this.controls.title = "";
            this.image = null;
            this.$refs.upload.clearFiles();
            this.$message.success("Post was created successfuly");
            this.loading = false;
          } catch (e) {
            this.loading = false;
          }
        } else {
          this.$message.warning("Form not valid");
        }
      });
    },
    handleImageChange(file, fileList) {
      this.image = file.raw;
    }
  }
};
</script>
<style lang="scss" scoped>
form {
  width: 600px;
}
</style>
