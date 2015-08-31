Template.register.viewmodel({
  // Declaring these only so that other developers will know that they exist
  firstName: "",
  lastName: "",
  email: "",
  username: "",
  password: "",
  confirmPassword: "",
  showSubmit: false,

  register: function () {
    var email = this.email(),
        username = this.username() || email,
        password = this.password(),
        confirm_password = this.confirmPassword();

    if (password === confirm_password) {
      Accounts.createUser({
        username: username,
        email: email,
        password: password,
        profile: {
          firstName: this.firstName(),
          lastName: this.lastName()
        }
      }, function (error) {
        if (error) {
          toastr.error(error.reason, 'Something went wrong');
        } else {
          toastr.success('You registered succesfully', 'Welcome ' + username);
          FlowRouter.go('/dashboard');
        }
      });
    }
  }
}, { persist: true });
