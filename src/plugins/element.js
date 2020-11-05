import Vue from 'vue'
import { Button, Form, FormItem, Input ,Message} from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
//提示信息比较特殊
Vue.prototype.$Message = Message
