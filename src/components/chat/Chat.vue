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
.chat-container {
  background: #323232;
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  height: 100%;
  .ant-input {
    background: #494949 !important;
    border-color: #404040 !important;
    color: #e5e5e5 !important;
  }
  .anticon {
    color: white;
  }
}

</style>
