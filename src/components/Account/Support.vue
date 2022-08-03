<template>
  <h4 class="subtitle puddlesText text-center q-ma-sm">Support</h4>
  <form @submit.prevent="sendEmail" class="row">
    <q-input
      class="inputText regText half col-12 q-mb-md"
      rounded
      outlined
      v-model="form.email"
      label-color="grey-7"
      bg-color="white"
      label="Email address:"
    />
    <q-input
      class="inputText regText half col-12 q-mb-md"
      rounded
      outlined
      v-model="form.issue"
      bg-color="white"
      label-color="grey-7"
      label="Topic + Order Number:"
    />
    <q-input
      class="inputText regText col-12"
      type="textarea"
      rounded
      outlined
      v-model="form.message"
      bg-color="white"
      label-color="grey-7"
      label="Message:"
    >
      <div class="row q-pb-sm items-end">
        <q-btn round color="green" icon="check" type="submit" />
      </div>
    </q-input>
  </form>
</template>

<script>
import emailjs from "emailjs-com";
export default {
  data() {
    return {
      form: {
        email: "",
        issue: "",
        message: "",
      },
    };
  },

  methods: {
    sendEmail(e) {
      emailjs
        .send(
          "default_service",
          "template_vme58up",
          this.form,
          "YzSNCjDbmjEyaOPhX"
        )
        .then(() => {
          console.log("Email Sent");
          this.$q.dialog({
            style: "background-color:green;",
            dark: true,
            color: "white",
            title: "Sucsess!",
            message: "Message Sent!",
            persistent: true,
          });
          setTimeout(() => {
            this.form.issue = "";
            this.form.email = "";
            this.form.message = "";
          }, 2000);
        })
        .catch((error) => {
          console.log({ error });
        });

      // Reset form field
    },
  },
};
</script>

<style lang="scss" scoped>
/* big */
@media screen and (min-width: 970px) {
  .half {
    width: 51% !important;
  }
  .inputText {
    font-size: 18px;
  }
}
//smaller screen
@media screen and (max-width: 970px) {
  .half {
    width: 51% !important;
  }
  .inputText {
    font-size: 16px;
  }
}
// tablet
@media screen and (max-width: 640px) {
  .half {
    width: 100% !important;
  }
  .inputText {
    font-size: 14px;
  }
}
//mobile
@media screen and (max-width: 440px) {
  .half {
    width: 100% !important;
  }
  .inputText {
    font-size: 14px;
  }
}
</style>
