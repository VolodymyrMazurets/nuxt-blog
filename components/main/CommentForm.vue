<template>
  <el-form
    :model="controls"
    :rules="rules"
    ref="form"
    @submit.native.prevent="onSubmit"
  >
    <h1>Add your comment</h1>
    <el-form-item label="Your name" prop="name">
      <el-input v-model="controls.name" />
    </el-form-item>
    <el-form-item label="Comment text" prop="text">
      <el-input
        v-model="controls.text"
        type="textarea"
        resize="none"
        :rows="2"
      />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" round native-type="submit" :loading="loading"
        >Add comment</el-button
      >
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  props: {
    postId: {
      type: String,
      required: true
    }
  },
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
      this.$refs.form.validate(async valid => {
        if (valid) {
          this.loading = true;
          const formData = {
            name: this.controls.name,
            text: this.controls.text,
            postId: this.postId
          };
          try {
            const newComment = await this.$store.dispatch(
              "comment/create",
              formData
            );
            this.$message({
              showClose: true,
              message: "Comment added.",
              type: "success"
            });
            this.$emit("created", newComment);
          } catch (e) {
            this.loading = false;
          }
        }
      });
    }
  }
};
</script>
<style lang="scss"></style>
