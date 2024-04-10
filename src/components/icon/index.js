//註冊全局組件
import {
  HomeOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
  LoadingOutlined,
} from '@ant-design/icons-vue'

const icons = [HomeOutlined, SmileOutlined, SyncOutlined, LoadingOutlined, SettingFilled]
export default {
  install(app) {
    icons.forEach((icon) => {
      app.component(icon.displayName, icon)
    })
  },
}
