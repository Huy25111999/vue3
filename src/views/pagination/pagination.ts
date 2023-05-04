import {
    computed,
    defineComponent,
    onMounted,
    reactive,
    ref,
    watch,
    watchEffect,
  } from "vue";
// Components form
import { Form } from "vee-validate";
import InputField from "@/assets/controls/InputField.vue";


import type {Enum}  from "@/types"; 
import * as actions from "@/api/roles/roleActions";
import store from "@/vuex/store";

//modal
import RoleAdd from  "./role-add/roleAdd.vue";
import RoleEdit from "./role-edit/roleEdit.vue";
import RoleTr from "./role-tr/roleTrTable.vue";
import ModalDelete from "@/components/modal-delete/ModalDelete.vue";

export default defineComponent({
  name: 'HomeView',

  components: {
    InputField,
    Form,
    RoleTr,
    RoleAdd,
    RoleEdit,
    ModalDelete
  },
  setup(props, ctx){
    const formFilters = reactive<Enum.IParamRoles>({
        name: "",
        code: "",
    });

    const pagination = reactive({
      pageNumber: 1,
      pageSize: 10,
    });

    // search role
    const handleSubmitFilter = () => {
      const params: any = {
        page: pagination.pageNumber,
        size: pagination.pageSize,
        code: formFilters.code?.trim(),
        name: formFilters.name?.trim(),
      };
      actions.fetchAllRoleFilters(params);
    };

    //Reset
    const formRef = ref();

    const handleReset = ()=>{
      formRef.value.resetForm();
      fetchRolesFn();
    }

    // pagination datatable
    const roleList = computed( ()=>
      store.getters.role.roleList as any
      )
   
      // roleList.value = [
      //   {
      //     id: "1233473485304830480348038573454937",
      //     name: 'Frozen Yogurt',
      //     code: "acns",
      //     method: "GET",
      //     path: "145.279.4.12",
      //   },
      //   {
      //     id: "12483648736487263482374892374892374982",
      //     name: 'Ice cream sandwich',
      //     code: "3823",
      //     method: "POST",
      //     path: "145.279.4.12",
      //   },
      //   {
      //     id:"347384792834789234w7294792233",
      //     name: 'Eclair',
      //     code: "3424",
      //     method: "DELETE",
      //     path: "145.279.4.12",
      //   },
      //   {
      //     id: "123283y79283749837493879843",
      //     name: 'Frozen Yogurt',
      //     code: "acns",
      //     method: "GET",
      //     path: "145.279.4.12",
      //   },
      //   {
      //     id: "1248397483478384834838483",
      //     name: 'Ice cream sandwich',
      //     code: "3823",
      //     method: "POST",
      //     path: "145.279.4.12",
      //   },
      //   {
      //     id:"34733o497938479494397",
      //     name: 'Eclair',
      //     code: "3424",
      //     method: "DELETE",
      //     path: "145.279.4.12",
      //   },
      //   {
      //     id: "12483648736487263482374892374892374982",
      //     name: 'Ice cream sandwich',
      //     code: "3823",
      //     method: "POST",
      //     path: "145.279.4.12",
      //   }
        
      // ]

    const totalRoles = computed(() => store.getters.role.total);
    const loading = computed(() => store.getters.role.loading);

    const fetchRolesFn = () => {
      const params:Enum.IParamRoles = {
        page: pagination.pageNumber,
        size: pagination.pageSize,
      };

      actions.fetchAllRoleFilters(params);
    };

    onMounted(() => {
      fetchRolesFn();
    });
    

    watch(pagination, () => {
      fetchRolesFn();
    });
    
    const onPaginate = (pageNumber: number) => {
      pagination.pageNumber = pageNumber;
      console.log('page',pageNumber)
    };


    const totalPage = computed(() =>
      Math.ceil(totalRoles.value / pagination.pageSize)
    );

    // add - edit role
    const showAdd = ref(false);
    const showEdit = ref(false);
    const showDelete = ref(false);
    const roleSelected = ref<Enum.IRole>();

    const uiEvents = {
      onShowAdd: () =>{
        showAdd.value = true
      },

      onHideAdd :()=>{
        showAdd.value = false
      },

      onShowEdit: (role: Enum.IRole) =>{
        showEdit.value = true
        roleSelected.value = role
        console.log("roleSelected",roleSelected);
        
      },

      onHideEdit :(role: Enum.IRole)=>{
        showEdit.value = false
        roleSelected.value = role
      },

      onShowDelete: (role: Enum.IRole) =>{
        showDelete.value = true
        roleSelected.value = role
        console.log("roleSelected",roleSelected);
        
      },

      onHideDelete :(role: Enum.IRole)=>{
        showDelete.value = false
        roleSelected.value = role
      }
    }

    // Delete
    const onDelete=()=>{
      const params: Enum.IRole = {
        id: roleSelected.value?.id,
      };
      console.log("params delete", params);
      
    }

    // checkbox angualar------------
    // const checked = ref(false);
    // const setOfCheckedId = new Set<any>();
    // const itemRecord = ref<any>([]);

    // const onAllChecked = (value: boolean)=>{
    //   if(roleList){
    //     console.log("roleList", roleList);
    //     roleList.value.forEach((item: any) => updateCheckedSet(item?.id, value));
    //     refreshCheckedStatus();
    //   }
    // };

    // const onItemChecked = (id: any, checked: boolean)=>{
    //   updateCheckedSet(id, checked);
    //   refreshCheckedStatus();
    // };

    // const updateCheckedSet= (id:any, checked: boolean)=>{
    //   console.log("checkedSet", id);
      
    //   if(checked){
    //     setOfCheckedId.add(id);

    //     const getItemFromId = roleList.value.filter((e :any )=>{
    //       return e.id = id
    //     })
    //     if(getItemFromId){
    //       itemRecord.value.push(getItemFromId[0]);
    //     }
    //     console.log("itemRecord", itemRecord.value);
    //   }else{
    //     setOfCheckedId.delete(id);
    //     const getItemFromId = itemRecord.value.filter((e :any )=>{
    //       return e.id = id
    //     })
    //     if(getItemFromId){
    //       itemRecord.value.splice(getItemFromId, 1);
    //     }
    //   }
    // }

    // const refreshCheckedStatus = ()=>{  
    //   checked.value = roleList.value.every((e: any) => setOfCheckedId.has(e.id))
    // }

    // checkbox new
    const selectAll = ref<boolean>(false);
    const ids = ref<Array<string>>([]);

    const handleSelectAllRow  = ()=>{
      selectAll.value =  !selectAll.value ;
      if(selectAll.value){
        ids.value = roleList.value.map((e:any) => {return  e});
        console.log("ids.value", ids.value);
      }else{
        ids.value = [];
        console.log("----", ids.value);
      };  
    };

    const handleSelectRow =(item:any)=>{          
      if(!ids.value.map((k:any) =>k.code).includes(item.code)){       
        ids.value.push(item);        
      }else{
        ids.value = ids.value.filter((e:any) =>{
          if(e.code !== item.code){
            return e;
          }
        });
      };
      console.log(' ids.value', ids.value);
    };  

    watchEffect(() => {
      //ids.value = props.groupRoleSelected?.roles || [];
      console.log("slectAdd--length", ids.value.length);
      console.log("pagination.pageSize * pagination.pageNumber", pagination.pageSize * pagination.pageNumber);
      

      if (ids.value.length == pagination.pageSize * pagination.pageNumber) {
      //if (ids.value.length === roleList.value.length) {
        selectAll.value = true;
        console.log("slectAdd--", selectAll.value);
        
      } else {
        selectAll.value = false;
        console.log("slectAdd--1111--", selectAll.value);
      }
    });

    return{
      //Search form
        formFilters,
        handleSubmitFilter,
        // Reset
        formRef,
        handleReset,
        //pagination
        fetchRolesFn,
        roleList,
        loading,
        onPaginate,
        totalPage,
        totalRoles,
        pagination,
        // modal role
        uiEvents,
        showAdd,
        // edit
        showEdit,
        roleSelected,
        //Xóa
        showDelete,
        onDelete,

        //checkbox new
        handleSelectAllRow,
        selectAll,
        ids,
        handleSelectRow,

    }
  }
});