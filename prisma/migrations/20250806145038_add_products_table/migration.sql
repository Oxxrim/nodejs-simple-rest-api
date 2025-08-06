-- CreateTable
CREATE TABLE "public"."Product" (
    "article" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("article")
);

INSERT INTO "Product" ("article", "name", "description", "price", "quantity") VALUES
('P001', 'Футболка', 'Чоловіча футболка 100% бавовна', 499.99, 20),
('P002', 'Джинси', 'Сині джинси slim fit', 899.00, 15),
('P003', 'Кросівки', 'Легкі кросівки для бігу', 1299.50, 10),
('P004', 'Рюкзак', 'Міський рюкзак 20л', 699.90, 5),
('P005', 'Куртка', 'Демісезонна куртка', 1499.99, 7),
('P006', 'Шапка', 'Зимова шапка', 199.99, 25),
('P007', 'Шкарпетки', 'Комплект 3 пари', 99.90, 50),
('P008', 'Сорочка', 'Класична біла сорочка', 549.00, 12),
('P009', 'Ремінь', 'Шкіряний ремінь', 349.00, 30),
('P010', 'Годинник', 'Чоловічий наручний годинник', 1999.99, 3);
