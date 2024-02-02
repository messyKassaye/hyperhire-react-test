import { useEffect, useState } from "react";
import { ICollections } from "../../models/collections.model";
import AxiosService from "../../services/https.service";
import { backend_url } from "../../utils/backend_urls";
import CollectionCard from "../../components/CollectionCard/CollectionCard";
import Loader from "../../components/Loader/Loader";

const Collections = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [collections, setCollections] = useState<ICollections[]>([]);
  const [
    singleTypeAndViewTypeTileCollections,
    setSingleTypeAndViewTypeTileCollections,
  ] = useState<ICollections[]>([]);

  useEffect(() => {
    AxiosService()
      .get(backend_url.collectionsURL)
      .then((response) => {
        setLoading(false);
        setCollections(response.data.items);
        setError(false);
      })
      .catch((err) => {
        setError(true);
      });
  }, []);

  useEffect(() => {
    const singleAndTileCollections = collections.filter(
      (collection) =>
        collection.type === "SINGLE" && collection.viewType === "TILE"
    );
    setSingleTypeAndViewTypeTileCollections(singleAndTileCollections);
  }, [collections]);

  if (loading) {
    return (
      <div className="mt-10">
        <Loader type="cards" />
      </div>
    );
  }

  if (error) {
    return <span>Something is not good....</span>;
  }
  return (
    <div className="flex flex-col items-start justify-center mt-10 gap-4">
      {singleTypeAndViewTypeTileCollections.map((collection: ICollections) => (
        <CollectionCard key={collection.id} collection={collection} />
      ))}
    </div>
  );
};

export default Collections;
