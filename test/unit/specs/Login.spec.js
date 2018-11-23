import Vue from 'vue'
import login from '@/components/login/login'

describe('login.vue', () => {
  it('should be able to load', () => {
    //instantiate widget
    const Constructor = Vue.extend(login);
    const vm = new Constructor().$mount();
    //test username label
    const label1 = vm.$el.querySelector('label').textContent;
    expect(label1).to.equal('username');
    //test password label
    const label2 = vm.$el.querySelectorAll('label')[1].textContent;
    expect(label2).to.equal('password');
  })


  it('should be able to login', () => {
    //instantiate widget
    const Constructor = Vue.extend(login);
    const vm = new Constructor().$mount();
    //test password label
    const label = vm.$el.querySelectorAll('label')[1].textContent;
    expect(label).to.equal('password');
  })
})
