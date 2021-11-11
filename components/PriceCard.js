const PriceCard = (props) => {
  const star = (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="presentation"
      focusable="false"
      className="mt-1"
      style={{
        height: "14px",
        width: "14px",
        fill: "rgb(246,54,93)",
      }}
    >
      <path
        d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"
        fill-rule="evenodd"
      ></path>
    </svg>
  );
  return (
    <div className="w-full h-60 p-6 border border-gray-300 shadow-md rounded-xl mx-auto">
      <div className="flex flex-col mb-6">
        <h4 className="font-bold text-2xl mb-1">
          R${props.price} <span className="font-normal text-base">/ noite</span>
        </h4>
        <div className="flex">
          <span className="mr-1">{star}</span>
          <p><span className="font-bold">5,0</span> (18 Comentários)</p>
        </div>
      </div>
      <button
        className="w-full text-white p-3 rounded-md font-bold"
        style={{backgroundColor: 'rgb(218,36,101)'}}
        onClick={() => {}}
      >
        Conferir disponibilidade
      </button>
    </div>
  );
};

export default PriceCard;
