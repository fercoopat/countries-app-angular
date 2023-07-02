import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [SidebarComponent, FooterComponent, MenuComponent],
  imports: [CommonModule, RouterModule],
  exports: [SidebarComponent],
})
export class SharedModule {}
