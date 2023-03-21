<template>
  <div class="common-layout">
    <el-container>
      
      <el-main>
  
        <p>{{ nameTitle }}</p>
    
        <p>{{ priceTitle }}</p>
 
        <p>{{ sostavTitle }}</p>
        <el-button type="success" @click="sortByPrice" >Сортировать в верх </el-button>
        <el-button type="success" @click="sortByPricemenus">Сортировать в низ </el-button>
        <el-button type="success" @click="FiltrationByPricemenus"> Фильтровать товар который меньше 300 </el-button>
        <el-scrollbar class="TableStyle">
          <el-table    class="Table"  :data="tableData" @row-click="CliclRowFuction" @sort-change="sortByPrice"
         >
            <el-table-column    class="TitleColums" prop="name" label="Name" width="140" />
            <el-table-column  class="TitleColums" prop="price" label="Price" width="200" />
           
          </el-table>
          <h1 :data="InfoProduct"></h1>
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
import { Key, Menu as IconMenu, Message, Setting } from '@element-plus/icons-vue'
import { getGlobalThis } from '@vue/shared';
import { rowKey } from 'element-plus/es/components/table-v2/src/common';
import { computed } from '@vue/reactivity';
// import { Food } from '../../TP Class/ConstructorTable'


let gg:string
let tableData=ref();
let nameTitle=ref()
let priceTitle =ref()
let sostavTitle=ref()
let InfoProduct:string
interface Food {
    name: string,
    price: number,
    sostav: string
}
let experiment1: Array<Food> = [
  { name: 'Картошка', price: 150,sostav:'Картошка и вода' },
  { name: 'Макароны', price: 100,sostav:'Макароны и вода'  },
  { name: 'Супчик', price:300 ,sostav:'Картошка, мясо, вода'  }
    ];


tableData.value = experiment1
console.log(experiment1)
console.log(tableData)

function sortByPrice() { 
      tableData.value = null;
      let someUsers2 =    experiment1.sort(
    (firstObject: Food, secondObject: Food) =>
    	(firstObject.price > secondObject.price) ? 1 : -1
      
    );
      tableData.value = someUsers2
      console.log(someUsers2)
      console.log(tableData)
      console.log(rowKey)
}

function sortByPricemenus(sort:any) { 
  let someUsers1 =   experiment1.sort(
    (firstObject: Food, secondObject: Food) =>
    	(firstObject.price < secondObject.price) ? 1 : -1
);

    console.log(someUsers1)
    tableData.value = someUsers1
    console.log(tableData)
    
}

function FiltrationByPricemenus() { 
  
  let someUsers = experiment1.filter(item => item.price < 150);

    console.log(someUsers)
    tableData.value = someUsers
    console.log(tableData)
    
}
function CliclRowFuction(row: any) { 
  console.log(nameTitle)
   sostavTitle=row.sostav
   nameTitle=row.name
   priceTitle=row.price
 console.log(nameTitle)

}




</script>
