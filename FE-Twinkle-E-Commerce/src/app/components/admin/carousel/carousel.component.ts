import { Component, Input, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';
import { ProductService } from 'src/app/service/product.service';

interface carouselImage {
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit{
  @Input() images: carouselImage[] = []
  @Input() indicators = true;
  @Input() controls = true;
  @Input() autoSlide = false;
  @Input() slideInterval = 3000; // Default to 3 seconds

  selectedIndex = 0;

  ngOnInit(): void {
    if(this.autoSlide) {
      this.autoSlideImages();
    }
  }


  // Changes slide in every 3 seconds
  autoSlideImages(): void {
    setInterval(() => {
      this.onNextClick();
    }, this.slideInterval);
  }

  // sets index of image on dot/indicator click
  selectImage(index: number): void {
    this.selectedIndex = index;
  }

  onPrevClick(): void {
    if(this.selectedIndex === 0) {
      this.selectedIndex = this.images.length - 1;
    } else {
      this.selectedIndex--;
    }
  }

  onNextClick(): void {
    if(this.selectedIndex === this.images.length -1) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex++;
    }
  }

  title = 'carousel';

  imagesnicexu = [
    {
      imageSrc:
        './assets/images/vans.gif',
      imageAlt: 'vans1',
    },
    {
      imageSrc:
        './assets/images/nike.gif',
      imageAlt: 'nike2',
    },
    {
      imageSrc:
        './assets/images/adidas.gif',
      imageAlt: 'adidas3',
    },
    {
      imageSrc:
        './assets/images/converse.gif',
      imageAlt: 'converse4',
    },
  ]

  // imagesnicexu: {imageSrc: string, imageAlt: string}[] = [];
  
}
