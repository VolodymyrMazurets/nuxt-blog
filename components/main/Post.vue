<template>
  <el-card shadow="hover" :body-style="{ padding: 0 }" class="post">
    <header slot="header" class="post__header">
      <h3>{{post.title}}</h3>
      <small>
        {{ post.date | date }}
        <i class="el-icon-time"></i>
      </small>
    </header>
    <div class="post__body">
      <img :src="post.imageUrl" alt="img" class="post__img" />
    </div>
    <footer class="post__footer">
      <el-button round @click="openPost">Open post</el-button>
      <span>
        <i class="el-icon-message"></i>
        {{post.comments.length}}
      </span>
    </footer>
  </el-card>
</template>
<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  methods: {
    openPost() {
      this.$router.push(`/post/${this.post._id}`);
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
