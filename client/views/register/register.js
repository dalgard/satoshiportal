Template.register.events({
  'submit': function (event, template) {
    event.preventDefault();

    var firstName = template.find('#firstName').value;
    var lastName = template.find('#lastName').value;
    var email = template.find('#email').value;
    var username = template.find('#username').value;
    var password = template.find('#password').value;
    var confirmPassword = template.find('#confirmPassword').value;

    if (!username) {
      username = email;
    }

    if (password === confirmPassword) {
      Accounts.createUser({
        username: username,
        email: email,
        password: password,
        profile: {
          firstName: firstName,
          lastName: lastName
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
});
