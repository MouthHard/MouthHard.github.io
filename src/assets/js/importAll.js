

// 通俗易懂方式
export function importAllFn(ctx = {}) {
  let routers = [];
  ctx.keys().forEach(function (item) {
    routers.push(ctx(item).default);
  });
  routers = routers.filter((re) => !!re).flat(2);  // 确保 引入的路由不能为空    // 有二维数组 要扁平化
  return routers;
}

// 优化后 
export function importAllFn(ctx = {}) {
  let routers = [];
  routers = (ctx.keys().map((item) => ctx(item).default || [])).flat(2)  // routers = routers.flat(2); 
  return routers;
}


