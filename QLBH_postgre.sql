/*
 Target Server Type    : PostgreSQL
 Target Server Version : 90600
 File Encoding         : 65001
*/


-- ----------------------------
-- Table structure for Categories
-- ----------------------------
DROP TABLE IF EXISTS "Categories";
CREATE TABLE "Categories" (
  "CatID" int4 NOT NULL,
  "CatName" varchar(50) NOT NULL
)
;

-- ----------------------------
-- Records of Categories
-- ----------------------------
BEGIN;
INSERT INTO "Categories" VALUES (1, 'Sách');
INSERT INTO "Categories" VALUES (2, 'Điện thoại');
INSERT INTO "Categories" VALUES (3, 'Máy chụp hình');
INSERT INTO "Categories" VALUES (4, 'Quần áo - Giày dép');
INSERT INTO "Categories" VALUES (5, 'Máy tính');
INSERT INTO "Categories" VALUES (6, 'Đồ trang sức');
INSERT INTO "Categories" VALUES (7, 'Khác');
COMMIT;

-- ----------------------------
-- Table structure for OrderDetails
-- ----------------------------
DROP TABLE IF EXISTS "OrderDetails";
CREATE TABLE "OrderDetails" (
  "ID" int4 NOT NULL,
  "OrderID" int4 NOT NULL,
  "ProID" int4 NOT NULL,
  "Quantity" int4 NOT NULL,
  "Price" numeric(19,4) NOT NULL,
  "Amount" numeric(19,4) NOT NULL
)
;

-- ----------------------------
-- Records of OrderDetails
-- ----------------------------
BEGIN;
INSERT INTO "OrderDetails" VALUES (1, 1, 1, 2, 1500000.0000, 3000000.0000);
INSERT INTO "OrderDetails" VALUES (2, 1, 2, 2, 300000.0000, 600000.0000);
INSERT INTO "OrderDetails" VALUES (3, 2, 1, 1, 1500000.0000, 1500000.0000);
INSERT INTO "OrderDetails" VALUES (4, 2, 2, 1, 300000.0000, 300000.0000);
COMMIT;

-- ----------------------------
-- Table structure for Orders
-- ----------------------------
DROP TABLE IF EXISTS "Orders";
CREATE TABLE "Orders" (
  "OrderID" int4 NOT NULL,
  "OrderDate" timestamp NOT NULL,
  "UserID" int4 NOT NULL,
  "Total" numeric(19,4) NOT NULL
)
;

-- ----------------------------
-- Records of Orders
-- ----------------------------
BEGIN;
INSERT INTO "Orders" VALUES (1, '2014-03-14 00:00:00.000', 5, 3600000.0000);
INSERT INTO "Orders" VALUES (2, '2014-03-14 00:00:00.000', 5, 1800000.0000);
COMMIT;

-- ----------------------------
-- Table structure for Products
-- ----------------------------
DROP TABLE IF EXISTS "Products";
CREATE TABLE "Products" (
  "ProID" int4 NOT NULL,
  "ProName" varchar(40) NOT NULL,
  "TinyDes" varchar(80) NOT NULL,
  "FullDes" text NOT NULL,
  "Price" numeric(19,4) NOT NULL,
  "CatID" int4 NOT NULL,
  "Quantity" int4 NOT NULL
)
;

-- ----------------------------
-- Records of Products
-- ----------------------------
BEGIN;
INSERT INTO "Products" VALUES (1, 'Freshwater Cultured Pearl', 'Freshwater Cultured Pearl, Citrine, Peridot & Amethyst Bracelet, 7.5"', '<UL>
    <LI>Metal stamp: 14k </LI>
    <LI>Metal: yellow-gold</LI>
    <LI>Material Type: amethyst, citrine, gold, pearl, peridot</LI>
    <LI>Gem Type: citrine, peridot, amethyst</LI>
    <LI>Length: 7.5 inches</LI>
    <LI>Clasp Type: filigree-box</LI>
    <LI>Total metal weight: 0.6 Grams</LI>
</UL>
<STRONG>Pearl Information</STRONG><BR>
<UL>
    <LI>Pearl type: freshwater-cultured</LI>
</UL>
<STRONG>Packaging Information</STRONG><BR>
<UL>
    <LI>Package: Regal Blue Sueded-Cloth Pouch</LI>
</UL>', 1500000.0000, 6, 83);
INSERT INTO "Products" VALUES (2, 'Pink Sapphire Sterling Silver', '14 1/2 Carat Created Pink Sapphire Sterling Silver Bracelet w/ Diamond Accents', '<P><STRONG>Jewelry Information</STRONG></P>
<UL>
    <LI>Loại hàng: Hàng trong nước</LI>
</UL>
', 300000.0000, 6, 64);
INSERT INTO "Products" VALUES (3, 'Torrini KC241', 'Nhẫn kim cương - vẻ đẹp kiêu sa', '<P>Không chỉ có kiểu dáng truyền thống chỉ có một hạt kim cương ở giữa, các nhà thiết kế đã tạo những những chiếc nhẫn vô cùng độc đáo và tinh tế. Tuy nhiên, giá của đồ trang sức này thì chỉ có dân chơi mới có thể kham được.</P>
<UL>
    <LI>Kiểu sản phẩm: Nhẫn nữ</LI>
    <LI>Loại đá: To paz</LI>
    <LI>Chất liệu: kim cương, nguyên liệu và công nghệ Italy...</LI>
    <LI>Đơn giá: 2,110,250 VND / Chiếc</LI>
</UL>
', 1600000000.0000, 6, 86);
INSERT INTO "Products" VALUES (4, 'Torrini KC242', 'tinh xảo và sang trọng', '<P>Để sở hữu một chiếc nhẫn kim cương lấp lánh trên tay, bạn phải là người chịu chi và sành điệu.<BR>
Với sự kết hợp khéo léo và độc đáo giữa kim cương và Saphia, Ruby... những chiếc nhẫn càng trở nên giá trị.</P>
<UL>
    <LI>Kiểu sản phẩm: Nhẫn nam</LI>
    <LI>Loại đá: To paz</LI>
    <LI>Chất liệu: Vàng tây 24K, nguyên liệu và công nghệ Italy...</LI>
</UL>
', 42000000.0000, 6, 63);
INSERT INTO "Products" VALUES (5, 'Nokia 7610', 'Độ phân giải cao, màn hình màu, chụp ảnh xuất sắc.', '<UL>
    <LI>Máy ảnh có độ phân giải 1 megapixel</LI>
    <LI>Màn hình 65.536 màu, rộng 2,1 inch, 176 X 208 pixel với đồ họa sắc nét, độ phân giải cao</LI>
    <LI>Quay phim video lên đến 10 phút với hình ảnh sắc nét hơn</LI>
    <LI>Kinh nghiệm đa phương tiện được tăng cường</LI>
    <LI>Streaming video &amp; âm thanh với RealOne Player (hỗ trợ các dạng thức MP3/AAC).</LI>
    <LI>Nâng cấp cho những đoạn phim cá nhân của bạn bằng các tính năng chỉnh sửa tự động thông minh</LI>
    <LI>In ảnh chất lượng cao từ nhà, văn phòng, kios và qua mạng</LI>
    <LI>Dễ dàng kết nối vớI máy PC để lưu trữ và chia sẻ (bằng cáp USB, PopPort, công nghệ Bluetooth)</LI>
    <LI>48 nhạc chuông đa âm sắc, True tones. Mạng GSM 900 / GSM 1800 / GSM 1900</LI>
    <LI>Kích thước 109 x 53 x 19 mm, 93 cc</LI>
    <LI>Trọng lượng 118 g</LI>
    <LI>Hiển thị: Loại TFT, 65.536 màu</LI>
    <LI>Kích cở: 176 x 208 pixels </LI>
</UL>
', 2900000.0000, 2, 0);
INSERT INTO "Products" VALUES (6, 'Áo thun nữ', 'Màu sắc tươi tắn, kiểu dáng trẻ trung', '<UL>
    <LI>Loại hàng: Hàng trong nước</LI>
    <LI>Xuất xứ: Tp Hồ Chí Minh</LI>
</UL>
', 180000.0000, 4, 62);
INSERT INTO "Products" VALUES (7, 'Simen AP75', 'Thiết kế tinh xảo, hiện đại', '<UL>
    <LI>Hình ảnh hoàn hảo, rõ nét ở mọi góc màn hình</LI>
    <LI>Giảm thiểu sự phản chiếu ánh sáng</LI>
    <LI>Menu hiển thị tiếng Việt</LI>
    <LI>Hệ thống hình ảnh thông minh</LI>
    <LI>Âm thanh Hifi Stereo mạnh mẽ</LI>
    <LI>Hệ thống âm lượng thông minh</LI>
    <LI>Bộ nhớ 100 chương trình</LI>
    <LI>Chọn kênh ưa thích</LI>
    <LI>Các kiểu sắp đặt sẵn hình ảnh / âm thanh</LI>
    <LI>Kích thước (rộng x cao x dày): 497 x 458 x 487mm</LI>
    <LI>Trọng lượng: 25kg</LI>
    <LI>Màu: vàng, xanh, bạc </LI>
</UL>
', 2800000.0000, 2, 15);
INSERT INTO "Products" VALUES (8, 'Áo bé trai', 'Hóm hỉnh dễ thương', '<UL>
    <LI>Quần áo bé trai</LI>
    <LI>Loại hàng: Hàng trong nước</LI>
    <LI>Xuất xứ: Tp Hồ Chí Minh</LI>
</UL>
', 270000.0000, 4, 74);
INSERT INTO "Products" VALUES (9, 'Bông tai nạm hạt rubby', 'Trẻ trung và quý phái', '<UL>
    <LI>Tên sản phẩm: Bông tai nạm hạt rubby</LI>
    <LI>Đóng nhãn hiệu: Torrini</LI>
    <LI>Nguồn gốc, xuất xứ: Italy</LI>
    <LI>Hình thức thanh toán: L/C T/T M/T CASH</LI>
    <LI>Thời gian giao hàng: trong vòng 3 ngày kể từ ngày mua</LI>
    <LI>Chất lượng/chứng chỉ: good</LI>
</UL>
', 2400000.0000, 6, 43);
INSERT INTO "Products" VALUES (10, 'Đầm dạ hội ánh kim', 'Đủ màu sắc - kiểu dáng', '<UL>
    <LI>Màu sắc: Khuynh hướng ánh kim có thể thể hiện trên vàng, bạc, đỏ tía, xanh biển, vàng tím, trắng và đen.</LI>
    <LI>Một số biến tấu mang tính vui nhộn là vàng chanh, màu hoa vân anh và ngọc lam; trong đó hoàng kim và nhũ bạc khá phổ biến.</LI>
    <LI>Phong cách: Diềm đăng ten, rủ xuống theo chiều thẳng đứng, nhiều lớp, cổ chẻ sâu, eo chít cao tới ngực... được biến tấu tùy theo mỗi nhà thiết kế.</LI>
</UL>
', 2800000.0000, 4, 80);
INSERT INTO "Products" VALUES (11, 'Dây chuyền ánh bạc', 'Kiểu dáng mới lạ', '<UL>
    <LI>Chất liệu chính: Bạc</LI>
    <LI>Màu sắc: Bạc</LI>
    <LI>Chất lượng: Mới</LI>
    <LI>Phí vận chuyển: Liên hệ</LI>
    <LI>Giá bán có thể thay đổi tùy theo trọng lượng và giá vàng của từng thời điểm.</LI>
</UL>
', 250000.0000, 6, 88);
INSERT INTO "Products" VALUES (12, 'Đồ bộ bé gái', 'Đủ màu sắc - kiểu dáng', '<UL>
    <LI>Màu sắc: đỏ tía, xanh biển, vàng tím, trắng và đen.</LI>
    <LI>Xuất xứ: Tp. Hồ Chí Minh</LI>
    <LI>Chất liệu: cotton</LI>
    <LI>Loại hàng: hàng trong nước</LI>
</UL>
', 120000.0000, 4, 61);
INSERT INTO "Products" VALUES (13, 'Đầm dạ hội Xinh Xinh', 'Đơn giản nhưng quý phái', '<P>Những đường cong tuyệt đẹp sẽ càng được phô bày khi diện các thiết kế này.</P>
<UL>
    <LI>Nét cắt táo bạo ở ngực giúp bạn gái thêm phần quyến rũ, ngay cả khi không có trang&nbsp; sức nào trên người.</LI>
    <LI>Đầm hai dây thật điệu đà với nơ xinh trước ngực nhưng trông bạn vẫn toát lên vẻ tinh nghịch và bụi bặm nhờ thiết kế đầm bí độc đáo cùng sắc màu sẫm.</LI>
    <LI>Hãng sản xuất: NEM</LI>
    <LI>Kích cỡ : Tất cả các kích cỡ</LI>
    <LI>Kiểu dáng : Quây/Ống</LI>
    <LI>Chất liệu : Satin</LI>
    <LI>Màu : đen, đỏ</LI>
    <LI>Xuất xứ : Việt Nam</LI>
</UL>
', 2600000.0000, 4, 92);
INSERT INTO "Products" VALUES (14, 'Đầm dạ hội NEM', 'Táo bạo và quyến rũ', '<P>Những đường cong tuyệt đẹp sẽ càng được phô bày khi diện các thiết kế này.</P>
<UL>
    <LI>Nét cắt táo bạo ở ngực giúp bạn gái thêm phần quyến rũ, ngay cả khi không có trang&nbsp; sức nào trên người.</LI>
    <LI>Đầm hai dây thật điệu đà với nơ xinh trước ngực nhưng trông bạn vẫn toát lên vẻ tinh nghịch và bụi bặm nhờ thiết kế đầm bí độc đáo cùng sắc màu sẫm.</LI>
    <LI>Hãng sản xuất: NEM</LI>
    <LI>Kích cỡ : Tất cả các kích cỡ</LI>
    <LI>Kiểu dáng : Quây/Ống</LI>
    <LI>Chất liệu : Satin</LI>
    <LI>Màu : đen, đỏ</LI>
    <LI>Xuất xứ : Việt Nam</LI>
</UL>
', 1200000.0000, 4, 0);
INSERT INTO "Products" VALUES (15, 'Dây chuyền đá quý', 'Kết hợp vàng trắng và đá quý', '<UL>
    <LI>Kiểu sản phẩm: Dây chuyền</LI>
    <LI>Chất liệu: Vàng trắng 14K và đá quý, nguyên liệu và công nghệ Italy...</LI>
    <LI>Trọng lượng chất liệu: 1.1 Chỉ </LI>
</UL>
', 1925000.0000, 6, 22);
INSERT INTO "Products" VALUES (16, 'Nokia N72', 'Sành điệu cùng N72', '<UL>
    <LI>Camera mega pixel : 2 mega pixel</LI>
    <LI>Bộ nhớ trong : 16 - 31 mb</LI>
    <LI>Chức năng : quay phim, ghi âm, nghe đài FM</LI>
    <LI>Hỗ trợ: Bluetooth, thẻ nhớ ngoài, nhạc MP3 &lt;br/&gt;</LI>
    <LI>Trọng lượng (g) : 124g</LI>
    <LI>Kích thước (mm) : 109 x 53 x 21.8 mm</LI>
    <LI>Ngôn ngữ : Có tiếng việt</LI>
    <LI>Hệ điều hành: Symbian OS 8.1</LI>
</UL>
', 3200000.0000, 2, 81);
INSERT INTO "Products" VALUES (17, 'Mặt dây chuyền Ruby', 'Toả sáng cùng Ruby', '<UL>
    <LI>Kiểu sản phẩm:&nbsp; Mặt dây</LI>
    <LI>Chất liệu: Vàng trắng 14K, nguyên liệu và công nghệ Italy...</LI>
    <LI>Trọng lượng chất liệu: 0.32 Chỉ</LI>
</UL>
', 1820000.0000, 6, 33);
INSERT INTO "Products" VALUES (18, '1/2 Carat Pink Sapphire Silver', 'Created Pink Sapphire', '<UL>
    <LI>Brand Name: Ice.com</LI>
    <LI>Material Type: sterling-silver, created-sapphire, diamond</LI>
    <LI>Gem Type: created-sapphire, Diamond</LI>
    <LI>Minimum total gem weight: 14.47 carats</LI>
    <LI>Total metal weight: 15 Grams</LI>
    <LI>Number of stones: 28</LI>
    <LI>Created-sapphire Information</LI>
    <LI>Minimum color: Not Available</LI>
</UL>
', 3400000.0000, 6, 10);
INSERT INTO "Products" VALUES (19, 'Netaya', 'Dây chuyền vàng trắng', '<UL>
    <LI>Kiểu sản phẩm:&nbsp; Dây chuyền</LI>
    <LI>Chất liệu: Vàng tây 18K, nguyên liệu và công nghệ Italy...</LI>
    <LI>Trọng lượng chất liệu: 1 Chỉ</LI>
</UL>
', 1820000.0000, 6, 17);
INSERT INTO "Products" VALUES (20, 'Giày nam GN16', 'Êm - đẹp - bền', '<UL>
    <LI>Loại hàng: Hàng trong nước</LI>
    <LI>Xuất xứ: Tp Hồ Chí Minh</LI>
    <LI>Giá: 300 000 VNĐ</LI>
</UL>
', 540000.0000, 4, 0);
INSERT INTO "Products" VALUES (21, 'G3.370A', 'Đen bóng, sang trọng', '<UL>
    <LI>Loại hàng: Hàng trong nước</LI>
    <LI>Xuất xứ: Tp Hồ Chí Minh</LI>
</UL>
', 300000.0000, 4, 74);
INSERT INTO "Products" VALUES (22, 'Giày nữ GN1', 'Kiểu dáng thanh thoát', '<UL>
    <LI>Loại hàng: Hàng trong nước</LI>
    <LI>Xuất xứ: Tp Hồ Chí Minh</LI>
</UL>
', 290000.0000, 4, 30);
INSERT INTO "Products" VALUES (23, 'NV002', 'Kiểu dáng độc đáo', '<P><STRONG>Thông tin sản phẩm</STRONG></P>
<UL>
    <LI>Mã sản phẩm: NV002</LI>
    <LI>Trọng lượng: 2 chỉ</LI>
    <LI>Vật liệu chính: Vàng 24K</LI>
</UL>
', 3600000.0000, 6, 5);
INSERT INTO "Products" VALUES (24, 'NV009', 'Sáng chói - mới lạ', '<P><STRONG>Thông tin sản phẩm</STRONG></P>
<UL>
    <LI>Mã sản phẩm: NV005</LI>
    <LI>Trọng lượng: 1 cây</LI>
    <LI>Vật liệu chính: Vàng 24K</LI>
</UL>
', 14900000.0000, 6, 22);
INSERT INTO "Products" VALUES (25, 'CK010', 'Độc đáo, sang trọng', '<UL>
    <LI>Kiểu dáng nam tính và độc đáo, những thiết kế dưới đây đáp ứng được mọi yêu cần khó tính nhất của người sở hữu.</LI>
    <LI>Những hạt kim cương sẽ giúp người đeo nó tăng thêm phần sành điệu</LI>
    <LI>Không chỉ có kiểu dáng truyền thống chỉ có một hạt kim cương ở giữa, các nhà thiết kế đã tạo những những chiếc nhẫn vô cùng độc đáo và tinh tế.</LI>
    <LI>Tuy nhiên, giá của đồ trang sức này thì chỉ có dân chơi mới có thể kham được</LI>
</UL>
', 2400000000.0000, 6, 52);
INSERT INTO "Products" VALUES (26, 'CK009', 'Nữ tính - đầy quí phái', '<UL>
    <LI>Để sở hữu một chiếc nhẫn kim cương lấp lánh trên tay, bạn phải là người chịu chi và sành điệu.</LI>
    <LI>Với sự kết hợp khéo léo và độc đáo giữa kim cương và Saphia, Ruby... những chiếc nhẫn càng trở nên giá trị</LI>
    <LI>Nhà sản xuất: Torrini</LI>
</UL>
<P>Cái này rất phù hợp cho bạn khi tặng nàng</P>
', 1850000000.0000, 6, 11);
INSERT INTO "Products" VALUES (27, 'CK007', 'Sự kết hợp khéo léo, độc đáo', '<UL>
    <LI>Để sở hữu một chiếc nhẫn kim cương lấp lánh trên tay, bạn phải là người chịu chi và sành điệu.</LI>
    <LI>Với sự kết hợp khéo léo và độc đáo giữa kim cương và Saphia, Ruby... những chiếc nhẫn càng trở nên giá trị</LI>
    <LI>Nhà sản xuất: Torrini</LI>
</UL>
<P>Cái này rất phù hợp cho bạn khi tặng nàng</P>
', 3100000000.0000, 6, 28);
INSERT INTO "Products" VALUES (28, 'CK005', 'Tinh xảo - sang trọng', '<UL>
    <LI>Kim cương luôn là đồ trang sức thể hiện đẳng cấp của người sử dụng.</LI>
    <LI>Không phải nói nhiều về những kiểu nhẫn dưới đây, chỉ có thể gói gọn trong cụm từ: tinh xảo và sang trọng</LI>
    <LI>Thông tin nhà sản xuất: Torrini</LI>
    <LI>Thông tin chi tiết: Cái này rất phù hợp cho bạn khi tặng nàng</LI>
</UL>
', 1800000000.0000, 6, 29);
INSERT INTO "Products" VALUES (29, 'NV01TT', 'Tinh tế đến không ngờ', '<UL>
    <LI>Tinh xảo và sang trọng</LI>
    <LI>Thông tin nhà sản xuất: Torrini</LI>
    <LI>Không chỉ có kiểu dáng truyền thống chỉ có một hạt kim cương ở giữa, các nhà thiết kế đã tạo những những chiếc nhẫn vô cùng độc đáo và tinh tế.</LI>
    <LI>Tuy nhiên, giá của đồ trang sức này thì chỉ có dân chơi mới có thể kham được</LI>
</UL>
', 500000000.0000, 6, 49);
INSERT INTO "Products" VALUES (30, 'Motorola W377', 'Nữ tính - trẻ trung', '<UL>
    <LI>General: 2G Network, GSM 900 / 1800 / 1900</LI>
    <LI>Size:&nbsp; 99 x 45 x 18.6 mm, 73 cc</LI>
    <LI>Weight: 95 g</LI>
    <LI>Display: type TFT, 65K colors</LI>
    <LI>Size: 128 x 160 pixels, 28 x 35 mm</LI>
</UL>
', 2400000.0000, 2, 0);
COMMIT;

-- ----------------------------
-- Table structure for Users
-- ----------------------------
DROP TABLE IF EXISTS "Users";
CREATE TABLE "Users" (
  "f_ID" int4 NOT NULL,
  "f_Username" varchar(50) NOT NULL,
  "f_Password" varchar(255) NOT NULL,
  "f_Name" varchar(50) NOT NULL,
  "f_Email" varchar(50) NOT NULL,
  "f_DOB" timestamp NOT NULL,
  "f_Permission" int4 NOT NULL
)
;

-- ----------------------------
-- Records of Users
-- ----------------------------
BEGIN;
INSERT INTO "Users" VALUES (5, 'nndkhoa', 'E0308DA5BBE8279ADC296567334D429B', 'Khoa N. D. Ngô', 'nndkhoa@a.c', '2014-02-26 00:00:00.000', 0);
INSERT INTO "Users" VALUES (6, 'tdquang', 'BABA9830D1E5DEAE4954C1364B536D66', 'Trần Duy Quang', 'tdquang@a.c', '2014-02-18 00:00:00.000', 0);
INSERT INTO "Users" VALUES (8, 'abc', 'E10ADC3949BA59ABBE56E057F20F883E', 'abc', 'abc@a.c', '2014-03-07 00:00:00.000', 0);
INSERT INTO "Users" VALUES (9, 'admin', '0192023A7BBD73250516F069DF18B500', 'Admin', 'admin@g.c', '2014-03-19 00:00:00.000', 1);
COMMIT;

-- ----------------------------
-- Primary Key structure for table Categories
-- ----------------------------
ALTER TABLE "Categories" ADD CONSTRAINT "PK__Categori__6A1C8ADAD0441F0D" PRIMARY KEY ("CatID");

-- ----------------------------
-- Primary Key structure for table OrderDetails
-- ----------------------------
ALTER TABLE "OrderDetails" ADD CONSTRAINT "PK__OrderDet__3214EC27F3093BAB" PRIMARY KEY ("ID");

-- ----------------------------
-- Primary Key structure for table Orders
-- ----------------------------
ALTER TABLE "Orders" ADD CONSTRAINT "PK__Orders__C3905BAF65A79C3A" PRIMARY KEY ("OrderID");

-- ----------------------------
-- Primary Key structure for table Products
-- ----------------------------
ALTER TABLE "Products" ADD CONSTRAINT "PK__Products__620295F0C6E31B96" PRIMARY KEY ("ProID");

-- ----------------------------
-- Primary Key structure for table Users
-- ----------------------------
ALTER TABLE "Users" ADD CONSTRAINT "PK__Users__2910CFA5E0B78CF8" PRIMARY KEY ("f_ID");

-- ----------------------------
-- Foreign Keys structure for table OrderDetails
-- ----------------------------
ALTER TABLE "OrderDetails" ADD CONSTRAINT "FK_Pro" FOREIGN KEY ("ProID") REFERENCES "Products" ("ProID");
ALTER TABLE "OrderDetails" ADD CONSTRAINT "FK_O" FOREIGN KEY ("OrderID") REFERENCES "Orders" ("OrderID");

-- ----------------------------
-- Foreign Keys structure for table Products
-- ----------------------------
ALTER TABLE "Products" ADD CONSTRAINT "FK_Cat" FOREIGN KEY ("CatID") REFERENCES "Categories" ("CatID");
