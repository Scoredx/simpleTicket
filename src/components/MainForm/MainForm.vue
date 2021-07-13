<template>
  <div id="MainForm">
    <form id="input" v-on:submit="submitForm">
      <div id="userData">
        <div>
          <!-- name -->
          <p>Imię:</p>
          <input
            id="personName"
            v-model="nameInput"
            class="inputField"
            type="text"
          />
        </div>

        <div>
          <!-- room -->
          <p>Pokój:</p> 
          <input
            id="roomNumber"
            v-model="roomNumber"
            class="inputField"
            type="text"
            maxlength="5"
          />
        </div>
      </div>
      <!-- issue -->
      <div id="issue">
        <p>Problem:</p>
        <textarea
          id="issueInput"
          v-model="issueInput"
          class="inputField"
          type="text"
        ></textarea>
      </div>

      <div id="importanceChooseDiv">
        <input
          type="radio"
          v-model="importanceRadio"
          v-bind:value="1"
          name="importance"
        />
        <label for="radio">Mało ważne</label>

        <input
          type="radio"
          v-model="importanceRadio"
          v-bind:value="2"
          name="importance"
          checked
        />
        <label>Ważne</label>

        <input
          type="radio"
          v-model="importanceRadio"
          v-bind:value="3"
          name="importance"
        />
        <label>Bardzo ważne</label>
      </div>

      <button type="button" v-on:click="submitForm()" id="submitButton">
        Wyślij
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Issue from "./../../Firebase/Issue";
import appFireStorage from "./../../Firebase/AppFirebaseStorage";
import "../../assets/SCSS/main.scss";

const issue = new Issue();

/* eslint-disable */
export default defineComponent({
  name: "MainForm",
  props: {
    msg: String,
  },
  data() {
    return {
      nameInput: "",
      roomNumber: "",
      issueInput: "",
      importanceRadio: 2,
    };
  },
  methods: {
    submitForm() {
      if (this.nameInput === "") {
        alert("Wprowadź imię!"); //Name
        return;
      }
      if (this.roomNumber === "") {
        alert("Wprowadź pokój!"); //Room
        return;
      }
      if (this.issueInput === "") {
        alert("Opisz problem!"); //Issue
        return;
      }
      let newIssue = issue.saveToNote(
        "",
        this.nameInput,
        this.roomNumber,
        this.issueInput,
        this.importanceRadio,
        false
      );
      appFireStorage.addIssue(newIssue).then((res) => {
        newIssue.id = res;
      });
    },
  },
});
</script>
