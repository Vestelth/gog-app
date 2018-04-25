export class Product {
  private      id: number;
  public    price: number;
  public discount: number;
  public    title: string;
  public  imgPath: string;
  public   status: string;

  constructor(id: number, price: number, discount: number, title: string, imgPath: string, status: string) {
    this.id = id;
    this.price = price;
    this.discount = discount;
    this.title = title;
    this.imgPath = imgPath;
    this.status = status;
  }
}
