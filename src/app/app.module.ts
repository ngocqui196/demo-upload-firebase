import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFireStorageModule} from '@angular/fire/storage';
import { UploadFileComponent } from './upload-file/upload-file.component';
import {ReactiveFormsModule} from '@angular/forms';
import { CityComponent } from './city/city.component';

@NgModule({
  declarations: [
    AppComponent,
    UploadFileComponent,
    CityComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
