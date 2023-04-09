import  { defineComponent, ref } from "vue";
import ModalConfirm from "@/components/modal-confirm/ModalConfirm.vue";
import ModalPreiew from "@/components/modal-preview/ModalPreview.vue";
import { useRouter } from "vue-router";

export default defineComponent({
    name: "Modal",
    components:{
        ModalConfirm,
        ModalPreiew
    },
    setup(props, ctx){
        const router = useRouter();

        const tab = ref(null);
        const dialog = ref(false);
        
        const showConfirm = ref(false);
        const actionSelected = ref("");
        const idReject = ref("");
        const filePreview = ref<any>();

        const uiEvents = {
            onShowConfirm:(action: string)=>{
                showConfirm.value = true;
                actionSelected.value = action;
            },
            onHideConfirm:()=>{
                showConfirm.value = false;
            },
            onShowPreview:(fileItem: any)=>{
                showConfirm.value = true;
                filePreview.value = fileItem;
            }
        };

        const handleConfirm = ()=>{
            if(actionSelected.value === 'reject'){
                console.log("reject");
                idReject.value = router.currentRoute.value.params.id as string;
                console.log("id reject", idReject.value);
                uiEvents.onHideConfirm();
            }else{
                console.log("verify");
                uiEvents.onHideConfirm();
            }
        }

        return{
            tab,
            dialog,

            showConfirm,
            uiEvents,
            actionSelected,
            handleConfirm,
            filePreview
        }
    }
})