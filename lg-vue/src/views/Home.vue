<template>
  <div class="home p-text-center">
    <h3 class="lg-aa-titulo">Minha lista de Tarefas</h3>
    <hr />
    <div id="nav">
      <router-link to="/resumo">{{ $t('resumo') }}</router-link> |
      <router-link to="/tarefas" v-t="'listaTarefas'"></router-link>
    </div>
    <hr />
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  },
};
</script>

<style lang="scss">
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
