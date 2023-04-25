


import { computed, defineComponent, onMounted, reactive, ref, watch } from "vue";

export default defineComponent({
  name: "TablePage",
  components: {
  },
  setup() {
    const selectsArray = ref<any>([
      { id: 'automotive', name: 'Automotive', class: 'industry', default: false },

      { id: 'beauty', name: 'Beauty', class: 'industry', default: true },

      { id: 'branding', name: 'Branding', class: 'industry', default: true },

      { id: 'btob', name: 'B to B', class: 'industry', default: false }

    ]);
    const selected = ref<any>([]);
    const selectAll = {
      get:() => {
        console.log("get", selected.value);
        
        return selected.value.length === selectsArray.value.length
      },
      set: ((value: any) => {
        selected.value = []

        if (value) {
          selectsArray.value.forEach((select: any) => {
            selected.value.push(select.id)
          })
        }
      })
    }

    return {
      selectsArray, selected, selectAll
    }

  }
});
