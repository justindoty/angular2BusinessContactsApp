import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyCbYukp2QnqX-5TCSbDBEEV0reId3bwkO0',
  authDomain: 'businesscontacts-20bfb.firebaseapp.com',
  databaseURL: 'https://businesscontacts-20bfb.firebaseio.com',
  storageBucket: 'businesscontacts-20bfb.appspot.com',
  messagingSenderId: '748030272269'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
