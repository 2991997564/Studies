<template>
	<div id="app">
		{{message}}
		<h2>首页</h2>
    <router-link to="/home/login">登录</router-link>
    <router-link to="/home/register">注册</router-link>
    <span v-bind:title="message1">鼠标悬停几秒钟查看此处动态绑定的提示信息</span>
    <p v-if="ifshow">ifshow</p>
    <p v-show="isshow">isshow</p>
    <ul>
      <li v-for="fordata in fordatas">
        {{fordata.text}}
      </li>
    </ul>
    <ul>
      <li v-for="value in object">
        {{value}}
      </li>
    </ul>
    <ul>
      <li v-for="(value,key,index) in object">
        {{index}} | {{key}} | {{value}}
      </li>
    </ul>
    <ul>
      <li v-for="n in 10">
        {{ n }}
      </li>
    </ul>
    <ul>
      <li v-for="n in [1,3,5]">
        {{ n }}
      </li>
    </ul>
    <button v-on:click="reverseMessage">逆转消息</button>
    <p>原始字符串: {{ message }}</p>
    <p>计算后反转字符串: {{ reversedMessage }}</p>
    <input v-model="message">
    <span v-html="rawHtml"></span>
    <div v-bind:id="dynamicId"></div>
    <button v-bind:disabled="isButtonDisabled">Button</button>
    <a @click="doSomething">v-on缩写</a>
    <button v-on:click="greet">greet</button>
    <button v-on:click="say('hi')">Say hi</button>
    {{message2 | capitalize}} <!-- 过滤器 -->
    <div v-if="Math.random() > 0.5">
    Sorry
    </div>
    <div v-else>
      No Sorry
    </div>
    <div v-if="type === 'A'">
      A
    </div>
    <div v-else-if="type === 'B'">
      B
    </div>
    <div v-else-if="type === 'C'">
      C
    </div>
    <div v-else>
      Not A/B/C
    </div>

    <p>input 元素：</p>
    <input v-model="message" placeholder="编辑我……">
    <p>消息是: {{ message }}</p>
    
    <p>textarea 元素：</p>
    <p style="white-space: pre">{{ message2 }}</p>
    <textarea v-model="message2" placeholder="多行文本输入……"></textarea>

    <p>单个复选框：</p>
    <input type="checkbox" id="checkbox" v-model="checked">
    <label for="checkbox">{{ checked }}</label>
      
    <p>多个复选框：</p>
    <input type="checkbox" id="runoob" value="Runoob" v-model="checkedNames">
    <label for="runoob">Runoob</label>
    <input type="checkbox" id="google" value="Google" v-model="checkedNames">
    <label for="google">Google</label>
    <input type="checkbox" id="taobao" value="Taobao" v-model="checkedNames">
    <label for="taobao">taobao</label>
    <br>
    <span>选择的值为: {{ checkedNames }}</span>

    <input type="radio" id="runoob" value="Runoob" v-model="picked">
    <label for="runoob">Runoob</label>
    <br>
    <input type="radio" id="google" value="Google" v-model="picked">
    <label for="google">Google</label>
    <br>
    <span>选中值为: {{ picked }}</span>

    <select v-model="selected" name="fruit">
      <option value="">选择一个网站</option>
      <option value="www.runoob.com">Runoob</option>
      <option value="www.google.com">Google</option>
    </select>
    <div id="output">
        选择的网站是: {{selected}}
    </div>
	</div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      message: 'Vue.js App',
      message1: '生活',
      message2: 'hello-world',
      ifshow: true,
      isshow: true,
      fordatas: [
        {text:1},
        {text:2},
        {text:3}
      ],
      rawHtml: '<h2>世界</h2>',
      dynamicId: 1,
      isButtonDisabled: true,
      type: 'C',
      object: {
        name: '菜鸟教程',
        url: 'http://www.runoob.com',
        slogan: '学的不仅是技术，更是梦想！'
      },
      checked : false,
      checkedNames: [],
      picked: 'Runoob',
      selected: ''
    }
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    },
    greet: function(event){
      // `this` 在方法里指当前 Vue 实例
      alert('Hello ' + this.message + '!')
      // `event` 是原生 DOM 事件
      if (event) {
        alert(event.target.tagName)
      }
    },
    say: function(message){
      alert(message)
    },
    doSomething: function(message){
      alert(message)
    }
  },
  computed: {
    // 计算属性的 getter
    reversedMessage: function () {
      // `this` 指向 vm 实例
      return this.message.split('').reverse().join('')
    }
  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
}
</script>

<style></style>
