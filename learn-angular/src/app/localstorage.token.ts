import { InjectionToken } from "@angular/core";

export const localStorageToken = new InjectionToken('lolcalStorage', {
    providedIn: 'root',
    factory() {
        return localStorage;
    }
});