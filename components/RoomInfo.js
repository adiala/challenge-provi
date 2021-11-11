const RoomInfo = (props) => {
  const isMultiple = ( value ) => (value === 0 || value > 1 ? "s" : "");

  return (
    <div className="flex gap-9 py-8 pr-8">
      <div>
        <h2 className="text-xl font-bold mb-1">
          Espaço Inteiro: {props.type} (hospedado por {props.hosted})
        </h2>
        <p className="text-gray-700">
          {props.guests} hóspede{isMultiple(props.guests)} · {props.type} ·{" "}
          {props.beds} cama{isMultiple(props.beds)} · {props.bedrooms} quarto{isMultiple(props.bedrooms)}
        </p>
      </div>
      <img src={props.avatar} className="w-14 h-14 rounded-full" />
    </div>
  );
};

export default RoomInfo;
