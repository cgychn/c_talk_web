<template>
  <div class="chat-message-container">
    <div class="chat-message-container-header">
      <a-input placeholder="消息内容搜索" style="width: 130px;">
        <a-icon slot="prefix" type="search" />
      </a-input>
      <a-range-picker style="width: 225px;" />
      <a-select mode="tags" style="width: 160px;" maxTagCount="0" placeholder="请选择消息类型">
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
  </div>
</template>

<script>
export default {
  name: "ChatMessage"
}
</script>

<style lang="scss">
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
.ant-select {
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
  box-shadow: inset 0px 0px 3px 3px #343434;
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
  color: white !important;
}
.ant-calendar-year-select {
  color: #dcdcdc !important;
}
.ant-calendar-month-select {
  color: #c7c7c7 !important;
}
.ant-calendar-range-picker-separator {
  color: #b6b6b6;
}
.ant-calendar-range-middle {
  color: #b6b6b6;
}
.ant-calendar-range-picker-input {
  color: #e5e5e5;
}
.ant-calendar-picker-clear {
  color: #f55656;
  background: transparent !important;
}
.ant-calendar-picker-clear:hover {
  color: #f55656;
  background: transparent !important;
}
.ant-calendar-date {
  color: #d7d7d7;
}
.ant-calendar-last-month-cell {
  .ant-calendar-date {
    color: #999999;
  }
  .ant-calendar-date:hover {
    color: #999999;
  }
}
.ant-calendar-next-month-btn-day {
  .ant-calendar-date {
    color: #999999;
  }
  .ant-calendar-date:hover {
    color: #999999;
  }
}
.ant-calendar-in-range-cell::before {
  background: #7d7d7d !important;
}
.ant-calendar-date:hover {
  background: #616161;
}
.ant-calendar-selected-day {
  .ant-calendar-date {
    background: #979797 !important;
  }
}
.ant-calendar-today {
  .ant-calendar-date {
    border-color: #ffb4b4;
    color: #ffb4b4;
  }
}
.ant-calendar-prev-month-btn::before {
  border-color: white !important;
}
.ant-calendar-prev-year-btn::after {
  border-color: white !important;
}
.ant-calendar-prev-year-btn::before {
  border-color: white !important;
}
.ant-calendar-next-month-btn::before {
  border-color: white !important;
}
.ant-calendar-next-year-btn::after {
  border-color: white !important;
}
.ant-calendar-next-year-btn::before {
  border-color: white !important;
}
.ant-calendar-input-wrap {
  border-color: #939393;
}
.ant-calendar {
  border-color: #686868;
}
</style>
