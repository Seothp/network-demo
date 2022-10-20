type Props = {
  products: {
    id: string;
    title: string;
    description: string;
  }[];
};

export const ProductsList = ({ products }: Props) => {
  return (
    <ul>
      {products.map((item) => (
        <li key={item.id}>
          <b>{item.title}</b>
          <p>{item.description}</p>
        </li>
      ))}
    </ul>
  );
};
