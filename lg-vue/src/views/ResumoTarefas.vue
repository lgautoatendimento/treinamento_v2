<template>
  <div id="nav">
    <br />
    Total tarefas: {{ $store.state.tarefas.lista.length }}
    <br />
    Minhas tarefas:{{ $store.getters["tarefas/todasTarefas"] }}
  </div>
</template>
