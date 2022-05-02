<template>
  <div class="chat-message-container">
    <div class="chat-message-container-header">
      <a-input placeholder="消息内容搜索" style="width: 150px;">
        <a-icon slot="prefix" type="search" />
      </a-input>
      <a-range-picker style="width: 200px;" />
      <a-select mode="tags" style="width: 150px;" maxTagCount="1" placeholder="请选择消息类型">
        <a-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">
          {{ (i + 9).toString(36) + i }}
        </a-select-option>
      </a-select>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatMessage"
}
</script>

<style>
.chat-message-container {
  background: #444444;
  width: 600px;
  height: 800px;
}
.chat-message-container-header {
  background: #383838;
  width: 100%;
  height: 65px;
  display: flex;
  align-items: center;
  padding-right: 20px;
  padding-left: 20px;
  justify-content: space-around;
}
.ant-select-selection {
  background: #494949 !important;
  border-color: #404040 !important;
}
.ant-select-selection__choice {
  background: #2d2d2d !important;
  border-color: #404040 !important;

}
.ant-select-selection__choice__content {
  color: white;
}
.anticon {
  color: white;
}
.ant-select-dropdown-content {
  background: #575757;
}
.ant-select-dropdown-menu-item {
  background: #575757;
  color: white;
}
.ant-select-selected-icon {
  display: none !important;
}
.ant-select-dropdown-menu-item-active {
  background: #999999 !important;
}
.ant-select-dropdown-menu-item-selected {
  background: #767676;
}
.ant-select-dropdown-menu-item:hover {
  background: #999999 !important;
}

*::-webkit-scrollbar {
  /*滚动条整体样式*/
  width : 10px;  /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
}
*::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 2px;
  /*box-shadow: 0px 0px 10px 10px rgb(0 0 0 / 20%);*/
  border: 1px solid #555555;
  background-color: #3d6cad;
  background-image: -webkit-linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.2) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.2) 50%,
    rgba(255, 255, 255, 0.2) 75%,
    transparent 75%,
    transparent
  );
}
*::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  box-shadow: inset 0px 0px 3px 3px rgb(0 0 0/20%);
  border-radius: 2px;
  background: #383838;
}
.ant-calendar-panel {
  background: #444444;
  color: white !important;
}
.ant-calendar-body {
  border-top: 1px solid #6d6d6d !important;
}
.ant-calendar-input {
  background: #444444 !important;
}
</style>
