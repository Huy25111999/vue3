import { ref, watchEffect, defineComponent, watch } from "vue";
export default defineComponent({
    name:"roleTrTable",
    props:["item", "index", "pagination", "onEdit","onDelete", "onItemChecked", "setOfCheckedId",
            "onSelectRow", "ids"
            ],
    setup(props, ctx){
        const isCopy = ref(false);
        const isChecked = ref(false);
        const onCopy = (e:any)=>{
            isCopy.value = true;
            setTimeout(()=>{
                isCopy.value = false;
            },2000);
        }
        // watch(isChecked,() => {
        //     if(isChecked.value){
        //         props.setOfCheckedId.has(props.item.id)
        //         console.log(props.setOfCheckedId.has(props.item.id));
        //     }
            
            // const arr= props.ids.map((e:any) => e.code);       
            // if (arr.includes(props.item.code)) {
            //   isChecked.value = true;
            // } else {
            //   isChecked.value = false;
            // }
         // });
         const handleSelectRow = () => {            
            props.onSelectRow(props.item);  
          };

          watchEffect(() => {
            const arr = props.ids.map((e:any) => e.code);
            if (arr.includes(props.item.code)) {
                isChecked.value = true;
              } else {
                isChecked.value = false;
              };

          });

        return{
            onCopy,isCopy, isChecked, handleSelectRow
        }
    }
})