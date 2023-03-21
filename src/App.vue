<script setup lang="ts">

import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'


</script>

<template>
 
    
    <div class=""> 
     

     
        <el-menu class="leftMenu"
        default-active="2"
        active-text-color="#ffd04b"
        background-color="#545c64"
        
        text-color="#fff"
     
       
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>Navigator One</span>
          </template>
          <el-menu-item-group title="Group One">
            <el-menu-item index="1-1">item one</el-menu-item>
            <el-menu-item index="1-2">item two</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group Two">
            <el-menu-item index="1-3">item three</el-menu-item>
          </el-menu-item-group>
          <el-sub-menu index="1-4">
            <template #title>item four</template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <RouterLink  to="/">
        <el-menu-item index="2">
          <el-icon><icon-menu /></el-icon>
         <span>Home</span>
        </el-menu-item>
      </RouterLink>
        <RouterLink to="/about">
        <el-menu-item index="3">
          <el-icon><document /></el-icon>
          <span>About</span>
        </el-menu-item>
      </RouterLink>
        <RouterLink to="/doc">
        <el-menu-item index="4">
         
          <el-icon><setting /></el-icon>
          <span >Docum</span>
        </el-menu-item>
        </RouterLink> 
        <RouterLink to="/table">
        <el-menu-item index="5">
         
          <el-icon><setting /></el-icon>
          <span >Table</span>
        </el-menu-item>
        </RouterLink> 
      </el-menu>
      
        <!-- <RouterLink  to="/"><el-button plain  type="primary" >Home</el-button></RouterLink>
        <RouterLink to="/about"><el-button plain type="info" >About</el-button></RouterLink>
        <RouterLink to="/doc"><el-button   type="success" plain>Document</el-button></RouterLink>
         -->
        
      
  </div>
  
<div class="vievPadding">
  <RouterView />
</div>

</template>

<style scoped>

.leftMenu {
  border-right: solid 0px var(--el-menu-border-color);
    list-style: none;
    position: fixed;
    margin: 0;
    padding-left: 0;
    background-color: var(--el-menu-bg-color);
    box-sizing: border-box;
    height:max-content ;
    height: 100vh;

}
.vievPadding{
  justify-content: center;
    align-content: space-between;
  display:grid;
  position: fixed;
  margin-left: 25vw;
  margin-right: 25vw;
  padding-left: 1fr 10fr;
  
}

</style>
