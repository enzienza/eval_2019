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
  addProduct(state, product) {
    product = { ...product, quantity: state.quantity };
    state.cart = [...state.cart, product];
  },

  // Supprimer
  removeProduct(state, product) {
    // splice() => retire ou ajoute un élément du tableu
    state.cart.splice(product, 1);
  }
};
