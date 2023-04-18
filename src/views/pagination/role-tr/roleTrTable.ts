import { ref, watchEffect, defineComponent, watch } from "vue";
export default defineComponent({
    name:"roleTrTable",
    props:["item", "index", "pagination", "onEdit","onDelete", "onItemChecked", "setOfCheckedId"],
    setup(props, ctx){
        const isCopy = ref(false);
        const isChecked = ref(false);
        const onCopy = (e:any)=>{
            isCopy.value = true;
            setTimeout(()=>{
                isCopy.value = false;
            },2000);
        }
        watch(isChecked,() => {
            console.log("----props.item",isChecked.value );
            if(isChecked.value){
                props.setOfCheckedId.has(props.item.id)
                console.log(props.setOfCheckedId.has(props.item.id));
            }
            
            // const arr= props.ids.map((e:any) => e.code);       
            // if (arr.includes(props.item.code)) {
            //   isChecked.value = true;
            // } else {
            //   isChecked.value = false;
            // }
          });
        return{
            onCopy,isCopy, isChecked
        }
    }
})