import {Component, OnInit} from '@angular/core';
import {MenuItem, Message, MessageService} from 'primeng/api';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {EnquiryContact} from 'src/app/home/Model/EnquiryContact';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-enquiry-contact',
  templateUrl: './enquiry-contact.component.html',
  styleUrls: ['./enquiry-contact.component.css']
})

export class EnquiryContactComponent implements OnInit {
  items: MenuItem[];
  display = false;
  disp = false;
  classs: any;
  visible = true;
  number: EnquiryContact['number'];
  name: EnquiryContact['name'];
  date: EnquiryContact['Date'];
  item: any[];
  msgs: Message[];
  enquirycollectionref: AngularFirestoreCollection<EnquiryContact>;
  values: Observable<EnquiryContact[]>;

  constructor(public afs: AngularFirestore, public snack: MatSnackBar) {
    this.enquirycollectionref = this.afs.collection<EnquiryContact>('Enquiry');
    // this.todo = this.todoCollectionRef.valueChanges();
    this.values = this.enquirycollectionref.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as EnquiryContact;
        const id = a.payload.doc.id;
        return {id, ...data};
      });
    }));
  }

  Submit() {
    if (this.name && this.number !== null) {
      this.date = new Date();
      this.afs.collection('Enquiry').add({name: this.name, number: this.number, date: this.date});
      this.snack.open('Sucessfully Done', 'Dismiss', {duration: 2000});
      this.name = null;
      this.number = null;
      this.date = null;
      document.getElementById('close').style.display = 'none';
    } else {
      this.snack.open('Error', 'Dismiss', {duration: 2000});
    }
  }

  ngOnInit(): void {
  }
}
