import { faker } from "@faker-js/faker";

type Product = {
  id: string;
  title: string;
  description: string;
};

type User = {
  userId: string;
  firstName: string;
  lastName: string;
};

const mockProducts = Array.from({ length: 8 }, () => ({
  id: faker.database.mongodbObjectId(),
  title: faker.commerce.productName(),
  description: faker.commerce.productDescription(),
}));

const mockUser = {
  userId: faker.database.mongodbObjectId(),
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
};

export const fetchUserInfo = () => {
  return new Promise<User>((resolve, reject) =>
    setTimeout(() => resolve(mockUser), 3000)
  );
};

export const fetchProducts = () => {
  return new Promise<Product[]>((resolve, reject) =>
    setTimeout(() => resolve(mockProducts), 3000)
  );
};
