export class FeatProduct {
  public      id: number;
  public   title: string;
  public imgPath: string;

  constructor(id: number, title: string, imgPath: string) {
    this.id = id;
    this.title = title;
    this.imgPath = imgPath;
  }
}
