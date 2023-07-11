import { Component, Input } from '@angular/core';
import { ICardData } from '../../shared/interfaces/cards.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() card!: ICardData;
  @Input() descriptionVisible = false;
}
