/**
 * [mutations]
 * Fonctionne comme un methods:{...}
 * @type {Object}
 */

export const mutations = {
  // Permet de récupérer les infos de L'API
  setProducts(state, products) {
    state.products = products;
  },

  // augmenter la quantité
  addQuantity(state) {
    state.quantity++;
  },

  // diminuer la quantité
  subQuantity(state) {
    if (state.quantity > 1) state.quantity--;
  },

  // Ajouter au panier
  addProduct(state, payload) {
    state.cart.push({
      id: new Date().getTime(),
      quantity: state.quantity,
      //name: state.products,
      ...payload
    });
  }

  // ajouter item Panier
  // addCurrentCart(state, currentCart) {
  //   state.currentCart = currentCart;
  // }
};
