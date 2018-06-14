import * as GoogleImages from 'google-images';

if (!global._babelPolyfill) {
   require('babel-polyfill');
}

exports.header = async (event, context, cb) => {
  const html = `
    <html>
      <body>
        <h1>
          header
        </h1>
      </body>
    </html>
  `;

  const response = {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html',
    },
    body: html,
  };

  cb(null, response);
}

export const normal = (event, context, cb) => {
  cb(null, 'normal response');
}

export const promise = (event, context, cb) => {
  const p = new Promise((resolve, reject) => {
    resolve('promise success');
  });
  p
    .then(r => cb(null, r))
    .catch(e => cb(e));
}

export const bongBot = (event, context, cb) => {
  const title = event.query.text;

  const image = "http://static1.squarespace.com/static/55ccf522e4b0fc9c2b651a5d/t/55cd0f80e4b01a54c907078f/1439502211367/Slayer_Social_Sharing_Logo.jpg?format=1000w";

  cb(null, {
    "text": "Brrruuuhhh",
    "attachments": [
        {
            "image_url": image,
        }
    ]
  });
  // cb(null, {
  //     "text": "http://static1.squarespace.com/static/55ccf522e4b0fc9c2b651a5d/t/55cd0f80e4b01a54c907078f/1439502211367/Slayer_Social_Sharing_Logo.jpg?format=1000w"
  // });
  // return 'hi';

  // console.log(process.env.VAR_1);
  // var client = new GoogleImages(process.env.google_cse_id, process.env.google_cse_api_key);
  
  // var query = randomItemInArray(['bong','bongs']) + " " + req.body.text;

  // client.search(query, {
  //   safeSearch: 'high',
  //   type: 'photo'
  // }).then(images => {
  //   var image = randomItemInArray(images);
  //   if(image) {
  //     res.json({
  //       "response_type": "in_channel",
  //       "attachments":[{
  //         "image_url": image.url
  //       }]
  //     });
  //   }
  // });
};

