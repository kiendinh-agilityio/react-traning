import { memo, useState, useCallback, FormEvent } from "react";

interface OrderDetails {
  street: string;
  city: string;
  zipCode: string;
  count: number;
}

interface ProductPageProps {
  productId: string;
  referrer: string;
}

interface OrderDetails {
  street: string;
  city: string;
  zipCode: string;
  count: number;
}

interface ShippingFormProps {
  onSubmit: (orderDetails: OrderDetails) => void;
}

export const ShippingForm = memo<ShippingFormProps>(({ onSubmit }) => {
  const [count, setCount] = useState<number>(1);

  console.log("[ARTIFICIALLY SLOW] Rendering <ShippingForm />");
  const startTime = performance.now();
  while (performance.now() - startTime < 500) {
    // Do nothing for 500 ms to emulate extremely slow code
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const orderDetails: OrderDetails = {
      street: formData.get("street") as string,
      city: formData.get("city") as string,
      zipCode: formData.get("zipCode") as string,
      count,
    };
    onSubmit(orderDetails);
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <b>
          Note: <code>ShippingForm</code> is artificially slowed down!
        </b>
      </p>
      <label>
        Number of items:
        <button type="button" onClick={() => setCount(count - 1)}>
          –
        </button>
        {count}
        <button type="button" onClick={() => setCount(count + 1)}>
          +
        </button>
      </label>
      <label>
        Street:
        <input name="street" />
      </label>
      <label>
        City:
        <input name="city" />
      </label>
      <label>
        Postal code:
        <input name="zipCode" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
});

export const Product = ({ productId, referrer }: ProductPageProps) => {
  const handleSubmit = useCallback(
    (orderDetails: OrderDetails) => {
      post(`/product/${productId}/buy`, {
        referrer,
        orderDetails,
      });
    },
    [productId, referrer],
  );

  return (
    <div>
      <ShippingForm onSubmit={handleSubmit} />
    </div>
  );
};

const post = (
  url: string,
  data: { referrer: string; orderDetails: OrderDetails },
): void => {
  // Imagine this sends a request...
  console.log("POST " + url);
  console.log(data);
};
