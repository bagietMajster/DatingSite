import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/UserModel';
import { UserService } from 'src/app/Services/user.service';
import { AlertifyService } from 'src/app/Services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: UserModel;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor(private userServices: UserService, private alertify: AlertifyService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.user = data.user;

      this.galleryOptions = [
        {
            width: '500px',
            height: '400px',
            thumbnailsColumns: 4,
            imagePercent: 100,
            preview: false,
            imageAnimation: NgxGalleryAnimation.Slide
        }
    ];

      this.galleryImages = this.getImages();
    });
  }

    getImages() {
      const imageUrls = [];

      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < this.user.photos.length; i++) {
        imageUrls.push({
          small: this.user.photos[i].url,
          medium: this.user.photos[i].url,
          big: this.user.photos[i].url,
          description: this.user.photos[i].description
        });
      }
      return imageUrls;
    }
}
