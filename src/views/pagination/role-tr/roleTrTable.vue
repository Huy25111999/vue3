<template>
    <tr>
        <td>{{$props.pagination.pageSize * ($props.pagination.pageNumber-1) + $props.index + 1}}</td>
        <td>{{$props?.item?.id}}</td>
        <td>{{$props?.item?.name}}</td>
        <td>{{$props?.item?.code}}</td>
        <td>{{$props?.item?.method}}</td>
        <td>{{$props?.item?.path}}</td>
        <td @click="$props.onEdit($props.item)">edit</td>
        <td @click="$props.onDelete($props.item)">delete</td>
    </tr>
</template>
<script src="./roleTrTable.ts"></script>