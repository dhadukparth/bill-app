const stackScreenRoutes = {
  root: 'index',
  home: 'index',
  login: '(auth)/login',
  forgotpassword: '(auth)/forgotpassword',
  verifyemail: '(auth)/verifyemail',
  resetpassword: '(auth)/resetpassword',
  profile: '(setting)/profile',
  changepassword: '(setting)/changepassword',
  language: '(setting)/language',
  theme: '(setting)/theme',
  termsCondition: '(setting)/terms-condition',
  helpCenter: '(setting)/helpcenter',
  newCustomer: '(customer)/new-customer',
  editCustomer: '(customer)/edit-customer',
  history: '(bill)/history',
  statementList: '(bill)/statement-list',
  statementInfo: '(bill)/statement-info',
  newStatement: '(bill)/new-statement',
  editStatement: '(bill)/edit-statement',
};

const tabScreenRouters = {
  home: 'index',
  bills: 'bills',
  customer: 'customer',
  setting: 'setting',
};

export default {
  stack: stackScreenRoutes,
  tabs: tabScreenRouters,
};
