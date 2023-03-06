import { ref } from "vue";
export default({
    name:"roleTrTable",
    props:["item", "index", "pagination", "onEdit","onDelete"],
    setup(){
        const isCopy = ref(false);
        const onCopy = (e:any)=>{
            isCopy.value = true;
            setTimeout(()=>{
                isCopy.value = false;
            },2000);
        }
        return{
            onCopy,isCopy
        }
    }
})