import { useEffect, useState } from "react";
import { IShortCut } from "../../models/shortcut.model";
import AxiosService from "../../services/https.service";
import { backend_url } from "../../utils/backend_urls";
import ShortCard from "../../components/ShortCard/ShortCard";
import Loader from "../../components/Loader/Loader";

const ShortCuts = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [shortCuts, setShortCuts] = useState<IShortCut[]>([]);

  useEffect(() => {
    AxiosService()
      .get(backend_url.mainBannerShortCurURL)
      .then((response) => {
        setShortCuts(response.data);
        setError(false);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
      });
  }, []);

  if (loading) {
    return <Loader type="cards" />;
  }

  if (error) {
    return <span>Something is not good</span>;
  }
  return (
    <div className="flex items-start justify-start gap-8 mt-10">
      {shortCuts.map((shortCut: IShortCut) => (
        <ShortCard key={shortCut.mainShortcutId} shortCut={shortCut} />
      ))}
    </div>
  );
};

export default ShortCuts;
