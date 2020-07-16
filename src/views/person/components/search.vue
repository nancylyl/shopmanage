<template>
  <div>
    <el-select
      v-model="value"
      multiple
      filterable
      remote
      reserve-keyword
      placeholder="搜索商品"
      :remote-method="remoteMethod"
      :loading="loading"
      class="login-form-input"
    >
      <el-option v-for="item in options" :key="item.value" :label="item.label" class="inputText"></el-option>
    </el-select>
    <input type="submit" class="search-btn" value />
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [],
      value: [],
      list: [],
      loading: false,
      states: [
        'Alabama',
        'Alaska',
        'Arizona',
        'Arkansas',
        'California',
        'Colorado',
        'Connecticut',
        'Delaware',
        'Florida',
        'Georgia',
        'Hawaii',
        'Idaho',
        'Illinois',
        'Indiana',
        'Iowa',
        'Kansas',
        'Kentucky',
        'Louisiana',
        'Maine',
        'Maryland',
        'Massachusetts',
        'Michigan',
        'Minnesota',
        'Mississippi',
        'Missouri',
        'Montana',
        'Nebraska',
        'Nevada',
        'New Hampshire',
        'New Jersey',
        'New Mexico',
        'New York',
        'North Carolina',
        'North Dakota',
        'Ohio',
        'Oklahoma',
        'Oregon',
        'Pennsylvania',
        'Rhode Island',
        'South Carolina',
        'South Dakota',
        'Tennessee',
        'Texas',
        'Utah',
        'Vermont',
        'Virginia',
        'Washington',
        'West Virginia',
        'Wisconsin',
        'Wyoming'
      ]
    }
  },
  mounted() {
    this.list = this.states.map(item => {
      return { value: `value:${item}`, label: `${item}` }
    })
  },
  methods: {
    remoteMethod(query) {
      if (query !== '') {
        this.loading = true
        setTimeout(() => {
          this.loading = false
          this.options = this.list.filter(item => {
            return item.label.toLowerCase().indexOf(query.toLowerCase()) > -1
          })
        }, 200)
      } else {
        this.options = []
      }
    }
  }
}
</script>

<style scoped>
.login-form-input {
  z-index: 100;
  margin-top: 80px;
  color: #91847b;
  background-color: #eee;
  width: 400px;
  height: 50px;
}
.el-input__inner {
  height: 33px;

  font-size: 13px;

  box-shadow: none;

  border: 1px solid #e9e9e9;
}

.el-input__inner:hover {
  border-color: #e9e9e9;
}

.el-input__inner:focus {
  border-color: #42a5f5;
  box-shadow: none;
  transition-duration: 0.5s;
}

.el-input__inner::-webkit-input-placeholder {
  line-height: 40px;
}

.el-input__inner,
.el-checkbox__inner,
.el-textarea__inner,
.el-button {
  border-radius: 0;
}
</style>
