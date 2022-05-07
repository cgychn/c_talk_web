<template>
  <div class="chat-message-container">
    <div class="chat-message-container-header">
      <a-input placeholder="消息内容搜索" style="width: 130px;">
        <a-icon slot="prefix" type="search" />
      </a-input>
      <a-range-picker style="width: 225px;" />
      <a-select mode="tags" style="width: 230px;" :maxTagCount="1" placeholder="请选择消息类型">
        <a-select-option value="0" :key="0">
          文本
        </a-select-option>
        <a-select-option value="1" :key="1">
          链接
        </a-select-option>
        <a-select-option value="2" :key="2">
          视频
        </a-select-option>
        <a-select-option value="3" :key="3">
          图片
        </a-select-option>
        <a-select-option value="4" :key="4">
          文件
        </a-select-option>
      </a-select>
    </div>

    <div class="chat-message-container-body">
      <div class="chat-message-msg-item-send">
        <div class="msg">
          <div class="msg-avator">
            <div style="width: 38px; height: 38px; background: red; border-radius: 5px;"></div>
          </div>
          <div class="msg-detail">
            <div class="msg-detail-contact">cgy</div>
            <div style="width: 100%;">
              <div class="msg-detail-content">
                <span>send test text</span>
                <span class="arrow"></span>
              </div>
              <br style="clear: both;" />
            </div>
            <div class="msg-detail-time">
              2022-10-11 20:20:00
            </div>
          </div>
        </div>
        <br style="clear: both;" />
      </div>
      <div class="chat-message-msg-item-receive">
        <div class="msg">
          <div class="msg-avator">
            <div style="width: 38px; height: 38px; background: red; border-radius: 5px;"></div>
          </div>
          <div class="msg-detail">
            <div class="msg-detail-contact">cgy</div>
            <div style="width: 100%;">
              <div class="msg-detail-content">
                <span>receive test text</span>
                <span class="arrow"></span>
              </div>
              <br style="clear: both;" />
            </div>
            <div class="msg-detail-time">
              2022-10-11 20:20:00
            </div>
          </div>
        </div>
        <br style="clear: both;" />
      </div>
    </div>

    <div class="chat-message-container-bottom">
      <a-input placeholder="请在此处输入消息内容..." style="margin-right: 20px;">
        <a-icon slot="prefix" type="edit" />
      </a-input>
      <a-icon type="file-image" class="op-icon" />
      <a-icon type="video-camera" class="op-icon" />
      <a-icon type="file" class="op-icon" style="margin-right: 20px;" />
      <a-button type="primary" shape="circle" style="transform: rotate(45deg); font-size: 18px;">
        <a-icon type="rocket" />
      </a-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatMessage",
  data () {
    return {

    }
  }
}
</script>

<style lang="scss">

.chat-message-container {
  background: #444444;
  width: 650px;
  height: 100%;


  .op-icon {
    font-size: 20px;
    margin-right: 10px;
    cursor: pointer;
    transition: .5s all ease;
  }
  .op-icon:hover {
    color: #ee7878;
  }
  .chat-message-container-header {
    background: #383838;
    width: 100%;
    height: 65px;
    display: flex;
    align-items: center;
    padding-right: 10px;
    padding-left: 10px;
    justify-content: space-around;
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
    box-shadow: inset 0px 0px 3px 3px #343434;
    border-radius: 2px;
    background: #383838;
  }

  .chat-message-container-body {
    width: 100%;
    height: calc(100% - 65px - 55px);
    overflow: auto;
  }
  .chat-message-container-bottom {
    width: 100%;
    height: 55px;
    background: #343434;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-right: 20px;
    padding-left: 20px;
  }

  .chat-message-msg-item-send {
    width: 100%;
    padding: 15px;
    .msg {
      max-width: 70%;
      float: right;
      align-items: center;
      flex-wrap: nowrap;
    }
    .msg-avator {
      height: 50px;
      width: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      float: right;
      margin-top: 20px;
    }
    .msg-detail {
      width: calc(100% - 50px - 10px);
      float: left;
      margin-right: 10px;
      text-align: end;
    }
    .msg-detail-content {
      background: #90e570;
      border-radius: 5px;
      font-size: 18px;
      position: relative;
      color: #212121;
      padding: 3px 10px;
      word-break: break-all;
      margin-top: 7px;
      text-align: start;
      float: right;
    }
    .arrow {
      border: 5px solid transparent;
      border-left: 6px solid #90e570;
      display: inline-block;
      height: 0;
      right: -10px;
      position: absolute;
      top: 5px;
      width: 0;
    }
    .msg-detail-contact {
      color: #ffffff;
      font-family: -apple-system;
      width: 100%;
      text-align: end;
      padding-right: 3px;
    }
    .msg-detail-time {
      width: 100%;
      text-align: end;
      color: #c4c4c4;
      padding: 5px 3px 3px;
    }
  }
  .chat-message-msg-item-receive {
    width: 100%;
    padding: 15px;
    .msg {
      max-width: 70%;
      float: left;
      align-items: center;
      flex-wrap: nowrap;
    }
    .msg-avator {
      height: 50px;
      width: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      float: left;
      margin-top: 20px;
    }
    .msg-detail {
      max-width: calc(100% - 50px - 10px);
      float: right;
      margin-left: 10px;
    }
    .msg-detail-content {
      background: #313131;
      border-radius: 5px;
      font-size: 18px;
      position: relative;
      color: #dedede;
      padding: 3px 10px;
      word-break: break-all;
      text-align: start;
      margin-top: 7px;
      float: left;
    }
    .arrow {
      border: 5px solid transparent;
      border-right: 6px solid #313131;
      display: inline-block;
      height: 0;
      left: -10px;
      position: absolute;
      top: 5px;
      width: 0;
    }
    .msg-detail-contact {
      color: white;
      font-family: -apple-system;
      width: 100%;
      text-align: start;
      padding-left: 3px;
    }
    .msg-detail-time {
      width: 100%;
      text-align: start;
      color: #c4c4c4;
      padding: 5px 3px 5px 5px;
    }
  }
}
</style>
