import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImportOnce } from './class/import-once';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CoreModule extends ImportOnce { 
  constructor(@SkipSelf() @Optional() parent: CoreModule) {
    super(parent);
  }
}
