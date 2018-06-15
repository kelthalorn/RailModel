import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import { routes } from "../app.routes";

export const APP_IMPORTS = [
    BrowserModule,
    RouterModule.forRoot(routes, {
        useHash: true
    }),
];
