import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesDto, CategoriesVM } from 'app/_models/categories';
import { CategoryService } from 'app/_services/category.service';

@Component({
  selector: 'admin-category',
  templateUrl: './admin-category.component.html',
  styleUrls: ['./admin-category.component.scss']
})
export class AdminCategoryComponent implements OnInit {
  requestModel: any = {};
  categories:CategoriesDto[];
  category:CategoriesDto;
  
  constructor(private categoryService: CategoryService,private router: Router) { }

  ngOnInit(): void {

    this.requestModel.currentPageNumber = 1;
    this.requestModel.pageRows = 10;
    this.requestModel.categoryName = '';
    this.categoryService.getData(this.requestModel).subscribe((data: CategoriesDto[]) => {
      this.categories = data;
    });
  }

  settings = {
    delete: {
      confirmDelete: true,
    },
    add: {
      confirmCreate: true,
    },
    edit: {
      confirmSave: true,
    },
    columns: {
      categoryName: {
        title: 'Category Name'
      },
      description: {
        title: 'Description'
      }
    }
  };

  onDeleteConfirm(event) {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onSaveConfirm(event) {
    if (window.confirm('Are you sure you want to save?')) {
      event.newData['name'] += ' + added in code';
      this.category = JSON.parse(event.newData);
      this.categoryService.update(this.category)
      event.confirm.resolve(event.newData);
    } else {
      event.confirm.reject();
    }
  }

  onCreateConfirm(event) {
    if (window.confirm('Are you sure you want to create?')) {
      event.newData['name'] += ' + added in code';
      this.category = JSON.parse(event.newData);
      event.confirm.resolve(event.newData);
      this.categoryService.add(this.category)
    } else {
      event.confirm.reject();
    }
  }
}
