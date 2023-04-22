<template>
  <div class="wrapper px-8 mt-5">
    <v-card class="p-4 mb-5 pb-3">
      <div class="table-container search-user">
        <v-card-title>Tìm kiếm người dùng</v-card-title>
        <div class="px-8">

          <!-- Search -->
          <Form
            @submit="handleSubmitFilter"
            ref="formRef"
            class="p-4"
            >
            <v-row no-gutters class="mb-5">
              <v-col cols="12" sm="6" md="6" class="pr-6">
                <InputField
                  name="name"
                  type="text"
                  :placeholder="`name`"
                  :label="`name`"
                  v-model.trim="formFilters.name"
                />
              </v-col>
              <v-col cols="12" sm="6" md="6" class="pr-6">
                <InputField
                  name="code"
                  :placeholder='`code`'
                  :label="`code`"
                  v-model.trim="formFilters.code"
                />
              </v-col>
            </v-row>
            <div class="actions mt-2 flex items-center justify-center">
              <v-btn
                rounded="pill"
                type="submit"
                color="primary"
                class="mr-4"
                elevation="0"
                >Search</v-btn
              >
              <v-btn
                @click="handleReset"
                variant="tonal" rounded="pill">
                Reset
              </v-btn>
            </div>
          </Form>

        </div>
      </div>
    </v-card>

    <v-card class="p-6 mb-5">
        <div class="flex justify-between">
          <v-card-title>
            Thông tin người dùng ( {{totalRoles }})
          </v-card-title>

          <v-btn 
            color="primary"
            rounded="pill"
            elevation="0"
            @click="()=> uiEvents.onShowAdd()"
           >
            Tạo mới
          </v-btn>
        </div>
        <v-table  >
          <thead>
            <tr>
              <th scope="col" class="text-center">
                <!-- <input class="form-check-input" type="checkbox" v-model="checked" name="checked"
                @change="onAllChecked($event)"> -->
                <v-checkbox v-model="selectAll" @click = "handleSelectAllRow">
                </v-checkbox>    
              </th>
              <th scope="col" class="text-center">STT</th>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col" class="text-center">Code</th>
              <th scope="col">Method</th>
              <th scope="col">Đường dẫn</th>
              <th scope="col" class="text-center" style="width:300px">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            <RoleTr 
              v-for="(item, index) in roleList"
              :key="item.id"
              :item = "item"
              :index = "index"
              :pagination="pagination"
              :onEdit="uiEvents.onShowEdit"
              :onDelete="uiEvents.onShowDelete"
              :setOfCheckedId = "setOfCheckedId"
              :onItemChecked = "onItemChecked"
              :ids = "ids"
              :onSelectRow = "handleSelectRow"
            />
          </tbody>
        </v-table>
        <div v-if="roleList.length === 0 && !loading" contenteditable="true"
          class="w-full flex justify-center items-center"
        >
          <img src="@/assets/image/no-data.png" />
        </div>

        <div class="flex justify-end items-center m-5">
          <v-pagination
            v-if="totalPage > 1"
            :length="totalPage"
            @update:modelValue="onPaginate"
            rounded="circle"
            :total-visible="7"
          ></v-pagination>
        </div>
    </v-card>
  </div>

    <RoleAdd
      :show = "showAdd"
      :onHide = "uiEvents.onHideAdd"    
      :fetchRolesFn="fetchRolesFn"

    />

    <RoleEdit 
        :show="showEdit"
        :onHide="uiEvents.onHideEdit"
        :fetchRolesFn="fetchRolesFn"
        :roleSelected="roleSelected"
    />

    <ModalDelete 
      :show="showDelete"
      :onHide="uiEvents.onHideDelete"
      :handleDelete="onDelete"
      :content="'Xóa quyền'"
      :title="`Bạn có chắc chắn muốn xóa '${roleSelected?.code}'`"
    />
</template>

<script src="./pagination.ts" lang="ts"></script>
