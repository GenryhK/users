import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {UsersComponent} from './users/users.component';
import {FormsModule} from '@angular/forms';
import {UsersBaseComponent} from './users-base/users-base.component';
import {HttpModule} from '@angular/http';
import {HoverDirective} from './users/hover.directive';
import {SearchPipe} from './users-base/search.pipe';
import {RouterModule} from '@angular/router';
import { TestComponentComponent } from './test-component/test-component.component';

const routes = [
  {path: '', component: UsersBaseComponent},
  {path: 'test', component: TestComponentComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UsersBaseComponent, HoverDirective, SearchPipe, TestComponentComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
