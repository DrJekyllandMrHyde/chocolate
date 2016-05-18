// Generated by CoffeeScript 1.9.2
(function() {
  var Interface;

  Interface = require('../../general/locco/interface');

  describe('Interface', function() {
    it('should create an Interface', function() {
      return expect((new Interface) instanceof Interface).toBeTruthy();
    });
    it('should know Interface.Reaction', function() {
      return expect((new Interface.Reaction) instanceof Interface.Reaction).toBeTruthy();
    });
    it('get a reply from a simple Interface', function() {
      var result, service;
      service = new Interface(function() {
        return 'done';
      });
      result = null;
      runs(function() {
        return service.submit().subscribe(function(reaction) {
          return result = reaction.bin;
        });
      });
      waitsFor((function() {
        return result != null;
      }), 10);
      return runs(function() {
        return expect(result).toBe('done');
      });
    });
    it('standard Interface.Web.Html with default values', function() {
      var result, service;
      service = new Interface.Web.Html({
        defaults: {
          name: 'me',
          place: 'York'
        },
        render: function(arg) {
          var name, place;
          name = arg.name, place = arg.place;
          return text("hello " + (name.join != null ? name.join(' ') : name) + " in " + place);
        }
      });
      result = null;
      runs(function() {
        return service.submit().subscribe(function(reaction) {
          var ref;
          return result = (ref = reaction.bin) != null ? typeof ref.render === "function" ? ref.render() : void 0 : void 0;
        });
      });
      waitsFor((function() {
        return result != null;
      }), 1000);
      return runs(function() {
        return expect(result).toBe('hello me in York');
      });
    });
    it('standard Interface.Web.Html with params', function() {
      var result, service;
      service = new Interface.Web.Html({
        defaults: {
          name: 'me',
          place: 'York'
        },
        render: function(arg) {
          var name, place;
          name = arg.name, place = arg.place;
          return text("hello " + (name.join != null ? name.join(' ') : name) + " in " + place);
        }
      });
      result = null;
      runs(function() {
        return service.submit({
          name: 'you',
          place: 'London'
        }).subscribe(function(reaction) {
          var ref;
          return result = (ref = reaction.bin) != null ? typeof ref.render === "function" ? ref.render() : void 0 : void 0;
        });
      });
      waitsFor((function() {
        return result != null;
      }), 1000);
      return runs(function() {
        return expect(result).toBe('hello you in London');
      });
    });
    return it('check values with standard Interface.Web.Html and params', function() {
      var result, service;
      service = new Interface.Web.Html({
        defaults: {
          name: 'me',
          place: 'York'
        },
        check: function(arg) {
          var name;
          name = arg.name;
          if (name === 'JC') {
            return false;
          } else {
            return true;
          }
        },
        render: function(arg) {
          var name, place;
          name = arg.name, place = arg.place;
          return text("hello " + (name.join != null ? name.join(' ') : name) + " in " + place);
        }
      });
      result = null;
      runs(function() {
        return service.submit({
          name: 'JC',
          place: 'London'
        }).subscribe(function(reaction) {
          return result = reaction.bin;
        });
      });
      waitsFor((function() {
        return result != null;
      }), 1000);
      return runs(function() {
        return expect(result).toBe('');
      });
    });
  });

}).call(this);
