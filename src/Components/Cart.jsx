import React, { useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Cart() {
  const [showModal, setShowModal] = useState(false);
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
      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <AiOutlineShoppingCart />
      </button>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 overflow-x-hidden overflow-y-auto">
          <div className="relative w-auto max-w-3xl mx-auto my-6 p-[2rem] bg-white rounded-lg shadow-lg">
            <div className="flex flex-col">
              <div className="flex items-start justify-between pb-5 border-b border-slate-200">
                <h3 className="text-2xl font-semibold">
                  Cart ({cartData.length})
                </h3>
                <button
                  className="p-1 ml-auto text-3xl font-semibold outline-none focus:outline-none"
                  onClick={() => setShowModal(false)}
                >
                  <span className="text-black h-6 w-6 text-2xl block">
                    &#215;
                  </span>
                </button>
              </div>
              <div className="p-6 flex-auto max-h-[50vh] overflow-auto">
                {cartData.length > 0 ? (
                  <>
                    {cartData.map((value) => (
                      <Card
                        key={value.id}
                        id={value.id}
                        type={value.type}
                        name={value.name}
                        image={value.image}
                        price={value.price}
                      />
                    ))}
                    <div className="flex justify-between mb-5 mt-5">
                      <h4 className="text-gray-700">Total:</h4>
                      <p className="font-bold">${totalBill}</p>
                    </div>
                    <div className="flex items-center justify-end border-t border-slate-200">
                      <Link to="/checkout">
                        <button className="w-full py-2 bg-pink-500 text-white rounded hover:bg-pink-600">
                          Checkout
                        </button>
                      </Link>
                    </div>
                  </>
                ) : (
                  <div className="h-[30vh]">
                    <img
                      src="https://elements-cover-images-0.imgix.net/41ce1856-ce64-47eb-9cc9-d50c75ba936b?auto=compress%2Cformat&fit=max&w=900&s=501aef4930c224609ff884797e50331d"
                      alt=""
                      className="h-full"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export function Card({ name, image, price, type, id }) {
  return (
    <div className="flex items-center gap-[2rem] mt-5">
      <div className="h-[15vh]">
        <Link to={`/${type}/${id}`}>
          <img className="h-full object-cover" src={image} alt={name} />
        </Link>
      </div>
      <div className="flex flex-col">
        <h4 className="font-bold">{name}</h4>
        <p>$ {price}</p>
      </div>
    </div>
  );
}
