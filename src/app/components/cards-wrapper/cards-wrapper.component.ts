import { Component } from '@angular/core';
import { ICardData } from '../../shared/interfaces/cards.interface';
import { mockedCardsData } from '../../shared/constants/mocked-cards-data.constant';

@Component({
  selector: 'app-cards-wrapper',
  templateUrl: './cards-wrapper.component.html',
  styleUrls: ['./cards-wrapper.component.scss']
})
export class CardsWrapperComponent {
  public cards: ICardData[] = mockedCardsData;
}
