<template>
    <tr>
        <td>
            <!-- <input class="form-check-input" type="checkbox" v-model="isChecked" name="isChecked"
            @change="$props.onItemChecked($props?.item?.id, $event)">
         -->
         <v-checkbox class="form-check-input" v-model="isChecked" @click="handleSelectRow"> </v-checkbox>
     
        </td>
        <td >{{$props.pagination.pageSize * ($props.pagination.pageNumber-1) + $props.index + 1}}</td>
        <td>
            <div class="flex items-center">
                <p class="w-[250px] truncate">{{$props?.item?.id}}</p>
                <v-tooltip v-if="String($props?.item?.id).length >30" activator="parent" location="top">
                    {{$props?.item?.id}}
                </v-tooltip>
                <button class="cursor-pointer coppy-btn"
                    v-clipboard:copy="$props?.item?.id"
                    v-clipboard:success="onCopy"
                >
                    <font-awesome-icon v-if="!isCopy" icon="fa-solid fa-copy" />
                    <font-awesome-icon v-else icon="fa-solid fa-check" />
                </button>
            </div>
        </td>
        <td><p>{{$props?.item?.name}}</p></td>
        <td><p >{{$props?.item?.code}}</p></td>
        <td><p>{{$props?.item?.method}}</p></td>
        <td><p>{{$props?.item?.path}}</p></td>
        <td>
            <div class="flex justify-center">
                <span @click="$props.onEdit($props.item)" class="material-icons text-blue-700 mr-4">edit</span>
                <span @click="$props.onDelete($props.item)" class="material-icons text-red">delete</span>
            </div>
        </td>
    </tr>
</template>
<script src="./roleTrTable.ts"></script>
<style lang="scss" scoped>
.coppy-btn {
  color: rgb(171 166 166 / 80%);
}
</style>