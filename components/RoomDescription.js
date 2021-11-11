const RoomDescription = (props) => {  
    return (
      <div className="py-8">
        <p className="leading-relaxed text-gray-700 tracking-wide">{props.description}</p>
      </div>
    );
  };
  
  export default RoomDescription;