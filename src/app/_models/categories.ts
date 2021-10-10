export class CategoriesDto {
    id:number;
    guid:number;
    categoryName:string;
    categoryNameArabic:string;
    description:string;
    createdOn:Date;
    createdById:number;
    modifiedOn:Date;
    modifiedById:number;
    totalCount:number;
    isActive:boolean;
    createdBy:string;
    modifiedBy:string;
}

export class CategoriesVM {
    id:number;
    categoryName:string;
    currentPageNumber:number;
    pageRows:number;
}