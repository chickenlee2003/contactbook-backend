<template>
  <nav class="navbar navbar-expand navbar-dark bg-dark">
    <a href="/" class="navbar-brand">Ứng dụng quản lý danh bạ</a>
    <div class="mr-auto navbar-nav">
      <li class="nav-item">
        <router-link :to="{ name: 'contactbook' }" class="nav-link">
          Danh bạ
        </router-link>
      </li>
    </div>
  </nav>
</template>
