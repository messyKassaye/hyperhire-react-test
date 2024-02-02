import { useEffect, useState } from "react";
import AxiosService from "../../services/https.service";
import { backend_url } from "../../utils/backend_urls";
import { Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import { IBanner } from "../../models/banner.model";
import Loader from "../Loader/Loader";

const Carousel = () => {
  const [loading, setLoading] = useState(true);
  const [banners, setBanners] = useState<IBanner[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    AxiosService()
      .get(backend_url.mainBannerURL)
      .then((response) => {
        setBanners(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        setBanners([]);
      });
  }, []);

  if (loading) {
    return (
      <div>
        <Loader type="single" />
      </div>
    );
  }

  if (error) {
    return <span>Something is not good</span>;
  }
  return (
    <div>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {banners.map((banner: IBanner) => (
          <SwiperSlide key={banner.mainBannerId}>
            <div>
              <img src={banner.pcImageUrl} alt={`${banner.title}`} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
