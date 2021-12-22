const Cart = () => {
  const items = [
    {
      title: "Hat",
      price: "14.99",
    },
    {
      title: "Shirt",
      price: "29.99",
    },
  ];
  return (
    <div>
      {items.map((item, i) => (
        <p key={i}>
          {item.title} - ${item.price}
        </p>
      ))}
    </div>
  );
};

export { Cart };
