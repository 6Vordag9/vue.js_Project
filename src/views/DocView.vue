<template>
  <div class="common-layout">
    <el-container>
      
      <el-main>
        <el-scrollbar class="TableStyle">
          <el-table  :data="tableData"
         >
            <el-table-column  class="TitleColums" prop="date" label="Date" width="140" />
            <el-table-column  class="TitleColums" prop="name" label="Name" width="200" />
           
          </el-table>
        </el-scrollbar>
        
      </el-main>
    </el-container>
  </div>
</template>




<style>


el-table{
  background: lightcoral;
  font-family: 'Times New Roman', Times, serif;
  color-scheme: #929292;
}
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }


.flex-grow {
  flex-grow: 1;
}
.TableStyle{
  width: 80vw;
  
   
}
.TitleColums{
  width: 100vw;
   
}
</style>

<script lang="ts" setup>





import { onMounted, ref } from 'vue'
import { Menu as IconMenu, Message, Setting } from '@element-plus/icons-vue'
import { datatable } from '../../TP Class/TestMetApi'
import { getGlobalThis } from '@vue/shared';

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
let gg:string
let tableData=ref();

onMounted(() => {
  datatable("User","ffff").then((reseult)=> {
     
    let item = {
     date: '2016-05-04',
     name: reseult,
     }
    tableData.value = (Array.from({ length: 5 }).fill(item))
    console.log(item)
    console.log(tableData)
  })
})
 

</script>
