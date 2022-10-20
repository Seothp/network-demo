import { endpoints } from "./endpoints";
import type { Endpoints } from "./endpoints";
import { mocks } from "./mocks";

const DEFAULT_DELAY = 500;

export const useEndpointFetcher = <T extends keyof Endpoints>(endpoint: T) => {
  // if there is a mock for needed enpoint then return mock function instead of endpoint fetcher
  const mockedEndpoint = mocks[endpoint];

  if (mockedEndpoint) {
    return async () => {
      return new Promise<typeof mockedEndpoint["data"]>((resolve, reject) => {
        setTimeout(() => {
          resolve(mockedEndpoint.data);
        }, mockedEndpoint.delay ?? DEFAULT_DELAY);
      });
    };
  }

  return endpoints[endpoint].fetcher as Endpoints[T]["fetcher"];
};
