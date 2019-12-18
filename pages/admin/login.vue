<template>
  <el-card shadow="always" :style="{ width: '500px' }">
    <el-form
      :model="controls"
      :rules="rules"
      ref="form_admin"
      @submit.native.prevent="onSubmit"
    >
      <h2>Log in to admin page</h2>
      <el-form-item label="Login" prop="login">
        <el-input v-model.trim="controls.login" />
      </el-form-item>
      <div class="mb-2">
        <el-form-item label="Password" prop="password">
          <el-input v-model.trim="controls.password" type="password" />
        </el-form-item>
      </div>
      <el-form-item>
        <el-button type="primary" round native-type="submit" :loading="loading"
          >Log In</el-button
        >
      </el-form-item>
    </el-form>
  </el-card>
</template>
<script>
export default {
  layout: "empty",
  data() {
    return {
      loading: false,
      controls: {
        login: "",
        password: ""
      },
      rules: {
        login: [
          {
            required: true,
            message: "Enter your login",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "Enter your password",
            trigger: "blur"
          },
          {
            min: 6,
            message: "EPassword must be more then 6 characters",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    onSubmit() {
      this.$refs.form_admin.validate(async valid => {
        if (valid) {
          this.loading = true;
          try {
            const formData = {
              login: this.controls.login,
              password: this.controls.password
            };
            await this.$store.dispatch("auth/login", formData);
            this.$router.push("/admin");
          } catch (e) {
            this.loading = false;
          }
        }
      });
    }
  },
  mounted() {
    const { message } = this.$route.query;
    switch (message) {
      case "login":
        this.$message.info("Log in before enter");
        break;
      case "logout":
        this.$message.success("Log out success");
        break;
      case "session":
        this.$message.warning("Time of session is over, Log in again, please");
        break;
    }
  }
};
</script>
