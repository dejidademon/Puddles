
/*
dependencies
*/

const express = require('express')

/*
config-express
*/
const app = express()

const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');
const serviceAccount = require('./serviceAccountKey.json');

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();
/*
end of slides
*/

app.get('/slides', (request, response) => {
response.set('Access-Control-Allow-Origin', "*")


    let slides = []
    
    
        db.collection('Slides').orderBy('date').get().then(r => {
          r.docs.map((doc => {
            slides.push(doc.data())
          }));

          response.send(slides)
        })
    


})

app.get('/favorites', (request, response) => {
  response.set('Access-Control-Allow-Origin', "*")
  
  
      let accounts = []
      
      
          db.collection('Favorited').orderBy('id').get().then(r => {
            r.docs.map((doc => {
              accounts.push(doc.data())
            }));
            response.send(accounts)
          })
      
  
  
  })

  app.get('/purchases', (request, response) => {
    response.set('Access-Control-Allow-Origin', "*")
    
    
        let purchases = []
        
        
            db.collection('Purchases').orderBy('orderId').get().then(r => {
              r.docs.map((doc => {
                purchases.push(doc.data())
              }));
    
              response.send(purchases)
            })
        
    
    
    })
/*
listen/ pushes to localhost
*/

app.listen(process.env.PORT || 3000)