<template>
  <el-card shadow="hover" :body-style="{padding: 0}" class="post">
    <header slot="header" class="post__header">
      <h3>Post title</h3>
      <small>
        {{ new Date().toLocaleString() }}
        <i class="el-icon-time"></i>
      </small>
    </header>
    <div class="post__body">
      <img src="https://i.pravatar.cc/1000" alt="img" class="post__img" />
    </div>
    <footer class="post__footer">
      <el-button round @click="openPost">Open post</el-button>
      <span>
        <i class="el-icon-message"></i>
        12
      </span>
    </footer>
  </el-card>
</template>
<script>
export default {
  data() {
    return {
      post: {
        id: 1
      }
    }
  },
  methods: {
    openPost() {
      this.$router.push(`/post/${this.post.id}`)
    }
  }
};
</script>
<style lang="scss" scoped>
.post {
  margin-bottom: 1.5rem;
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__img {
    width: 100%;
    height: auto;
  }
  &__footer {
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>