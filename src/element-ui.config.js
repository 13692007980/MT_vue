import {Button, Input, Form, FormItem, Container} from 'element-ui'

let arr = [Button , Input, Form, FormItem, Container]

export default function (Vue) {
    arr.forEach(Component => Vue.use(Component))
}