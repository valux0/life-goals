import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Meta } from '../models/meta.model';

@Injectable({
  providedIn: 'root'
})
export class MetaServiceService {
  constructor(private firestore: AngularFirestore) {}

  // Obtener todas las metas
  getMetas() {
    return this.firestore.collection('metas').valueChanges({ idField: 'id' });
  }

  // Agregar una meta nueva
  addMeta(meta: Meta) {
    return this.firestore.collection('metas').add(meta);
  }

  // Eliminar una meta
  deleteMeta(id: string) {
    return this.firestore.collection('metas').doc(id).delete();
  }
}