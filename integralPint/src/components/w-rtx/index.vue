<template>
  <span class="container">{{ message }}</span>
</template>
<script>
export default {
  data() {
    return {
      message: 'index',
    }
  }
}
</script>
<style scoped lang="scss">
.container {
  background: red;
}
</style>
