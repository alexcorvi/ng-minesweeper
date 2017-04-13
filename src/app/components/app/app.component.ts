import { Component } from '@angular/core';
import { GameService } from "../../services/game.service";

@Component({
	selector: 'app-app',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	constructor(public game: GameService) { }
}