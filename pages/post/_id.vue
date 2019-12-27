<template>
  <article class="post">
    <header class="post__header">
      <div class="post__title">
        <h1>{{ post.title }}</h1>
        <nuxt-link to="/">
          <i class="el-icon-back"></i>
        </nuxt-link>
      </div>
      <div class="post__info">
        <small>
          {{ new Date(post.date).toLocaleString() }}
          <i class="el-icon-time"></i>
        </small>
        <small>
          <i class="el-icon-view"></i>
          {{ post.views }}
        </small>
      </div>
      <div class="post__img">
        <img :src="`${post.imageUrl}`" alt="picture" />
      </div>
    </header>
    <main class="post__main">
      <vue-markdown>{{ post.text }}</vue-markdown>
    </main>
    <footer>
      <app-comment-form
        @created="createCommentHandler"
        v-if="canAddComment"
        :postId="post._id"
      />
      <div class="post__comments" v-if="post.comments.length">
        <app-comment
          v-for="comment in post.comments"
          :key="comment._id"
          :comment="comment"
        />
      </div>
      <div class="text-center" v-else>No comments</div>
    </footer>
  </article>
</template>
<script>
import AppComment from "@/components/main/Comment";
import AppCommentForm from "@/components/main/CommentForm";
export default {
  validate({ params }) {
    return Boolean(params.id);
  },
  head() {
    return { title: `${this.post.title} | ${process.env.appName}` };
  },
  async asyncData({ store, params }) {
    const post = await store.dispatch("post/fetchById", params.id);
    await store.dispatch("post/addView", post);
    return {
      post: { ...post, views: ++post.views }
    };
  },
  data() {
    return {
      canAddComment: true
    };
  },
  components: {
    AppComment,
    AppCommentForm
  },
  methods: {
    createCommentHandler(comment) {
      this.post.comments.unshift(comment);
      this.canAddComment = false;
    }
  }
};
</script>
<style lang="scss">
.post {
  max-width: 600px;
  margin: 0 auto;
  &__title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }
  &__info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
  }
  &__img img {
    width: 100%;
    height: auto;
  }
  &__header {
    margin-bottom: 1.5rem;
  }
  &__main {
    margin-bottom: 2rem;
  }
}
</style>
