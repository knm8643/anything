<template>
  <div class="container">
    <div class="main_header">
      <div class="back">←</div>
      <div class="title">나의 상담</div>
      <div class="right">
        <div>☎</div>
        <div>▣</div>
      </div>
    </div>
    <div class="main_body">
      <div class="tab_header">
        <div v-for="tab in tabs" :key="tab.dataTab">
          <div
            @click="setActive(tab.dataTab)"
            :data-tab="tab.dataTab"
            class="tab_menu"
            :class="{ active: tab.activeclass }"
          >
            {{ tab.label }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SpadeComponent.vue",
  data() {
    return {
      saveActive: "",
      tabs: [
        {
          dataTab: "1",
          activeclass:
            localStorage.getItem("activeSave") == null ? true : false,
          label: "1:1 문의 내역",
        },
        { dataTab: "2", activeclass: false, label: "상품 Q&A 내역" },
        { dataTab: "3", activeclass: false, label: "지인톡 상담 내역" },
        { dataTab: "4", activeclass: false, label: "상담 내역" },
        { dataTab: "5", activeclass: false, label: "1:1 문의 내역" },
        { dataTab: "6", activeclass: false, label: "상품 Q&A 내역" },
        { dataTab: "7", activeclass: false, label: "지인톡 상담 내역" },
        { dataTab: "8", activeclass: false, label: "상담 내역" },
      ],
    };
  },
  mounted() {
    if (localStorage.getItem("activeSave")) {
      this.setActive(localStorage.getItem("activeSave"));
    }
  },
  methods: {
    setActive(tab) {
      for (var i = 0; i < this.tabs.length; i++) {
        if (this.tabs[i].dataTab == tab) {
          this.tabs[i].activeclass = true;
          this.$nextTick(() => {
            const element = document.querySelector(".tab_menu.active");
            localStorage.setItem(
              "activeSave",
              element.getAttribute("data-tab")
            );
            if (element) {
              element.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "start",
              });
            }
          });
        } else {
          this.tabs[i].activeclass = false;
        }
      }
    },
  },
};
</script>

<style scoped>
body {
  margin: 0;
  min-width: 320px;
  font-size: 40px;
}

a {
  color: initial;
  text-decoration: initial;
}

.main_header {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid;
  padding: 40px;
}

.main_header .right {
  display: flex;
}

.main_header .right > div:not(:last-child) {
  padding-right: 30px;
}

.main_body {
  /*padding-right: 20px;*/
}
.tab_header {
  /*padding: 0 20px;*/

  display: flex;
  /*justify-content: space-between;*/
  /*margin-left: 10px;*/
  margin-top: 30px;
  /*overflow: auto;*/
  white-space: nowrap;
  border-top: 1px solid;
  border-bottom: 1px solid;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
}
.tab_header::-webkit-scrollbar {
  display: none;
}
.tab_header .tab_menu {
  /*width: 100%;*/
  text-align: center;
  background-color: white;
  padding: 10px;
}
.tab_header .tab_menu.active {
  background-color: #b49277;
  color: white;
  transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) 0s;
  transform: translateX(0px);
}
</style>
