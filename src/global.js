import Vue from 'vue'

import { RadioGroup, CellGroup, CheckboxGroup, Field, PullRefresh, Sticky, Toast } from 'vant'
import appButton from '@/components/app-button'
import appSearch from '@/components/app-search'
import appRadio from '@/components/app-radio'
import appCell from '@/components/app-cell'
import appIcon from '@/components/app-icon'
import appImg from '@/components/app-img'
import appCheckbox from '@/components/app-checkbox'
import appTab from '@/components/app-tab'
import appTabs from '@/components/app-tab/tabs'
import appDialog from '@/components/app-dialog'
import appBack from '@/components/app-title-bar/back'
import appDialogNotify from '@/components/app-dialog/notify'

// 全局注册基础组件，页面无需再次引用即可使用
Vue.component('app-button', appButton)
Vue.component('app-search', appSearch)
Vue.component('app-radio', appRadio)
Vue.component('app-cell', appCell)
Vue.component('app-checkbox', appCheckbox)
Vue.component('app-icon', appIcon)
Vue.component('app-img', appImg)
Vue.component('app-tab', appTab)
Vue.component('app-tabs', appTabs)
Vue.component('app-dialog', appDialog)
Vue.component('app-back', appBack)
Vue.component('app-dialog-notify', appDialogNotify)

// 无需高阶封装类组件，直接使用
Vue.use(RadioGroup)
Vue.use(CellGroup)
Vue.use(CheckboxGroup)
Vue.use(Field)
Vue.use(PullRefresh)
Vue.use(Sticky)
Vue.use(Toast)
