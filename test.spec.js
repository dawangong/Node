const main = require('./main');
const should = require('should');

describe('测试', function () {
  it('n等于10 输出55', function () {
    main.fibonacci(10).should.equal(55);
  });

  it('输入1 输出1', function () {
    main.fibonacci(1).should.equal(1);
  });

  it('输入2 输出2', function () {
    main.fibonacci(2).should.equal(1);
  });

  it('n 不是数字抛错', function () {
    (function () {
      main.fibonacci('呵呵');
    }).should.throw('n should be a Number');
  });
});
