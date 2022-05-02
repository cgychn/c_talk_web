<template>
  <div class="chat-contact-container">
    <div class="chat-contact-header">
      <a-input placeholder="请输入内容搜索">
        <a-icon slot="prefix" type="search" />
      </a-input>
    </div>
    <div class="chat-contact-body">
      <div class="chat-contact-body-group-item">
        <span>联系人</span><a-icon type="caret-down" />
      </div>
      <div class="chat-contact-body-item">
        <div class="chat-contact-body-item-left">
          <div style="width: 38px; height: 38px; background: #ff8d8d; border-radius: 3px;"></div>
        </div>
        <div class="chat-contact-body-item-right">
          <div class="chat-contact-body-item-right-contact-name">
            <div class="text-overflow-ellipsis"><span>终于原味（cgychn）</span></div>
          </div>
          <div class="chat-contact-body-item-right-contact-message">
            <div style="width: 55%; height: 100%; padding-right: 4px;" class="text-overflow-ellipsis">
              <span style="color: #e86969; margin-right: 5px;">[99+条未读]</span> 傻逼qwdqdw
            </div>
            <div style="width: 45%; height: 100%; color: #9c9c9c;">
              2022-15-02 14:48:01
            </div>
          </div>
        </div>
        <div class="unread-flag"></div>
      </div>
      <div class="chat-contact-body-group-item">
        <span>群组</span><a-icon type="caret-down" />
      </div>
      <div class="chat-contact-body-item">
        <div class="chat-contact-body-item-left">
          <div style="width: 38px; height: 38px; background: #ff8d8d; border-radius: 3px;"></div>
        </div>
        <div class="chat-contact-body-item-right">
          <div class="chat-contact-body-item-right-contact-name">
            <div class="text-overflow-ellipsis"><span>傻逼聚集群（sb@group）</span></div>
          </div>
          <div class="chat-contact-body-item-right-contact-message">
            <div style="width: 55%; height: 100%; padding-right: 4px;" class="text-overflow-ellipsis">
              <span style="color: #e86969; margin-right: 5px;">[99+条未读]</span>
              <span style="color: #6fb2ea;">傻逼1号</span>：傻逼qwdqdw
            </div>
            <div style="width: 45%; height: 100%; color: #9c9c9c;">
              2022-15-02 14:48:01
            </div>
          </div>
        </div>
        <div class="unread-flag"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatContact"
}
</script>

<style scoped>
.chat-contact-container {
  width: 350px;
  height: 800px;
}
.chat-contact-header {
  height: 64px;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #262626;
  border-bottom: 1px solid #232323;
}
.chat-contact-body {
  width: 100%;
  height: calc(100% - 65px);
  overflow: auto;
}
.chat-contact-body-group-item {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #d0d0d0;
  background: #2a2a2a;
  padding-left: 20px;
  cursor: pointer;
  padding-right: 20px;
  font-size: 16px;
  border-bottom: 1px solid #262626;
}
.ant-input {
  background: #494949 !important;
  border-color: #404040 !important;
}
.chat-contact-body-item {
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #d0d0d0;
  background: #363636;
  padding-left: 10px;
  cursor: pointer;
  padding-right: 10px;
  position: relative;
  font-size: 16px;
  border-bottom: 1px solid #262626;
}
.chat-contact-body-item-left {
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.chat-contact-body-item-right {
  width: calc(100% - 60px);
  height: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
}
.chat-contact-body-item-right-contact-name {
  width: 100%;
  height: 35px;
  font-size: 16px;
  display: flex;
  align-items: center;
}
.chat-contact-body-item-right-contact-message {
  width: 100%;
  height: 25px;
  font-size: 10px;
  display: flex;
  align-items: center;
}
.text-overflow-ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.unread-flag {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: #ec4d4d;
  position: absolute;
  right: 10px;
  top: 25px;
}
</style>
