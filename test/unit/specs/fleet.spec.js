import Vue from 'vue'
import fleet from '@/components/fleet-status-overview/fleet'

describe('fleet.vue', () => {
  it('should be able to load heading', () => {
    //instantiate widget
    const Constructor = Vue.extend(fleet);
    const vm = new Constructor().$mount();
    //test Active Trips label
    const heading1 = vm.$el.querySelector('h2').textContent;
    expect(heading1).to.equal(' Active Trips');
    //test Drivers label
    const heading2 = vm.$el.querySelectorAll('h2')[1].textContent;
    expect(heading2).to.equal(' Drivers');
    //test Passengers label
    const heading3 = vm.$el.querySelectorAll('h2')[2].textContent;
    expect(heading3).to.equal('Passengers');
  })


})
