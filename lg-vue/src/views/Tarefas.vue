<template>
  <div class="p-fluid">
    <div class="p-col-10 p-md-6 p-flex p-ai-center p-m-auto">
      <div class="p-inputgroup">
        <p-input-text
          v-model="nomeTarefa"
          @keyup.enter="adicionar"
        ></p-input-text>
        <p-button label="Adicionar" @click="adicionar" />
      </div>

      <p-card class="p-mt-3 p-text-left" v-for="tarefa in lista" :key="tarefa">
        <template #content>
          {{ tarefa }}
        </template>
      </p-card>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

import Card from 'primevue/card';

export default {
  components: {
    'p-card': Card,
  },
  data() {
    return {
      nomeTarefa: '',
    };
  },
  computed: {
    ...mapState({
      // $store.state.tarefas.lista
      lista: (state) => state.tarefas.lista,
    }),
  },
  methods: {
    adicionar() {
      if (this.nomeTarefa) {
        // this.salvar(this.nomeTarefa);
        this.$store.dispatch('tarefas/salvar', this.nomeTarefa);
        this.nomeTarefa = '';
      }
    },
    ...mapMutations({
      salvar: 'tarefas/adicionar',
    }),
  },
};
</script>
