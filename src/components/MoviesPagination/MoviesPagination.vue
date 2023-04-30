<template>
  <div class="movies-pagination">
    <BPagination
      v-model="currentPageModel"
      :per-page="perPage"
      :total-rows="total"
      prev-text="Prev"
      next-text="Next"
    />
  </div>
</template>

<script>
export default {
  name: "MoviesPagination",
  emits: ["pageChanged"],
  props: {
    currentPage: {
      type: Number,
      default: 1
    },
    total: {
      type: Number,
      default: 1
    },
    perPage: {
      type: Number,
      default: 12
    }
  },
  computed: {
    currentPageModel: {
      get() {
        return this.currentPage;
      },
      set(page) {
        this.$emit("pageChanged", page);
      }
    }
  }
};
</script>

<style scoped>
.movies-pagination {
  display: flex;
  justify-content: center;
  margin-top: 25px;
}

.movies-pagination >>> .pagination .page-item .page-link {
  background-color: transparent;
  font-size: 12px;
  color: #fff;
  box-shadow: none;
}

.movies-pagination >>> .pagination .page-item.active .page-link {
  border-color: #fff;
  background-color: #fff;
  color: #000;
}

.movies-pagination >>> .pagination .page-item.disabled .page-link {
  color: gray;
  border-color: gray;
  opacity: 0.7;
}
</style>
