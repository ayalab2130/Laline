function Product(code, name, price, category,linkImage) {
    this.code = code;
    this.name = name;
    this.price= price;
    this.category= category;
    this.linkImage = linkImage;
   
}





let product = [], basket = [], sum = 0;
product[0] = new Product('M77073999999', "A box of children's products", 229, 'GIFT',"../../images/gifts/A box of children's products.png");
product[1] = new Product('M03508051099', 'Set of three bath bags', 129, 'GIFT', "../../images/gifts/Set of three bath bags.jpg");
product[2] = new Product('M03509051099', 'Mini product kit', 109, 'GIFT', "../../images/gifts/Mini product kit.jpg");
product[3] = new Product('M03720051099', 'bathrobe', 167, 'GIFT', "../../images/gifts/bathrobe.jpg");
product[4] = new Product('M77078999999', 'Rich Shea & Cocoy case', 499, 'GIFT', "../../images/gifts/Rich Shea & Cocoy case.jpg");
product[5] = new Product('M77076999999', 'L care case', 359, 'GIFT', "../../images/gifts/L care case.jpg");
product[6] = new Product('M08256999999', 'White bathrobe', 195, 'GIFT', "../../images/gifts/White bathrobe.jpg");
product[7] = new Product('M77129999999', 'Dead treat case', 209, 'GIFT', "../../images/gifts/Dead treat case.jpg");
product[8] = new Product('M10188999999', 'A greeting card and a bouquet of flowers', 9, 'GIFT', "../../images/gifts/A greeting card and a bouquet of flowers.jpg");
product[9] = new Product('M03506051099', 'hair brush', 22, 'GIFT', "../../images/gifts/hair brush.jpg");
product[10] = new Product('M03565999999', 'Bow tie headband', 29, 'GIFT', "../../images/gifts/Bow tie headband.jpg");
product[11] = new Product('M51267050199', 'Bathing bag with heart pom pom', 89, 'GIFT', "../../images/gifts/Bathing bag with heart pom pom.jpg");
product[12] = new Product('M08602999999', 'Electric scent diffuser', 195, 'GIFT', "../../images/gifts/Electric scent diffuser.jpg");
product[13] = new Product('M10695999999', 'Square jar candle summer 22', 55, 'SMELL', "../../images/smells/Square jar candle summer 22.jpg");
product[14] = new Product('M10660999999', 'beach blanket', 90, 'GIFT', "../../images/gifts/beach blanket.jpg");
product[15] = new Product('M11130999999', 'Gift box S', 20, 'GIFT', "../../images/gifts/Gift box s.jpg");
product[16] = new Product('M10828999999', 'A quartet of Neod bathing bags', 118, 'GIFT', "../../images/gifts/A quartet of Neod bathing bags.jpg");
product[17] = new Product('M03516051099', 'Bottle', 24, 'GIFT', "../../images/gifts/Bottle.jpg");
product[18] = new Product('M52271050299', 'Air freshener for the room', 55, 'SMELL', "../../images/smells/Air freshener for the room.jpg");
product[19] = new Product('M51340050199', 'Scented mood candle', 55, 'SMELL', "../../images/smells/Scented mood candle.jpg");
product[20] = new Product('M10694999999', 'A gongal candle', 76, 'SMELL', "../../images/smells/A gongal candle.jpg");
product[21] = new Product('M10747999999', 'Summer diffuser', 76, 'SMELL', "../../images/smells/Summer diffuser.jpg");
product[22] = new Product('M10704999999', 'Summer terracotta diffuser', 97, 'SMELL', "../../images/smells/Summer terracotta diffuser.jpg");
product[23] = new Product('M11004999999', 'Origami scent diffuser', 90, 'SMELL', "../../images/smells/Origami scent diffuser.jpg");
product[24] = new Product('M11003999999', 'A candle in a gold metal cup', 90, 'SMELL', "../../images/smells/A candle in a gold metal cup.jpg");
product[25] = new Product('M71250052199 ', 'Fragrance distributor', 83, 'SMELL', "../../images/smells/Fragrance distributor.jpg");
product[26] = new Product('M53272050399', 'Foaming bath bomb', 29, 'SMELL', "../../images/smells/Foaming bath bomb.jpg");
product[27] = new Product('M51333050199', 'star salt ball', 24, 'SMELL', "../../images/smells/star salt ball.jpg");
product[28] = new Product('M11048999999', 'Botanical solid soap', 24, 'SMELL', "../../images/smells/Botanical solid soap.jpg");
product[29] = new Product('M75024052499', 'Scented car pendant', 24, 'SMELL', "../../images/smells/Scented car pendant.jpg");
product[30] = new Product('M66283051799', 'Cloud bath bomb', 24, 'SMELL', "../../images/smells/Cloud bath bomb.jpg");
product[31] = new Product('M10698999999', 'Ceramic candle with summer 22 glaze', 48, 'SMELL', "../../images/smells/Ceramic candle with summer 22 glaze.jpg");
product[32] = new Product('M52160050299', 'Soap bar', 24, 'soaps', "../../images/soaps/Soap bar.png");
product[33] = new Product('M52158050299', 'Bath and body foam', 69, 'soaps', "../../images/soaps/Bath and body foam.png");
product[34] = new Product('M51161050199', 'Gentle exfoliating soap', 69, 'soaps', "../../images/soaps/Gentle exfoliating soap.png");
product[35] = new Product('M71300052199', 'Mineral face cream', 129, 'soaps', "../../images/soaps/Mineral face cream.jpg");
product[36] = new Product('M51015050199', 'whipped cream', 79, 'soaps', "../../images/soaps/whipped cream.png");
product[37] = new Product('M51001050199', 'Souffle cream', 99, 'soaps', "../../images/soaps/Souffle cream.png");
product[38] = new Product('M52009050299', 'Body lotion in a tube', 79, 'soaps', "../../images/soaps/Body lotion in a tube.png");
product[39] = new Product('M52270050299', 'Hand Cream', 49, 'soaps', "../../images/soaps/Hand Cream.png");
product[40] = new Product('M51267050199', 'body oil', 89, 'soaps', "../../images/soaps/body oil.png");
product[41] = new Product('M51341050199', 'Butter cream', 89, 'soaps', "../../images/soaps/Butter cream.png");
product[42] = new Product('M50010050399', 'Pampering souffle cream', 79, 'soaps', "../../images/soaps/Pampering souffle cream.png");
product[43] = new Product('M71303052199', 'gold mask', 139, 'soaps', "../../images/soaps/gold mask.jpg");
product[44] = new Product('M68403051899', 'Nourishing facial oil', 119, 'soaps', "../../images/soaps/Nourishing facial oil.jpg");
product[45] = new Product('M71200052199', 'Mineral bath soap', 29, 'soaps', "../../images/soaps/Mineral bath soap.jpg");
product[46] = new Product('M71402052199', 'Liquid mineral salt', 34, 'soaps', "../../images/soaps/Liquid mineral salt.jpg");

if (localStorage.getItem('newP') != null) {
    let x = localStorage.getItem('newP');
    x = JSON.parse(x);
    for (let i = 0; i < x.length; i++) {
        product.push(x[i]);
    }
    
}





