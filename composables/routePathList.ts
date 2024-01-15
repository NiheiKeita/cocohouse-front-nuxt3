export function routePathList(pathName: String) {
  let route = '/';
  switch (pathName) {
    case 'inn_asakusa':
      route = 'https://airbnb.com/h/coco-asakusa3';
      break;
    case 'inn_hikifune':
      route = 'https://airbnb.com/h/coco-hikifune102';
      break;
    default:
      route = '/';
  }
  return route;
}
