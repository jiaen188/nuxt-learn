import Router from 'koa-router'

const router = new Router({
  prefix: '/city'
})

router.get('/list', async (ctx) => {
  ctx.body = {
    list: ['北京', '天津', '上海', '杭州', '广州', '深圳']
  }
})

export default router
