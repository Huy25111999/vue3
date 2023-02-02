import {defineAsyncComponent} from "vue"

export function registerGlobalComponents(app:any){
    app.component("auth-layout",defineAsyncComponent(() =>import ("@/layouts/auth") ));
    app.component("default-layout",defineAsyncComponent(() =>import ("@/layouts/default") ));
}