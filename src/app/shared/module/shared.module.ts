import { NgModule  } from '@angular/core';
import { HeaderComponent } from 'src/app/header/header.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [HeaderComponent],
    imports: [CommonModule],
    exports: [HeaderComponent, CommonModule]
})


export class SharedModule{}