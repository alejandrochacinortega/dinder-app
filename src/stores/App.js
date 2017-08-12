
class AppStore {
  constructor() {}
  
  appInitialized() {
    this.root = 'login';
  }
  
  login() {
    this.root = 'after-login';
  }
}

export default new AppStore();