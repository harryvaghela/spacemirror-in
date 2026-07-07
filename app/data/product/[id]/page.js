import Image from "next/image";
import { products } from "../../../data/produts"; 

export default function Page({ params }) {
  const product = products.find((p) => p.id === params.id);

  if (!product) return <h1 style={{color:"white"}}>Not Found</h1>;

  return (
    <div style={{color:"white",padding:"40px"}}>

      <h1>{product.name}</h1>

      <Image src={product.image} width={400} height={400} alt={product.name} />

      <p>{product.desc}</p>

      <h2>{product.price}</h2>

      <a
        href={`https://wa.me/9601961414?text=I want ${product.name}`}
        style={{color:"yellow"}}
      >
        Order on WhatsApp
      </a>

    </div>
  );
}