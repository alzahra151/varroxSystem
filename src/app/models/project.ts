export interface Project {
    _id:number,
    titile:string,
    subTitle:string,
    category:{
      _id:number,
      name:string,
      
    }
    description:string,
    Image:[{
      url:any
    }]

}
