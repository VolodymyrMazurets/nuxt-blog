<template>
  <el-card class="comment">
    <div class="comment__header">
      <span>Person name</span>
      <small>
        {{ new Date().toLocaleString() }}
        <i class="el-icon-time"></i>
      </small>
    </div>
    <div class="comment__text">
      Lorem ipsum dolor sit amet.
    </div>
  </el-card>
</template>
<script>
export default {
  props: ['comment']
}
</script>
<style lang="scss">
  .comment {
    margin-bottom: 1rem;
    &__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.5rem;
      font-size: 0.8rem;
    }
    &__text {
      white-space: pre-line;
    }
  }
</style>