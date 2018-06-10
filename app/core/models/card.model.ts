export class Card {
  name: string;
  description: string;
  paymentDate: string;
  value: number;
  id: string;
}

export class CardsContainer {
  cardList: Card[] = [];
  totalPeriod: number;
}
