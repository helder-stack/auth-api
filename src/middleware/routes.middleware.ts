import { RequestMethod } from '@nestjs/common';

const routes = [
  {
    path: '/user/me',
    method: RequestMethod.PATCH,
  },
  {
    path: '/user',
    method: RequestMethod.DELETE,
  },
  {
    path: '/user/me',
    method: RequestMethod.GET,
  },
];

// {
//     path: "",
//     method: ""
// }

export default routes;
