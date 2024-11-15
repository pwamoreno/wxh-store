import Image from "next/image";
import Link from "next/link";
import Favourite from "./Favourite";


interface ProductCardProps{
  product: ProductType,
  updateSignedInUser?: (updatedUser: UserType) => void 
}

const ProductCard = ({ product, updateSignedInUser }: ProductCardProps) => {

  function addCommasToNumbers(number: number) {
    //convert number to string
    let numString = number.toString();

    //use regex to add commas to the string representation of the number
    numString = numString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return numString;
  }

  return (
    <Link
      href={`/products/${product._id}`}
      className="w-[220px] flex flex-col gap-2 overflow-hidden"
    >
      <Image
        src={product.media[0]}
        alt="product"
        width={250}
        height={300}
        className="h-[250px] rounded-lg transform transition duration-1000 object-cover hover:scale-110 overflow-clip"
      />
      <div>
        <p className="text-base-bold">{product.title}</p>
        <p className="text-small-medium text-grey-2">{product.category}</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-body-bold">₦{addCommasToNumbers(product.price)}</p>
        <Favourite product={product} updateSignedInUser={updateSignedInUser}/>
      </div>
    </Link>
  );
};

export default ProductCard;
