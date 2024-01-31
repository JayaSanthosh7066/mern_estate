import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css/bundle";
const Listing = () => {
  SwiperCore.use([Navigation]);
  const [listing, setlisting] = useState(null);
  const [loading, setloading] = useState(false);
  const [error, setError] = useState(false);
  const params = useParams();
  console.log(listing);
  useEffect(() => {
    const fetchListing = async () => {
      try {
        setloading(true);
        const res = await fetch(`/api/listing/get/${params.listingid}`);
        const data = await res.json();
        if (data.success === false) {
          return;
        }
        setlisting(data);
        setloading(false);
      } catch (error) {
        setError(true);
        setloading(false);
      }
    };
    fetchListing();
  }, [params.listingid]);
  return (
    <div>
      {loading && <p className="text-center my-7 text-2xl">Loading...</p>}
      {error && (
        <p className="text-center my-7 text-2xl">Something went wrong!</p>
      )}
      {listing && !loading && !error && (
        <div>
          <Swiper navigation>
            {listing.imageUrls.map((url) => (
              <SwiperSlide key={url}>
                <div
                  className="h-[500px]"
                  style={{
                    background: `url(${url}) center no-repeat`,
                    backgroundSize: "cover",
                  }}
                ></div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
};

export default Listing;
