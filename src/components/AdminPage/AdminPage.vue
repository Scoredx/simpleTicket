<template>
  <div id="adminPage">
    <div class="flex1">
      <div id="topBar"></div>
      <div id="mainContainer">
        <div id="issues"></div>
      </div>
    </div>
    <div class="flex0">
      <div id="footer">
        <p>by Filip Szewczyk</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import "../../assets/SCSS/reset.scss";
import "../../assets/SCSS/dashboard.scss";
import appFireStorage from "../../Firebase/AppFirebaseStorage";
import { IssueComponent } from "./../../IssueComponent/IssueComponent";
const issues = new IssueComponent();

export default defineComponent({
  name: "AdminPage",
  props: {
    msg: String,
  },
  data() {
    return {};
  },
  computed: {
    issuesDiv() {
      return document.querySelector("#issues") as HTMLDivElement;
    },
  },

  mounted() {
    this.issuesDiv.innerHTML = '';
    appFireStorage.getFromStorage().then((data) => {
      data.forEach((ele) => {
        let issue = ele as IIssue;
        this.issuesDiv.appendChild(issues.createIssue(issue));
      });
    });
  },
});
</script>
