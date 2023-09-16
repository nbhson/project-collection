import { Component, OnInit } from '@angular/core';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.productService.getAllTodo().subscribe((todos) => {
      console.log(todos);
    })
  }
  ngOnDestroy() {
    console.log('Destroy');
    
  }
}
