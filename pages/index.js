import { getClient } from "../lib/sanity.server";
import { groq } from "next-sanity";
import { urlFor } from '../lib/sanity'

const Home = ({ rooms }) => {
  return <>{rooms[0].title} <img src={urlFor(rooms[0].mainImage).url()} /></>;
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
