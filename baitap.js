/* 
tạo một mảng cart chứa các sản phẩm người dùng mua
khởi tạo 3 đối tượng sản phẩm gồm các thuộc tính
name: là tên sản phẩm
id: sản phẩm
price: giá sản phẩm
quantity: số lượng mua
Sau khi tạo 3 đối tượng push vào mảng cart
// viết các hàm
1.in ra tất cả sản phảm trong giỏ hàng
2. hàm tìm kiếm id trả về sản phẩm
+nếu đúng id trả về sản phẩm
+nếu không đúng id thì báo không có
3.tính giá phải trả
*/

class Product{
    constructor(name,id,price,quantity){
        this.name=name;
        this.id=id;
        this.price=price;
        this.quantity=quantity;
    }
}
let cart=[];
let product1=new Product('Iphone',1,1000,1);
let product2=new Product('Samsung',2,2000,1);
let product3=new Product('Oppo',3,3000,1);
cart.push(product1,product2,product3);
console.log(cart);
function showProduct(){
    for (let i = 0; i < cart.length; i++) {
        console.log('tên sản phẩm ', cart[i].name);  
    }
}
// showProduct();
function findProductById(id){
    let flag=-1;
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].id==id) {
                // console.log(cart[i].name);
                flag=i;
                break;
            }
    }
    if (flag==-1) {
        
        
    }else{
        console.log(' có sản phẩm', cart[flag].name);
    }   
}
findProductById(15);

