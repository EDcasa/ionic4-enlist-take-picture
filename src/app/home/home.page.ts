import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  image: string = null;
  //images: string = null;
  images= [];
  constructor(private camera: Camera) {}

  getPicture(){
    let options: CameraOptions = {
      destinationType : this.camera.DestinationType.DATA_URL,
      targetWidth: 1000,
      targetHeight: 1000,
      quality: 100,
      saveToPhotoAlbum: true
    }
    this.camera.getPicture( options )
    .then(ImageData => {
      console.log("ingresando a la funcion");
     // this.image.concat(`data:image/jpeg;base64,${ImageData}`);
     this.image = `data:image/jpeg;base64,${ImageData}`;
     var temp = {path:this.image};
     console.log(temp);
     this.images.push(temp);
     console.log("LOG IMG"+this.images);
    })
    .catch( error => {
      console.log(error); 
    }
    )
  }
}
