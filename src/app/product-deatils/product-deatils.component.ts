import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-deatils',
  imports: [RouterModule, CommonModule],
  templateUrl: './product-deatils.component.html',
  styleUrls: ['./product-deatils.component.css'] // should be styleUrls (plural)
})
export class ProductDeatilsComponent implements OnInit {
  productId: number | null = null;
  product: any = null;

    products = [
    { id: 1, name: "Iphone 6s", price: 4000, location: "SM Baguio", details: "Pre-owned, good condition" },
    { id: 2, name: "Iphone X", price: 6000, location: "SM San Fernando", details: "Excellent condition, with charger" },
    { id: 3, name: "HyperX Cloud Stinger 2 Core Gaming Headset", price: 6500, location: "SM Baguio", details: "Like new, lightweight design" },
    { id: 4, name: "Apple AirPods 4", price: 4900, location: "SM Tarlac", details: "Brand new, sealed box" },
    { id: 5, name: "Iphone 12 ProMax", price: 12000, location: "SM Rosales", details: "Like brand-new, 128GB storage" },
    { id: 6, name: "Samsung Galaxy S25 256GB", price: 57990, location: "SM Baguio", details: "Latest model, 1 year warranty" },
    { id: 7, name: "Samsung Galaxy A16 LTE", price: 7990, location: "SM Bulacan", details: "Affordable and reliable" },
    { id: 8, name: "ThinkPad X1 Carbon Gen 13 Aura Edition", price: 81522, location: "SM Rosales", details: "Business laptop, lightweight" },
    { id: 9, name: "Aspire A15-51M-56E2 OPI Steel Gray", price: 38400, location: "SM San Fernando", details: "15.6-inch display, Intel i5" },
    { id: 10, name: "Acer Nitro V Gaming Laptop", price: 52999, location: "SM Rosales", details: "Gaming ready, RTX graphics" },

    { id: 11, name: "MacBook Pro 16-inch M3", price: 124990, location: "SM Baguio", details: "Brand new, M3 Pro chip" },
    { id: 12, name: "Asus ROG Zephyrus G16", price: 98990, location: "SM San Fernando", details: "Gaming beast, slim design" },
    { id: 13, name: "Dell XPS 13 Plus", price: 79990, location: "SM Tarlac", details: "Ultra portable, OLED screen" },
    { id: 14, name: "HP Spectre x360 14", price: 74990, location: "SM Rosales", details: "Convertible laptop, touchscreen" },
    { id: 15, name: "Ipad Pro 12.9-inch 5th Gen", price: 67990, location: "SM Bulacan", details: "With Apple Pencil support" },
    { id: 16, name: "Samsung Galaxy Tab S9 Ultra", price: 63990, location: "SM San Fernando", details: "Massive 14.6-inch screen" },
    { id: 17, name: "Xiaomi Pad 6 Pro", price: 22990, location: "SM Baguio", details: "Affordable Android tablet" },
    { id: 18, name: "Sony WH-1000XM5 Headphones", price: 19990, location: "SM Tarlac", details: "Noise cancelling, wireless" },
    { id: 19, name: "Logitech MX Master 3S Wireless Mouse", price: 5990, location: "SM Rosales", details: "Ergonomic, fast charging" },
    { id: 20, name: "Razer BlackWidow V4 Pro Keyboard", price: 13990, location: "SM Baguio", details: "Mechanical, RGB lighting" },

    { id: 21, name: "Canon EOS R10 Mirrorless Camera", price: 54990, location: "SM San Fernando", details: "24MP APS-C sensor" },
    { id: 22, name: "GoPro HERO12 Black", price: 29990, location: "SM Bulacan", details: "Waterproof, 5.3K video" },
    { id: 23, name: "DJI Mini 4 Pro Drone", price: 49990, location: "SM Rosales", details: "4K camera, lightweight" },
    { id: 24, name: "Nintendo Switch OLED", price: 20990, location: "SM Baguio", details: "Handheld & docked mode" },
    { id: 25, name: "PlayStation 5 Slim", price: 34990, location: "SM San Fernando", details: "Disc version, fast loading" },
    { id: 26, name: "Xbox Series X", price: 32990, location: "SM Tarlac", details: "Powerful 4K gaming console" },
    { id: 27, name: "Apple Watch Ultra 2", price: 44990, location: "SM Rosales", details: "Rugged smartwatch, GPS" },
    { id: 28, name: "Fitbit Charge 6", price: 9990, location: "SM Bulacan", details: "Fitness tracker, heart rate" },
    { id: 29, name: "Anker Soundcore Motion+ Speaker", price: 5990, location: "SM San Fernando", details: "Portable, hi-res audio" },
    { id: 30, name: "JBL PartyBox 310", price: 27990, location: "SM Baguio", details: "Bluetooth party speaker" }
  ];

  constructor(private route: ActivatedRoute) {} 

  ngOnInit() {
    this.productId = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.products.find(p => p.id === this.productId);
  }
}
