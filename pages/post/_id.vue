<template>
  <article class="post">
    <header class="post__header">
      <div class="post__title">
        <h1>Post title</h1>
        <nuxt-link to="/">
          <i class="el-icon-back"></i>
        </nuxt-link>
      </div>
      <div class="post__info">
        <small>
          {{ new Date().toLocaleString() }}
          <i class="el-icon-time"></i>
        </small>
        <small>
          <i class="el-icon-view"></i>
          42
        </small>
      </div>
      <div class="post__img">
        <img src="https://i.pravatar.cc/1000" alt="picture" />
      </div>
    </header>
    <main class="post__main">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem quisquam deserunt saepe perferendis. Magni natus illum cupiditate rem perferendis iure corporis sequi consectetur sint rerum, quia explicabo sapiente autem possimus, impedit enim vitae quibusdam? Incidunt perferendis deserunt voluptatibus beatae nemo!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio soluta iure, nulla mollitia eos autem quos dolorem necessitatibus quisquam eaque corporis, excepturi est, quia cumque perferendis? Dolore quidem tempora aliquam nihil facere sit molestias esse autem saepe, doloremque, numquam perferendis.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores perferendis molestiae tempora, delectus corrupti officiis maxime magnam repellat totam quos hic minus consequuntur porro numquam velit temporibus. Nihil voluptatibus quo ipsa eius quasi, obcaecati commodi totam aspernatur impedit esse ducimus.</p>
    </main>
    <footer>
      <app-comment-form @created="createCommentHandler" v-if="canAddComment"/>
      <div class="post__comments" v-if="true">
        <app-comment v-for="comment in 4" :key="comment" :comment="comment" />
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
    createCommentHandler() {
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