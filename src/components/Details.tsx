import { Link, useNavigate, useParams } from "react-router-dom";
import "./Details.css";
import { useEffect, useState } from "react";
import { getGifById } from "../services/giphyApiServices";
import { GIF } from "../models/Gif";

const Details = () => {
  const gifPathId: string | undefined = useParams()?.id;
  const [gif, setGif] = useState<GIF | null>(null);
  const navigate = useNavigate();
  useEffect(() => {
    getGifById(gifPathId!)
      .then((res) => {
        setGif(res.data);
      })
      .catch(() => {
        navigate("/");
      });
  }, [gifPathId]);

  return (
    <div className="Details">
      {gif ? (
        <>
          <h3>{gif.title}</h3>
          <img src={gif.images.original.url} alt="the GIF" />

          <p className="link">
            <a href={gif.images.original.url} target="_blank" rel="noreferrer">
              Link to Giphy
            </a>
          </p>
        </>
      ) : (
        <p>
          {" "}
          Id of: {gifPathId} not found <Link to={`/`}> Go Back To Home</Link>
        </p>
      )}
    </div>
  );
};

export default Details;
