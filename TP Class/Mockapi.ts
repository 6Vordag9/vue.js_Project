



class MockApi{
    
    url:string|undefined
   
    CallbackMap: Record<string,Record<string,()=> Promise<any>>>={}
   constructor(URL:string)
   {
    this.url = URL
   }
    subscribe(endpoint:string,metod:string,callback:()=> Promise<any>){
        this.CallbackMap[endpoint] = {[metod]:callback}
    }

    
    async postData(endpoint:string,metod:string){
        const result = await this.CallbackMap[endpoint][metod]()
        return result
   }
    
   
    
}
let url = "html.com"
export const mockApi = new MockApi(url);



