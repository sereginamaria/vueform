<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-sm-6 mx-auto">
        <form @submit.prevent="registrationUser">

          <div class="form-group">
            <label for="name">Имя</label>
            <input  @blur="$v.formReg.name.$touch()"
                    :class="{'is-invalid': $v.formReg.name.$error}"
                   v-model="formReg.name" type="text" class="form-control" id="name">

            <div v-if="!$v.formReg.name.required" class="invalid-feedback">
              {{reqText}}
            </div>

          </div>

          <div class="form-group">
            <label for="namee">Имя</label>
            <input  @blur="$v.formReg.namee.$touch()"
                    v-model="formReg.namee" type="text" class="form-control" id="namee">

          </div>


          <div class="form-group">
            <label for="surname">Фамилия</label>
            <input v-model="formReg.surname" type="text" class="form-control" id="surname">
          </div>

          <div class="form-group">
            <label for="email">Email</label>
            <input @blur="$v.formReg.email.$touch()"
                   :class="{'is-invalid': $v.formReg.email.$error}"
                    v-model="formReg.email" type="email" class="form-control" id="email">

            <div v-if="!$v.formReg.email.required" class="invalid-feedback">
              {{reqText}}
            </div>

            <div v-if="!$v.formReg.email.email" class="invalid-feedback">
              Поле должно быть email адресом
            </div>

          </div>

          <div class="form-group">
            <label for="password">Пароль</label>
            <input @blur="$v.formReg.password.$touch()"
                   :class="{'is-invalid': $v.formReg.password.$error}"
                    v-model="formReg.password" type="password" class="form-control" id="password" aria-describedby="check">
            <div v-if="!$v.formReg.password.required" class="invalid-feedback">
              {{reqText}}
            </div>
            <div v-if="!$v.formReg.password.minLength" class="invalid-feedback">
              Пароль должен содержать не менее 6 символов
            </div>

            </div>

          <div class="form-group">
            <label for="passwordConfirm">Повторите пароль</label>
            <input @blur="$v.formReg.passwordConfirm.$touch()"
                   :class="{'is-invalid': $v.formReg.passwordConfirm.$error}"
                    v-model="formReg.passwordConfirm" type="password" class="form-control" id="passwordConfirm">

            <div v-if="!$v.formReg.passwordConfirm.required" class="invalid-feedback">
              {{reqText}}
            </div>

            <div v-if="!$v.formReg.passwordConfirm.sameAsPassword && $v.formReg.passwordConfirm.required" class="invalid-feedback">
              Пароли не совпадают
            </div>

          </div>

          <button :disabled="disabledButtonSubmit"
                  type="submit" class="btn btn-primary">Зарегистрироваться</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

import { required, email, minLength, sameAs} from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      reqText: 'Поле обязательно для заполнения',
      formReg: {
        namee: "",
        name: "",
        surname: "",
        email: "",
        password: "",
        passwordConfirm: "",
      }
    }
  },
  computed: {
    disabledButtonSubmit() {
      return this.$v.formReg.name.$invalid ||
              this.$v.formReg.email.$invalid ||
              this.$v.formReg.password.$invalid ||
              this.$v.formReg.passwordConfirm.$invalid
    }
  },
  methods:{
    registrationUser() {
      console.log('Регистрация прошла успешно!')

      for (let input in this.formReg) {
        this.formReg[input] = ''

      this.$v.$reset()
      }
    }
  },
  validations: {
    formReg: {
      name: {
        required
      },
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(6)
      },
      passwordConfirm: {
        required,
        sameAsPassword: sameAs('password')

      }
    }
  }
}
</script>

<style>

</style>
