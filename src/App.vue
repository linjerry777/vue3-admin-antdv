<template>
  <div>
    <a-config-provider :theme="theme" :locale="zh_TW">
      <a-button type="primary">
        <HomeOutlined />
        首頁
      </a-button>
      <a-button :danger="true">刪除</a-button>
      <a-pagination :total="500" show-quick-jumper />
    </a-config-provider>
  </div>
</template>

<script setup>
import zh_TW from 'ant-design-vue/es/locale/zh_TW'
const theme = {
  token: {
    colorPrimary: '#e15536',
  },
}
</script>

<style lang="scss" scoped></style>
