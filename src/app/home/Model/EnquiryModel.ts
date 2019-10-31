import Timestamp = firebase.firestore.Timestamp;
import * as firebase from 'firebase';

export interface EnquiryModel {
  date: Timestamp;
  name: string;
  number: number;
}
