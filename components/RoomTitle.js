const RoomTitle = (props) => {
  const star = (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="presentation"
      focusable="false"
      className="mt-1"
      style={{
        display: "block",
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
    <div className="py-8">
      <h1 className="font-bold text-2xl mb-2">{props.title}</h1>
      <div className="flex space-x-2">
        <span>{star}</span>
        <span className="font-bold">5,0</span><span className="text-gray-600">(18 Comentários)</span>
        <span>·</span>
        <span className="text-gray-600">
          {props.district}, {props.city}, {props.country}
        </span>
      </div>
    </div>
  );
};

export default RoomTitle;
