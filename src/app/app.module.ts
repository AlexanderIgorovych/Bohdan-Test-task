import {VideoService} from 'src/app/core/services/video.service';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {AgGridModule} from '@ag-grid-community/angular';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {VideoListComponent} from './view/video-list/video-list.component';
import {CheckRendererComponent} from './view/components/renderers/check-renderer/check-renderer';
import {LinkRendererComponent} from './view/components/renderers/link-renderer/link-renderer';
import {ThumbnailRendererComponent} from './view/components/renderers/thumbnail-renderer/thumbnail-renderer';
import {CheckboxHeaderComponent} from './view/components/header/checkbox-header/checkbox-header.component';
import {HeaderComponent} from './view/components/header/header.component';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {EffectsModule} from '@ngrx/effects';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {reducer} from './store/reducer';
import {AppEffects} from './store/effects';

@NgModule({
  declarations: [
    AppComponent,
    VideoListComponent,
    CheckRendererComponent,
    LinkRendererComponent,
    ThumbnailRendererComponent,
    CheckboxHeaderComponent,
    HeaderComponent
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AgGridModule.withComponents([
      CheckboxHeaderComponent,
      CheckRendererComponent,
      LinkRendererComponent,
      HeaderComponent,
      ThumbnailRendererComponent]),
    StoreModule.forRoot({state: reducer}),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    EffectsModule.forRoot([AppEffects]),
    StoreRouterConnectingModule.forRoot(),
    MatProgressSpinnerModule
  ],
  providers: [VideoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
