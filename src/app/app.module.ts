import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { APP_IMPORTS } from "./module/app-imports.module";
import { APP_DECLARATION } from "./module/app-declaration.module";

import {registerLocaleData} from "@angular/common";
import localeFr from "@angular/common/locales/fr";

registerLocaleData(localeFr);

@NgModule({
  declarations: [...APP_DECLARATION],
  imports: [...APP_IMPORTS],
  bootstrap: [AppComponent]
})
export class AppModule { }
