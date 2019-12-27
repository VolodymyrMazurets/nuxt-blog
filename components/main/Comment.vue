<template>
  <el-card class="comment">
    <div class="comment__header">
      <span>{{comment.name}}</span>
      <small>
        {{ comment.date | date }}
        <i class="el-icon-time"></i>
      </small>
    </div>
    <div class="comment__text">
      {{comment.text}}
    </div>
  </el-card>
</template>
<script>
export default {
  props: {
    comment: {
      type: Object,
      required: true
    }
  }
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