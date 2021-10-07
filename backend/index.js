/*
dependencies
*/

const express = require('express')
/*
config-express
*/
const app = express()


/*
end of slides
*/

app.get('/slides', (request, response) => {
    let slides = [
        {
            itemName: "Puddles Longsleeve",
            itemPrice: "$29.99",
            itemSlide: 1,
            itemDesc:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed maximus diam. Ut volutpat accumsan enim sed mollis. Aliquam condimentum non leo eu tempus. Nulla at nisl et eros lacinia aliquam vitae sit amet ligula. In fringilla dignissim placerat. Aenean ullamcorper tellus vitae quam malesuada, rhoncus faucibus purus fermentum.",
            itemImg1:
              "https://imgprd19.hobbylobby.com/0/2d/95/02d95aaa2491fc88832ff0fca3388b37d29309de/350Wx350H-709618-0320.jpg",
            itemImg2:
              "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1621283126-t-shirts-buckmason-black-slub-1621282639.jpg",
            itemImg3:
              "https://cdn.shopify.com/s/files/1/1722/0531/products/modern-love-shirt-roller_1024x1024.jpg?v=1571439091",
            itemImg4:
              "https://www.ramblersway.com/sites/default/files/product_photos/708-Western-Chambray-Shirt.jpg",
            itemPreview: false,
            datePosted: "10/5/2021",
          },
          {
            itemName: "Puddles T-Shirt",
            itemPrice: "$19.99",
            itemSlide: 1,
            itemDesc:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed maximus diam. Ut volutpat accumsan enim sed mollis. Aliquam condimentum non leo eu tempus. Nulla at nisl et eros lacinia aliquam vitae sit amet ligula. In fringilla dignissim placerat. Aenean ullamcorper tellus vitae quam malesuada, rhoncus faucibus purus fermentum.",
            itemImg1:
              "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1621283126-t-shirts-buckmason-black-slub-1621282639.jpg",
            itemImg2:
              "https://imgprd19.hobbylobby.com/0/2d/95/02d95aaa2491fc88832ff0fca3388b37d29309de/350Wx350H-709618-0320.jpg",
            itemImg3:
              "https://cdn.shopify.com/s/files/1/1722/0531/products/modern-love-shirt-roller_1024x1024.jpg?v=1571439091",
            itemImg4:
              "https://www.ramblersway.com/sites/default/files/product_photos/708-Western-Chambray-Shirt.jpg",
            itemPreview: false,
            datePosted: "10/5/2021",
          }
    ]
    
  response.send(slides)

})

/*
listen/ pushes to localhost
*/

app.listen(3000)