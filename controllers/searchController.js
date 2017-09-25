const _ = require('underscore');
const api_key = require('../constants/constants.js').api_key;
const request = require('request');
const doctorApi = 'https://api.betterdoctor.com/2016-03-01/doctors?';

module.exports = {
  search:  (req, res) => {
    request.get(doctorApi + 'name=' + req.params.input + '&limit=5&user_key=' + api_key, (error, response, body) => {
      let resp = JSON.parse(body);
      if (resp) {
        resp = _.map(resp.data, (doctor) => {
          return {
            first_name: doctor.profile.first_name,
            last_name: doctor.profile.last_name,
            title: doctor.profile.title,
            image_url: doctor.profile.image_url,
            uid: doctor.uid,
            bio: doctor.profile.bio
          }
        })
      }
      res.send(resp);
    })
  }
}