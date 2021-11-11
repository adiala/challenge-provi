import { getClient } from "../../lib/sanity.server";
import { groq } from "next-sanity";
import { urlFor } from "../../lib/sanity";
import RoomTitle from "@components/RoomTitle";
import RoomInfo from "@components/RoomInfo";
import RoomHighLights from "@components/RoomHighlights";
import RoomDescription from "@components/RoomDescription";
import PriceCard from "@components/PriceCard";
import Amenities from "@components/Amenities";

const Room = ({
  title,
  mainImage,
  type,
  description,
  location,
  amenities,
  host,
  guests,
  beds,
  bedrooms,
  price,
}) => {
  return (
    <div className="container mx-auto lg:px-20">
      <section>
        <RoomTitle
          title={title}
          district={location?.district}
          city={location?.city}
          country={location?.country}
        />
      </section>
      <div className="flex gap-4">
        <div className="flex flex-col">
          <section>
            <RoomInfo
              type={type}
              hosted={host?.name}
              guests={guests}
              beds={beds}
              bedrooms={bedrooms}
              avatar={urlFor(host.avatar).url()}
            />
          </section>
          <hr />
          <section>
            <RoomHighLights />
          </section>
          <hr />
          <section>
            <RoomDescription description={description} />
          </section>
          <hr />
          <section>
            <Amenities amenity={amenities} />
          </section>
        </div>
        <section className="mt-4">
          <PriceCard price={price} />
        </section>
      </div>
    </div>
  );
};

export const getServerSideProps = async (pageContext) => {
  const roomSlug = pageContext.query.slug;
  const roomQuery = groq`*[ _type == "property" && slug.current == $roomSlug][0]{
        _id,
        title,
        type,
        description,
        location,
        mainImage,
        images,
        amenities,
        bedrooms,
        beds,
        guests,
        price,
        host-> {
            _id,
            name,
            slug,
            avatar,
        },
    }`;

  const room = await getClient().fetch(roomQuery, { roomSlug });

  if (!room) {
    return {
      props: null,
      notFound: true,
    };
  } else {
    return {
      props: {
        title: room.title,
        type: room.type,
        description: room.description,
        location: room.location,
        mainImage: room.mainImage,
        images: room.images,
        amenities: room.amenities,
        bedrooms: room.bedrooms,
        beds: room.beds,
        guests: room.guests,
        price: room.price,
        host: room.host,
      },
    };
  }
};

export default Room;
