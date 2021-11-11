import { getClient } from "../lib/sanity.server";
import { groq } from "next-sanity";
import Header from "@components/Header";
import ImagesContainer from "@components/ImagesContainer";

const Home = ({ rooms }) => {
  const star = (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="presentation"
      focusable="false"
      className="-mt-1"
      style={{
        display: "inline-block",
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
  const isMultiple = (value) => (value === 0 || value > 1 ? "s" : "");
  return (
    <>
      <Header />
      <div className="w-2/4 py-10 px-8">
        <h1 className="text-3xl font-bold mb-3">Acomodações em São Paulo</h1>
        <p className="mb-6 text-sm">
          Mais de 85.000 hóspedes ficaram em São Paulo. Em média, eles
          avaliaram suas estadias com 4.8 estrelas de um total de cinco.
        </p>
        <hr />
        {rooms.map((room, index) => (
          <div className="flex py-6 gap-6 border-b-2">
            <div className="w-72 h-48 rounded-xl overflow-hidden">
              <ImagesContainer image={room.mainImage} />
            </div>
            <div className="flex flex-col flex-grow">
              <p className="text-gray-600 tracking-tight">
                Espaço inteiro: {room.type} em {room.location.district},{" "}
                {room.location.city}
              </p>
              <h2 className="font-bold text-lg">{room.title}</h2>
              <p className="text-gray-600 tracking-tight">
                {room.guests} hóspede{isMultiple(room.guests)} · {room.type} ·{" "}
                {room.beds} cama{isMultiple(room.beds)} · {room.bedrooms} quarto
                {isMultiple(room.bedrooms)}
              </p>
              <div className="flex justify-between mt-auto">
                <p>
                <span>{star}</span> <span className="font-bold">4,98</span> (93 comentários)
                </p>
                <p className="font-bold text-lg">R${room.price} <span className="font-normal">/ noite</span></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export const getServerSideProps = async () => {
  const roomsQuery = groq`*[_type == "property"]`;
  const rooms = await getClient().fetch(roomsQuery);

  if (!rooms.length) {
    return {
      props: {
        rooms: [],
      },
    };
  } else {
    return {
      props: {
        rooms,
      },
    };
  }
};

export default Home;
