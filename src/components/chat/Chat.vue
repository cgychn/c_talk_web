<template>
  <div class="chat-container">
    <ChatContact></ChatContact>
    <ChatMessage></ChatMessage>
  </div>
</template>

<script>
import ChatContact from "./ChatContact";
import ChatMessage from "./ChatMessage";
export default {
  name: "Chat",
  components: {ChatMessage, ChatContact}
}
</script>

<style lang="scss">
* {
  transition: .5s all ease;
}
.chat-container {
  background: #323232;
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
}
.ant-input {
  background: #494949 !important;
  border-color: #404040 !important;
}
</style>
