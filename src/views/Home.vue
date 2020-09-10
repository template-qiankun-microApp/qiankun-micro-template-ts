<template>
  <div class="home">
    <a-button type="primary" @click="visible = !visible">
      Open Modal
    </a-button>
    <a-modal
      title="Title"
      :visible="visible"
      @ok="visible = false"
      @cancel="visible = false"
    >
      <p>Home</p>
    </a-modal>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data () {
    return {
      visible: false
    }
  }
}
</script>
