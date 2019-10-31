import {Component, OnInit, ViewChild} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {EnquiryModel} from 'src/app/home/Model/EnquiryModel.js';
import {Observable} from 'rxjs';
import {MatSort} from '@angular/material';

@Component({
  selector: 'app-view-enquiry',
  templateUrl: './view-enquiry.component.html',
  styleUrls: ['./view-enquiry.component.css']
})

export class ViewEnquiryComponent implements OnInit {
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  enqCollectionRef: AngularFirestoreCollection<EnquiryModel>;
  enquiries: Observable<EnquiryModel[]>;
  displayedColumns: any;
  constructor(public afs: AngularFirestore) {
    this.enqCollectionRef = this.afs.collection<EnquiryModel>('Enquiry', ref =>
      ref.orderBy('date', 'desc'));
    this.enquiries = this.enqCollectionRef.valueChanges();

  }

  ngOnInit(): void {
    this.displayedColumns = ['Name', 'Phone', 'Time'];
  }
}
