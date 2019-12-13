<template>
  <div class="error-layout">
    <div class="error-layout__content">
      <h1 class="error-layout__title">Error 404</h1>
      <nuxt-link to='/'><el-button type="primary">Go back home page</el-button></nuxt-link>
    </div>
  </div>
</template>
<style lang="scss">
.error-layout {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 4rem;
  }
  &__title {
    color: rgba(255, 0, 0, 0.4);
    margin-bottom: 1rem;
  }
}
</style>