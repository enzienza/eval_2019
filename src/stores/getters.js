/**
 * [getters]
 * Fonctionne comme une computed:{...}
 * de façon SYNCHRONES
 * @type {Object}
 */

export const getters = {
  //   itemCount(state, index) {
  //     if (index >= 0) {
  //       return state.cart[index].quantity;
  //     }
  // },

  cartTotal(state) {
    // reduce() => "accumulateur" traite chaque valeur d'une liste
    // toFixed() => précise le nombre de chiffres après la virgule
    return state.cart.reduce((a, b) => a + b.price * b.quantity, 0).toFixed(2);
  }
};
