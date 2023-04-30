<template>
  <div id="root">
    <Loader />
    <Notification />
    <PosterBg :poster="posterBg" />

    <Header />
    <MoviesList :list="moviesList" @changePoster="onChangePoster" />

    <MoviesPagination
      :current-page="currentPage"
      :per-page="moviesPerPage"
      :total="moviesLength"
      @pageChanged="onPageChanged"
    />
  </div>
</template>

<script>
import MoviesPagination from "@/components/MoviesPagination/MoviesPagination";
import MoviesList from "@/components/MoviesList/MoviesList";
import Header from "@/components/Header/Header";
import PosterBg from "@/components/PosterBg/PosterBg";
import Notification from "@/components/Notification/Notification";
import Loader from "@/components/Loader/Loader";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    MoviesPagination,
    MoviesList,
    Header,
    PosterBg,
    Notification,
    Loader
  },
  data: () => ({
    posterBg: ""
  }),
  computed: {
    ...mapGetters("movies", [
      "moviesList",
      "currentPage",
      "moviesPerPage",
      "moviesLength"
    ])
  },
  watch: {
    "$route.query": {
      handler: "onPageQueryChange",
      immediate: true,
      deep: true
    }
  },
  methods: {
    ...mapActions("movies", ["changeCurrentPage"]),
    onPageQueryChange({ page = 1 }) {
      this.changeCurrentPage(Number(page));
    },
    onChangePoster(poster) {
      this.posterBg = poster;
    },
    onPageChanged(page) {
      this.$router.push({ query: { page } });
    }
  }
};
</script>

<style scoped>
#root {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
}
</style>
