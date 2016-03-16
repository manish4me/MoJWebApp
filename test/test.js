var supertest = require("supertest");
var should = require("should");

// This agent refers to PORT where program is runninng.

var server = supertest.agent("http://localhost:3000");

// UNIT test begin

describe("MoJ unit test",function(){


  it("should insert person data",function(done){

    //calling ADD api
    server
    .post('/addPerson')
    .send({name : 'test user', sex : 'Male', age : 30, country : 'USA', dateCreated : new Date()})
    .expect("Content-type",/json/)
    .expect(200)
    .end(function(err,res){
      res.status.should.equal(200);
      res.body.error.should.equal(false);
      res.body.data.name.should.equal('test user');
      done();
    });
  });

//Calling Country Api
  it("should return country data",function(done){

    server
    .get('https://restcountries.eu/rest/v1/region/Europe')
    .expect("Content-type",/json/)
    .expect(200)
    .end(function(err,res){
      done();
    });
  });

});