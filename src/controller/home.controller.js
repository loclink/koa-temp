class HomeController {
  
  async homeInfo(ctx, next) {
    ctx.body = {
      code: 200,
      data: {
        id: 77,
        title: 'hello koa',
        list: [
          {
            name: 'a',
            age: '12'
          },
          {
            name: 'b',
            age: '11'
          }
        ]
      },
      message: 'hello world'
    };
  }
}

module.exports = new HomeController();
