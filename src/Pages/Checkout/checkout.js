import { Card } from "../../Components/Cart";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const CheckoutPage = () => {
  const [totalBill, setTotalBill] = useState(0);
  const cartData = useSelector((state) => state.cart);

  useEffect(() => {
    let total = 0;
    cartData.forEach((value) => {
      total += value.price;
    });
    setTotalBill(total);
  }, [cartData]);

  return (
    <>
      <div className="h-[10vh]"></div>
      {cartData.length > 0 ? (
        <form action="/" className="checkout-page flex justify-evenly p-[2rem]">
          <div className="form">
            <h2 className="uppercase mb-[3rem]">checkout</h2>
            <div className="billing-details flex flex-col gap-5">
              <h3 className="text-orange-400 text-xl uppercase">
                Billing details
              </h3>
              <div className="flex gap-5">
                <div>
                  <h3>Name</h3>
                  <input required type="text" id="name" />
                </div>
                <div>
                  <h3>Phone number</h3>
                  <input required type="text" id="phone" />
                </div>
              </div>
              <div className="mb-[20px]">
                <h3>Email</h3>
                <input required type="email" id="email" />
              </div>
            </div>
            <div className="shipping-info flex flex-col gap-5">
              <h3 className="text-orange-400 text-xl uppercase">
                Shipping info
              </h3>
              <div>
                <h3>Your address</h3>
                <input required type="text" id="address" className="w-full" />
              </div>
              <div className="flex gap-5">
                <div>
                  <h3>ZIP Code</h3>
                  <input required type="text" id="zipCode" />
                </div>
                <div>
                  <h3>City</h3>
                  <input required type="text" id="city" />
                </div>
              </div>
              <div>
                <h3>Country</h3>
                <input required type="text" id="country" />
              </div>
            </div>
          </div>
          <div className="h-fit bg-[#fafafa] p-[20px]">
            <h4 className="uppercase mb-5 font-bold text-2xl">Summary</h4>
            <div className="overflow-auto w-[17rem]">
              {cartData.map((value) => {
                return (
                  <Card
                    key={value.id}
                    type={value.type}
                    id={value.id}
                    name={value.name}
                    image={value.image}
                    price={value.price}
                  />
                );
              })}
            </div>
            <div className="p-[20px] flex flex-col gap-2">
              <div className="flex justify-between">
                <h3>TOTAL: </h3>
                <h3 className="font-bold">${totalBill}</h3>
              </div>
              <div className="flex justify-between">
                <h3>SHIPPING: </h3>
                <h3 className="font-bold">$50</h3>
              </div>
              <div className="flex justify-between">
                <h3>GRAND TOTAL: </h3>
                <h3 className="font-bold text-orange-400">
                  ${totalBill + 50}
                </h3>
              </div>
            </div>
            <input
              type="submit"
              value="Pay & continue"
              className="bg-[#d87d4a] border-none text-white uppercase font-bold cursor-pointer tracking-wider"
            />
          </div>
        </form>
      ) : (
        <>
          <div className="h-[5vh]"></div>
          <div className="no-items-image w-[50%] m-auto">
            <img
              src="https://elements-cover-images-0.imgix.net/41ce1856-ce64-47eb-9cc9-d50c75ba936b?auto=compress%2Cformat&fit=max&w=900&s=501aef4930c224609ff884797e50331d"
              alt=""
            />
          </div>
        </>
      )}
    </>
  );
};

export default CheckoutPage;
