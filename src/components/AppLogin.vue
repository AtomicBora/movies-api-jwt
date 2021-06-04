<template>
  <div>
    <b-form @submit.stop.prevent="login()">
      <b-form-group label="Movie Title" label-for="movie">
        <b-form-input
          id="movie"
          type="text"
          v-model="movie.title"
          required
          placeholder="Enter movie name"
        >
        </b-form-input>
      </b-form-group>
      <b-button type="submit">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>