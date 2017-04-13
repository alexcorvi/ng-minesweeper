import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { GameService } from "./app/services/game.service";

if (environment.production) { enableProdMode(); }
platformBrowserDynamic().bootstrapModule(AppModule, [ GameService ]);
