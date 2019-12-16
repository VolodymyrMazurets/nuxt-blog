<template>
  <div class="page-wrapp">
    <el-breadcrumb separator="/" class="mb">
      <el-breadcrumb-item to="/admin/list">Posts</el-breadcrumb-item>
      <el-breadcrumb-item>{{post.title}}</el-breadcrumb-item>
    </el-breadcrumb>

    <el-form :model="controls" :rules="rules" ref="form_post" @submit.native.prevent="onSubmit">
      <!-- <h2>Log in to admin page</h2> -->
      <el-form-item label="Tex in format .md or .html" prop="text">
        <el-input v-model.trim="controls.text" type="textarea" resize="none" :rows="10" />
      </el-form-item>
      <div class="mb">
        <small class="mr">
          <i class="el-icon-time"></i>
          <span>{{ new Date(post.date).toLocaleString() }}</span>
        </small>
        <small>
          <i class="el-icon-view"></i>
          <span>{{ post.views }}</span>
        </small>
      </div>
      <el-form-item>
        <el-button type="primary" round native-type="submit" :loading="loading">Refresh</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  layout: "admin",
  middleware: ["admin-auth"],
  head() {
    return { title: `Post | ${this.post.title}` };
  },
  validate({params}) {
    return Boolean(params.id)
  },
  async asyncData({ store, params }) {
    const post = await store.dispatch("post/fetchAdminById", params.id);
    return { post };
  },
  data() {
    return {
      loading: false,
      controls: {
        text: ""
      },
      rules: {
        text: [
          {
            required: true,
            message: "Text must be",
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
            text: this.controls.text,
            id: this.post._id
          }
          try {
            await this.$store.dispatch('post/update', formData)
            this.$message.success('Post was updated')
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
<style lang="scss">
.page-wrapp {
  width: 600px;
  .mr {
    margin-right: 2rem;
  }
}
</style>