<template>
  <div>
    welcome to admin page
  </div>
</template>
<script>
export default {
  layout: 'admin',
  middleware: ['admin-auth']
}
</script>