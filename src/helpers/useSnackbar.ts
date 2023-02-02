import { ref } from "vue";

const snackbar = ref({
  show: false,
  message: "",
  type: "",
});

export const useSnackBar = () => {
  const showSuccess = (message: string) => {
    snackbar.value.show = true;
    snackbar.value.message = message;
    snackbar.value.type = "success";

    setTimeout(() => {
      snackbar.value.show = false;
    }, 4000);
  };

  const showError = (message: string) => {
    snackbar.value.show = true;
    snackbar.value.message = message;
    snackbar.value.type = "error";

    setTimeout(() => {
      snackbar.value.show = false;
    }, 4000);
  };

  return { snackbar, showSuccess, showError };
};
