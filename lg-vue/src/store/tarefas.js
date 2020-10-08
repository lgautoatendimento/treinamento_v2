export default {
  namespaced: true,
  state: {
    lista: ['Tarefa 1', 'Tarefa 2', 'Tarefa 3'],
  },
  mutations: {
    adicionar(state, tarefa) {
      console.log('Passou na Mutation!');
      state.lista.push(tarefa);
    },
  },
  actions: {
    // Haverá algum processo assíncrono ou algum tratamento de dados
    // antes de efetuar o commit (Mutations)
    salvar({ commit }, tarefa) {
      console.log('Passou na Action!');
      commit('adicionar', tarefa);
    },
  },
  getters: {
    todasTarefas: (state) => state.lista.join(', '),
  },
};
