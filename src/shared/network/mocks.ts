import type { Endpoints } from "./endpoints";

type Mocks = Partial<{
  [K in keyof Endpoints]: {
    data: Awaited<ReturnType<Endpoints[K]["fetcher"]>>;
    delay: number;
  };
}>;

// You can mannualy add your mocks and delay here
// mocks data has the same type as result of fetcher in ./endpoints
export const mocks: Mocks = {
  // products: {
  //   data: [
  //     {
  //       id: "12312312awd",
  //       description: "lorem ipsum dolor sit amet",
  //       title: "iphone 12 pro",
  //     },
  //     {
  //       id: "kekesd123",
  //       description: "lorem ipsum dolor sit amet",
  //       title: "iphone 15 mega super pro",
  //     },
  //   ],
  //   delay: 1000,
  // },
  userInfo: {
    data: {
      userId: "waeawe",
      firstName: "ivan",
      lastName: "ivanov",
    },
    delay: 700,
  },
};
