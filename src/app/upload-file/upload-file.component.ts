import {Component, OnInit} from '@angular/core';
import {AngularFireStorage} from '@angular/fire/storage';
// import {join} from 'path';
import {finalize} from 'rxjs/operators';
import firebase from 'firebase';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {
  // avatar: any;
  // private imgSrc: any;
  // private selectedImage: any;

  constructor(private storage: AngularFireStorage) {
  }

  ngOnInit(): void {
  }

  // showPreview(event: Event) {
  //   // @ts-ignore
  //   if (event.target.event[0] && event.target.files) {
  //     const reader = new FileReader();
  //     reader.onload = (e: any) => this.imgSrc = e.target.result;
  //     // @ts-ignore
  //     reader.readAsDataURL(event.target.files[0]);
  //     // @ts-ignore
  //     this.selectedImage = event.target.files[0];
  //     this.submit();
  //   } else {
  //     this.imgSrc = '../../../assets/img/placeholder.jpg';
  //     this.selectedImage = null;
  //   }
  // }
  //
  // submit() {
  //   if (this.selectedImage != null) {
  //     const filePath = `avatar/${this.selectedImage.name.split('.').slice(0, -1)}`;
  //     const fileRef = this.storage.ref(filePath);
  //     this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
  //       finalize(() => {
  //         fileRef.getDownloadURL().subscribe(url => {
  //           this.imgSrc = url;
  //         });
  //       })
  //     ).subscribe();
  //   }
  // }



  uploadImage() {

    // Kết nối firebase
    const ref = firebase.storage().ref();
    // @ts-ignore
    const file = document.querySelector('#photo').files[0];
    // lấy kiểu của file
    const metadata = {
      contentType: file.type
    };

    const name = file.name;
    const uploadIMG = ref.child(name).put(file, metadata);
    // todo: lấy URL
    uploadIMG
      .then(snapshot => snapshot.ref.getDownloadURL())
        .then(url => {
          console.log(url);
        }).catch(console.error)
  }

}
