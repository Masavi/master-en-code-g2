const request = require('request');

const URL_BASE = 'https://goodreads-devf-aaron.herokuapp.com';

const createAuthor = () => {
  const URL_POST = `${URL_BASE}/api/v1/authors/`;
  const jsonSend = {
    "name": "Maui",
    "last_name": "Generacion 2",
    "nacionalidad": "MX",
    "biography": "Sensei jeje",
    "gender": "M",
    "age": 25
  };

  request.post(URL_POST, { form: jsonSend }, (err, res, body) => {
    if (res.statusCode === 201) {
      const json = JSON.parse(body);
      console.log(json);
    } else {
      console.log(res.statusCode);
    }
  });
}

createAuthor();
