<template>
  <div>
    <div v-for="movie in movies" :key="movie.id">
      Movie <br> {{ movie.title }}
    </div>
  </div>
</template>

<script>
import Movies from '../services/Movies';
export default {
  data() {
    return {
      movies: [],
    };
  },
  async created() {
      this.movies = await Movies.getAll();
  },
};
</script>

<style>
</style>