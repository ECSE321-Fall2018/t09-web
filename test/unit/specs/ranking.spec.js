import Vue from 'vue'
import ranking from '@/components/ranking/ranking'

describe('ranking.vue', () => {
  it('should be able to load heading', () => {
    //instantiate widget
    const Constructor = Vue.extend(ranking);
    const vm = new Constructor().$mount();
    //test Top popular routes label
    const heading1 = vm.$el.querySelector('h4').textContent;
    expect(heading1).to.equal(' Top popular routes');
  })

  it('should be able to load data from backend', () => {
    //instantiate widget
    const Constructor = Vue.extend(ranking);
    const vm = new Constructor().$mount();
    //test data
    vm.create;
    expect(vm.drivers.length).to.equal(0)
  })

})
