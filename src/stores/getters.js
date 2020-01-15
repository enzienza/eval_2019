/**
 * [getters]
 * Fonctionne comme une computed:{...}
 * de façon SYNCHRONES
 * @type {Object}
 */

export const getters = {
  itemCount(state, index) {
    if (index >= 0) {
      return state.cart[index].quantity;
    }
  }
};
