import { Injectable } from '@angular/core';
import * as PouchDb from 'pouchdb';

@Injectable()
export class FlashCardService {
  private db;

  constructor() {
    this.db = new PouchDb('flashCards');
  }

  add(title, description) {
    return this.db.put({
      _id: Date.now().toString(),
      title,
      description
    });
  }

  get(id) {
    return this.db.get(id);
  }

  async getAll() {
    const data = await this.db.allDocs({
      include_docs: true
    });
    return data.rows.map((row) => {
      return {
        _id: row.doc._id,
        _rev: row.doc._rev,
        title: row.doc.title,
        description: row.doc.description
      };
    });
  }

  delete(doc) {
    console.log('delete doc',doc);
    return this.db.remove(doc._id, doc._rev);
  }
}
