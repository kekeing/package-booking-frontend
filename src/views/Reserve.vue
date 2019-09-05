<template>
  <div>
    <a-form
      :form="form"
      @submit="handleSubmit"
    >
      <a-form-item
        label="运单号： "
        :label-col="{ span: 5 }"
        :wrapper-col="{ span: 12 }"
      >
        <a-input
          v-decorator="[
          'waybillNumber',
          {rules: [{ required: true, message: '请输入运单号!' }]}
        ]"
        />
      </a-form-item>
      <a-form-item
        label="取件时间： "
        :label-col="{ span: 5 }"
        :wrapper-col="{ span: 12 }"
      >
        <a-input
          v-decorator="[
          'postdate',
          {rules: [{ required: true, message: '请输入取件时间!' }]}
        ]"
        />
      </a-form-item>
      <a-form-item
        :wrapper-col="{ span: 12, offset: 5 }"
      >
        <a-button
          type="primary"
          html-type="submit"
        >
          Submit
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
<script>
  import axios from "axios";
  export default {
    data () {
      return {
        formLayout: 'horizontal',
        form: this.$form.createForm(this),
      }
    },
    methods: {
      handleSubmit (e) {
        e.preventDefault()
        this.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values)
          }
        })
      },

    },
  }
</script>
