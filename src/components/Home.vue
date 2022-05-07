<template>
  <div class="main-container">
    <div class="chat-wrapper">
      <Chat></Chat>
    </div>
  </div>
</template>

<script>
import Chat from "./chat/Chat";
export default {
  name: "Home",
  components: {Chat}
}
</script>

<style lang="scss" scoped>
.main-container {
  width: 100%;
  height: 100%;
  background: #1a1a1a;
  position: relative;
}
.chat-wrapper {
  top: 100px;
  position: absolute;
  left: 10px;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 0px 0px 8px 3px #131313;
  bottom: 100px;
}
</style>
