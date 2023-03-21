import { mockApi } from "./Mockapi";    


    mockApi.subscribe("User","ffff",()=>{
        return Promise.resolve("Привет"
        )
    })


export async function  datatable(table:string, operation:string) {
    console.log(await mockApi.postData(table,operation))
   
    return mockApi.postData(table,operation);
}

