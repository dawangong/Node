const fibonacci = (n) => {
  if (typeof n !== 'number') {
    throw new Error('n should be a Number');
  }
  if(n < 3) {
    return 1
  }
  return fibonacci(n-1) + fibonacci(n-2)
};

if (require.main === module) {
  // 如果是直接执行 main.js，则进入此处
  // 如果 main.js 被其他文件 require，则此处不会执行。
  const n = Number(process.argv[2]);
  console.log(process.argv);
  console.log('fibonacci(' + n + ') is', fibonacci(n));
}

module.exports = {
  fibonacci
};


