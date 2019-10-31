import { Component } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Notice} from './notice.model';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css']
})

export class NoticeComponent {
  noticecollectionref: AngularFirestoreCollection<Notice>;
  noticee: Observable<Notice[]>;

  constructor(public afs: AngularFirestore) { this.noticecollectionref = this.afs.collection<Notice>('Notice');
                                              this.noticee = this.noticecollectionref.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Notice;
        const id = a.payload.doc.id;
        return {id, ...data};
      });
    }));
  }

}
