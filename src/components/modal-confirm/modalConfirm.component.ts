import { defineComponent } from "vue";

export default defineComponent({
    name:"ModalConfirm",
    props:["show", "onHide", "title", "content", "handleConfirm"],
    setup(props, ctx){

        return{

        }
    }
})