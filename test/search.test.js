process.env.NODE_ENV = 'test';

let request = require('request');
let chai = require('chai');
let expect = chai.expect;
let chaiHttp = require('chai-http');
let server = require('../dist/index');
let should = chai.should();
let sinon = require('sinon');
let sinonChai = require('sinon-chai');
chai.use(sinonChai);
chai.use(chaiHttp);

let searchController = require('../dist/controllers/searchController');

describe('Search', () => {
  describe('GET autocomplete/:input', () => {
    // before(() => {
    //     sinon
    //       .stub(request, 'get')
    //       .yields(null, null, JSON.stringify({
    //           data: [
    //             {
    //               profile: {
    //                 first_name: "MF",
    //                 last_name: "DOOM",
    //                 nick_name: "MetalFaceDoom"
    //               },
    //               associatedActs: ["Andre3000", "Madvillain"],
    //               uid: "DoctorOcta"
    //             }
    //           ] 
    //       }));

    //       after(function(){
    //         request.get.restore();
    //       });
    //   })

      it('it should GET Doctors', (done) => {
        chai.request(server)
          .get('/search/spy')
          .end((err, res) => {
            res.should.have.status(200);
            done();
          });
      })
  });
})