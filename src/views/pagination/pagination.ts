import {
    computed,
    defineComponent,
    onMounted,
    reactive,
    ref,
    watch,
  } from "vue";
// Components form
import { Form } from "vee-validate";
import InputField from "@/assets/controls/InputField.vue";
import  {Enum}  from "@/types"; 
import * as actions from "@/api/roles/roleActions";
import RoleTr from "./role-tr/roleTrTable.vue";
import store from "@/vuex/store";

//modal
import RoleAdd from  "./role-add/roleAdd.vue"
import RoleEdit from "./role-edit/roleEdit.vue"
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
    // const roleList: Array<Enum.IRole> = computed( ()=>
    //   store.getters.role.roleList as any
    //   )
    
    const roleList = [
      {
        id: "1233473485304830480348038573454937",
        name: 'Frozen Yogurt',
        code: "acns",
        method: "GET",
        path: "145.279.4.12",
      },
      {
        id: "12483648736487263482374892374892374982",
        name: 'Ice cream sandwich',
        code: "3823",
        method: "POST",
        path: "145.279.4.12",
      },
      {
        id:"347384792834789234w7294792233",
        name: 'Eclair',
        code: "3424",
        method: "DELETE",
        path: "145.279.4.12",
      },
      {
        id: "123283y79283749837493879843",
        name: 'Frozen Yogurt',
        code: "acns",
        method: "GET",
        path: "145.279.4.12",
      },
      {
        id: "1248397483478384834838483",
        name: 'Ice cream sandwich',
        code: "3823",
        method: "POST",
        path: "145.279.4.12",
      },
      {
        id:"34733o497938479494397",
        name: 'Eclair',
        code: "3424",
        method: "DELETE",
        path: "145.279.4.12",
      },
      
    ]

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
        //X??a
        showDelete,
        onDelete

    }
  }
});