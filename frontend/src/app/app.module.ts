import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverviewComponent } from './overview/overview.component';
import { OverviewTableComponent } from './overview/child_components/overview-table/overview-table.component';
import { UrlCreatorComponent } from './overview/child_components/url-creator/url-creator.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    OverviewTableComponent,
    UrlCreatorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    TableModule,
    ButtonModule,
    RippleModule,
    InputTextModule,
  ],
  providers: [OverviewComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
