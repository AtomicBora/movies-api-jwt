<template>
  <div class="m-5">
    <b-form @submit.stop.prevent="AddMovie()">
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
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
import HttpService from '../services/Movies';
export default {
    name: "AddMovieComponent",
    data() {
        return {
            movie: {}
        }
    },
    methods: {
        AddMovie(){
            // console.log(this.movies);
            HttpService.add(this.movie).then( ( ) =>{
                alert('Success');
                this.$router.push('/movies')
            })
            .catch(e => {
                alert('Failed to add movie');
                console.log(e);
        });
        }
    },
}


</script>

<style>
</style>