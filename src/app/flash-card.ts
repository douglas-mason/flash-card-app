export class FlashCard {
  id: string;
  title: string;
  description: string;

  constructor(title = '', description = '') {
    this.id = new Date().toISOString();
    this.title = title;
    this.description = description;
  }
}
