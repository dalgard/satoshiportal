FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: "home"});
  }
});

FlowRouter.route('/register', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: "register"});
  }
});

FlowRouter.route('/login', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: "login"});
  }
});

FlowRouter.route('/dashboard', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: "dashboard"});
  }
});
