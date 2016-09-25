import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import { provideRouter } from '@angular/router';

const platform = platformBrowserDynamic();


platform.bootstrapModule(AppModule);
