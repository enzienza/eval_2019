/**
 * [action]
 * Fonctionne comme une computed:{...}
 * de façon ASYNCHRONES
 * @type {Object}
 */
import axios from "axios";

export const actions = {
  // Permet de récupérer les infos de L'API
  setProducts({ commit }) {
    axios
      .get("https://5df6a0ebc1b62e0014e2088c.mockapi.io/products")
      .then(res => {
        commit("setProducts", res.data);
      })
      .catch(res => {
        console.log("Probleme avec la requete" + res.data);
      });
  },
  // Augmenter la quantité
  addQuantity({ commit }) {
    commit("addQuantity");
  },

  // Diminuer la quantité
  subQuantity({ commit }) {
    commit("subQuantity");
  }
};
