import _ from "lodash";

export default {
  data() {
    return {
      page: +this.$route.query.page || 1,
      pageSize: 2,
      pageCount: 0,
      allItems: [],
      selectedItems: [],
    };
  },
  methods: {
    setupPagination(allItems) {
      this.allItems = _.chunk(allItems, this.pageSize);
      this.pageCount = _.size(this.allItems);
      this.selectedItems = this.allItems[this.page - 1] || this.allItems[0];
    },
    pageChangeHandler(page) {
      this.$router.push(`${this.$route.path}?page=${page}`);
      this.selectedItems = this.allItems[page - 1] || this.allItems[0];
    },
  },
};
