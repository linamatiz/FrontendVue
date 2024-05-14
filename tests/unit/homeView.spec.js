import { shallowMount } from '@vue/test-utils';
import HomeView from './../../src/views/HomeView.vue';


describe('HomeView.vue', () => {
  it('showData should add data and calculate total correctly', () => {
    const wrapper = shallowMount(HomeView);

    // Llamar al método showData con un precio simulado
    wrapper.vm.showData({ precio: 10 });

    // Verificar que los datos se hayan agregado correctamente
    expect(wrapper.vm.totales).toEqual([10]);
    expect(wrapper.vm.prodoctoLista).toEqual([{ precio: 10 }]);
    expect(wrapper.vm.totalCarrito).toBe(10);
  });

  it('clearData should reset data', () => {
    const wrapper = shallowMount(HomeView);

    // Simular datos existentes
    wrapper.setData({
      totales: [10, 20, 30],
      prodoctoLista: [{ precio: 10 }, { precio: 20 }, { precio: 30 }],
      totalCarrito: 60,
    });

    // Llamar al método clearData
    wrapper.vm.clearData();

    // Verificar que los datos se hayan restablecido correctamente
    expect(wrapper.vm.totales).toEqual([]);
    expect(wrapper.vm.prodoctoLista).toEqual([]);
    expect(wrapper.vm.totalCarrito).toBe(0);
  });
});

