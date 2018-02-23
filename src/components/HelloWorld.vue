<template>
  <div class="hello">
    <p>
      <a href="">Github front-end</a> |
      <a href="https://github.com/latovicalmin/nodejs-websockets" target="_blank">Github back-end</a>
    </p>
    <h1>{{ msg }}</h1>
    <span @click="connect" style="color: green; cursor: pointer">Connect websockets</span> |
    <span @click="disconnect" style="color: red; cursor: pointer">Disconnect websockets</span> |
    <span @click="send" style="color: blue; cursor: pointer">Send</span>
    <h1>Received events:</h1>
    <ul>
      <li v-for="(notification, index) in notififications" :key="index">
        {{ notification }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Vue.js websockets basic example'
    }
  },
  computed: {
    notififications () {
      return this.$store.getters['notifications/getNotifications']
    }
  },
  methods: {
    connect () {
      this.$webSocketsConnect()
    },
    disconnect () {
      this.$webSocketsDisconnect()
    },
    send () {
      let d = new Date() + ' hello'
      this.$webSocketsSend(d)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
