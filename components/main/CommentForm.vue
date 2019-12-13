<template>
  <el-form :model="controls" :rules="rules" ref="form" @submit.native.prevent="onSubmit">
    <h1>Add your comment</h1>
    <el-form-item label="Your name" prop="name">
      <el-input v-model.trim="controls.name" />
    </el-form-item>
    <el-form-item label="Comment text" prop="text">
      <el-input v-model.trim="controls.text" type="textarea" resize="none" :rows="2" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" round native-type="submit" :loading="loading">Add comment</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data() {
    return {
      loading: false,
      controls: {
        name: "",
        text: ""
      },
      rules: {
        name: [
          {
            required: true,
            message: "Required field",
            trigger: "blur"
          }
        ],
        text: [
          {
            required: true,
            message: "Enter your comment",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.loading = true;
          const formData = {
            name: this.controls.name,
            text: this.controls.text,
            postId: ""
          };
          try {
            setTimeout(() => {
              this.$message({
                showClose: true,
                message: "Comment added.",
                type: "success"
              });
              this.$emit("created");
            }, 2000);
          } catch (e) {
            this.loading = false;
          }
        }
      });
    }
  }
};
</script>
<style lang="scss">
</style>