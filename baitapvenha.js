/* Cho mảng sau : let stores=[{id:1,name:'Milk,count:100};
{id:2,name:'Yakult', conunt:100},{id:3,name:'Butter',count:100}] 
let carts=[];
.cho ngươi dùng nhập vào 5 chữ cái C/R/U/D/E;
.C- cho người dùng nhập vào tên sản phẩm muốn mua. nếu có thêm chúng 
vào carts khi đó count trong store của sản phẩm đó giảm đi 1
.R- in ra toàn bộ các sản phẩm trong store và cart
.U- hoỉ người dùng vị trí update trong carts. nếu tồn tại cho người dùng
nhâjp vào số lượng muốn thay đổi và khi đó count trong store sẽ cập nhật theo.
.D- hỏi người dùng vị trí của sản phẩm muốn xóa trong carts. tiến hành xóa
và in  lại
.E- biến chương trình thành vòng lặp vĩnh cửu và khi người dùng nhập E thì sẽ 
thoát khỏi chương trình và thông báo " Cảm ơn bạn đã đến với Rikkei Stores
*/
class Product{
    constructor(id,name,count){
        this.id=id;
        this.name=name;
        this.count=count;
}
}
let carts=[];
let store=[];
let product1=new Product(1,'Milk',100);
let product2=new Product(2,'Yakult',100);
let product3=new Product(3,'Butter',100);
    store.push(product1,product2,product3);
    console.log('Cửa hàng' ,store);
    console.log('Giỏ hàng' ,carts);
        function addToCarts(tenSanPham) {
            let sanPham;
                for (let i = 0; i < store.length; i++) {
                    if (store[i].name===tenSanPham) {
                        sanPham=store[i];
                        break;  
                    }
                }
                if (sanPham && sanPham.count>0) {
                    carts.push(sanPham);
                    sanPham.count--;
                    console.log(`${tenSanPham} được thêm vào giỏ hàng`);
                }else{
                    console.log(`${tenSanPham} không có trong giỏ hàng`);
                }
            }
            function hienThiSanPham() {
                console.log('Danh sách sản phẩm trong cửa hàng:');
                for (let i = 0; i < store.length; i++) {
                    console.log(`${store[i].name}:${store[i].count}`);
                }
                console.log('Danh sách sản phẩm trong giỏ hàng');
                for (let i = 0; i < carts.length; i++) {
                    console.log(`${carts[i].name}`);
                    
                }
            }
            function xoaSanPham() {
                let viTri=pareInt(prompt('Nhập vị trí sản phẩm bạn muốn xóa'));
                if (viTri>=0 && viTri<carts.length) {
                    store.find(item=>item.name===carts[viTri].name).count+=carts[viTri].count;
                    carts.splice(viTri,1)
                    console.log('Sản phẩm đã được xóa khỏi giỏ hàng');
                } else {
                    console.log('Vị trí không hợp lệ');
                }
            }
            while(true){
                let luaChon=prompt(('nhập C/R/U/D/E').toUpperCase());
            switch (luaChon) {
                case 'C':
                    let tenSanPham=prompt('Nhập tên sản phẩm bạn muốn mua');
                    addToCarts(tenSanPham);
                    break;
                case "R":
                    hienThiSanPham();
                    break;
                case"D":
                     xoaSanPham();
                     break;
                case"E":
                console.log('Cảm ơn bạn đã đến với Rikkei Stores');
                break;
                default:
                    console.log('Lựa chọn không hợp lệ. Vui lòng chọn lại');

            }

        }