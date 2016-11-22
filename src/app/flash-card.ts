export class FlashCard {
  _id: string;
  _rev: string;
  title: string;
  description: string;

  constructor(title = '', description = '') {
    this._id = new Date().toISOString();
    this.title = title;
    this.description = description;
  }
}
