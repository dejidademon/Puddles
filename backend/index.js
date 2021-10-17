
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



    let slides = []
    
        db.collection('Slides').get().then(r => {
          r.docs.map((doc => {
            slides.push(doc.data())
          }));

          response.send(slides)
        })
    


})

/*
listen/ pushes to localhost
*/

app.listen(process.env.PORT || 3000)