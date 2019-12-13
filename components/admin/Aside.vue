<template>
  <el-menu :style="{height: '100%'}" :default-active="$route.path" router>
    <el-menu-item index="/admin">
      <i class="el-icon-menu"></i>
      <span>Analitics</span>
    </el-menu-item>
    <el-menu-item index="/admin/create">
      <i class="el-icon-edit"></i>
      <span>Create</span>
    </el-menu-item>
    <el-menu-item index="/admin/list">
      <i class="el-icon-tickets"></i>
      <span>Posts list</span>
    </el-menu-item>
    <el-menu-item index="/admin/user">
      <i class="el-icon-user-solid"></i>
      <span>Users</span>
    </el-menu-item>
    <el-menu-item index="/admin/logout">
      <i class="el-icon-error"></i>
      <span>Logout</span>
    </el-menu-item>
  </el-menu>
</template>