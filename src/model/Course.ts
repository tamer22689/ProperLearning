export interface Course {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  lecturer: string;
  rating: number;
  content:Array<CourseSeciton>;
}

export interface CourseSeciton{
  title:string;
  material:string
}
