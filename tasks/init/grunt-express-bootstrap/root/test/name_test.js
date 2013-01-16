var should = require('should'),
    {%= js_safe_name %} = require('../lib/{%= name %}.js')


describe('{%= name %}', function () {
    before(function () {

    })
    it('should be awesome', function(){
        {%= js_safe_name %}.awesome().should.eql('awesome')
    })
})