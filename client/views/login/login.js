Template.login.events({
  'submit': function (event, template) {
    event.preventDefault();

    var username = template.find('#username').value;
    var password = template.find('#password').value;

    Meteor.loginWithPassword(username, password, function (error) {
      if (error) {
        toastr.error(error.reason, 'Something went wrong');
      } else {
        toastr.success('You logged in succesfully', 'Welcome back ' + username);
        FlowRouter.go('/dashboard');
      }
    });
  }
});
