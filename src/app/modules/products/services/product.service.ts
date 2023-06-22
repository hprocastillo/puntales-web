import {Injectable} from '@angular/core';
import {
  collection,
  collectionData,
  CollectionReference,
  doc,
  docData,
  Firestore,
  orderBy,
  query
} from "@angular/fire/firestore";
import {Observable} from "rxjs";
import {Product} from "../interfaces/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productsCollection: CollectionReference;

  constructor(private firestore: Firestore) {
    this.productsCollection = collection(this.firestore, 'products');
  }

  getProducts() {
    const q = query(this.productsCollection, orderBy('createdAt', 'desc'));
    return collectionData(q, {idField: 'id'}) as Observable<Product[]>;
  }

  getProductById(id: string): Observable<Product> {
    const productDocumentReference = doc(this.firestore, `products/${id}`);
    return docData(productDocumentReference, {idField: 'id'}) as Observable<Product>;
  }
}
