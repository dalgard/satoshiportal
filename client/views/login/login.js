Template.login.viewmodel({
  // Declaring these only so that other developers will know that they exist
  username: "",
  password: "",

  login: function () {
    var username = this.username(),
        password = this.password();

    Meteor.loginWithPassword(username, password, function (error) {
      if (error) {
        toastr.error(error.reason, 'Something went wrong');
      } else {
        toastr.success('You logged in succesfully', 'Welcome back ' + username);
        FlowRouter.go('/dashboard');
      }
    });
  }
}, { persist: true });
