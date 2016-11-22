import { Injectable } from '@angular/core';
import * as PouchDb from 'pouchdb';

@Injectable()
export class FlashCardService {
  private _db;

  constructor() {
    this._db = new PouchDb('flashCards');
  }

  add(title, description) {
    return this._db.put({
      _id: Date.now().toString(),
      title,
      description
    });
  }

  get(id) {
    return this._db.get(id);
  }

  async getAll() {
    const data = await this._db.allDocs({
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
    return this._db.remove(doc._id, doc._rev);
  }
}
