import { getClient } from "../../lib/sanity.server";
import { groq } from "next-sanity";
import { urlFor } from "../../lib/sanity";
import Header from "@components/Header";
import RoomTitle from "@components/RoomTitle";
import RoomInfo from "@components/RoomInfo";
import RoomHighLights from "@components/RoomHighlights";
import RoomDescription from "@components/RoomDescription";
import PriceCard from "@components/PriceCard";
import Amenities from "@components/Amenities";
import ImagesContainer from "@components/ImagesContainer";

const Room = ({
  title,
  mainImage,
  images,
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
    <>
      <Header />
      <div className="container">
        <div className="flex flex-col justify-items-center px-32">
          <section>
            <RoomTitle
              title={title}
              district={location?.district}
              city={location?.city}
              country={location?.country}
            />
          </section>
          <section>
            <div
              className=" grid lg:grid-flow-col grid-flow-row grid-cols-1 lg:grid-cols-3 grid-rows-2 gap-2 rounded-xl overflow-hidden"
              style={{
                height: "70vh",
              }}
            >
              <ImagesContainer image={mainImage} />

              {images.map(({ _key, asset }, image) => (
                <ImagesContainer image={asset} />
              ))}
            </div>
          </section>
        </div>
        <div className="flex gap-10 justify-center">
          <div className="flex flex-col lg:w-7/12">
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
          <section className="mt-10">
            <PriceCard price={price} />
          </section>
        </div>
      </div>
    </>
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
