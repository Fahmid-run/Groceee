

function CartPageCard() {
  return (
    <>
      <div className="bg-white rounded-xl border border-gray-200 p-4 capitalize grid grid-cols-5 gap-10 bg-surface my-3">
        <img
          src="../../../public/assets/apple.png"
          alt=""
          className="size-20 rounded-xl p-2 col-span-1"
        />
        <div className=" col-span-4">
          <div className="flex justify-between items-center">
            <h1 className="text-lg font-light">{} organic hass avacados</h1>
            <h1 className="text-lg font-light">$9</h1>
          </div>
          <p className="text-xs font-light text-gray-500 my-0"> fresh field farm </p>
        </div>
      </div>
    </>
  );
}

export default CartPageCard