import React, { useState, useEffect, ChangeEvent } from "react";
import styles from "./Collection.module.css";
import NavigationBar from "../Navbar/NavigationBar";
import showdown from "showdown";
import { useParams, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Footer from "../Footer/Footer";
import { TopSkeleton, CardSkeleton } from "./ColSkeleton";
import Filter from "./Filter";
import { ISingleAsset, IPrices, ICollectionArr } from "../../Interfaces";
import PriceDisplay from "./PriceDisplay";

export default function Collection() {
  let { id } = useParams<{ id: string }>();
  const history = useHistory();

  const [collectionArray, setCollectionArray] = useState([]);
  const [singleAsset, setSingleAsset] = React.useState({} as ISingleAsset);
  const [collectionStats, setCollectionStats] = useState({} as IPrices);
  const [pageNumber, setPageNumber] = useState(50);
  let [orderBy, setOrderBy] = useState("asc");
  let [sales, setSales] = useState("sale_price");
  let [filteredApi, setFilteredApi] = useState(false);
  let [input, setInput] = useState("");
  const [topLoading, setTopLoading] = useState(true);
  const [cardLoading, setCardLoading] = useState(true);

  const tokenAddress = id;

  let api = ` https://kaiscorsproxy.herokuapp.com/https://api.opensea.io/api/v1/assets?asset_contract_addresses=${tokenAddress}&offset=0&limit=${pageNumber}`;
  const api2 = ` https://kaiscorsproxy.herokuapp.com/https://api.opensea.io/api/v1/asset_contract/${tokenAddress}`;
  let filterApi = ` https://kaiscorsproxy.herokuapp.com/https://api.opensea.io/api/v1/assets?asset_contract_addresses=${tokenAddress}&order_by=${sales}&order_direction=${orderBy}&offset=0&limit=${pageNumber}`;

  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "X-API-KEY": "087158b0d16f4e73a708168cefa9123c",
    },
  };
  let mainApi: string;

  // sets a filtered to the api being fetched if user chooses filter options listed on 'filter' varaible
  if (filteredApi === false) {
    mainApi = api;
  } else {
    mainApi = filterApi;
  }

  // updates on pageNumber change, filter buttons, and filtered Api conditional
  useEffect(() => {
    fetchData();
    fetchSingle();
  }, [
    pageNumber,
    orderBy,
    sales,
    filteredApi,
    setCollectionArray,
    setSingleAsset
  ]);

  const fetchData = async () => {
    const data = await fetch(mainApi, options);
    const response = await data.json();
    setCollectionArray(response.assets);
    setCardLoading(false);

  };

  const fetchSingle = async () => {
    let data = await fetch(api2, options);
    const response = await data.json();
    setSingleAsset(response.collection);
    setTopLoading(false);
  };



  // sets api3 based on the slug
  const { slug } = singleAsset;
  const api3 = slug && `https://api.opensea.io/api/v1/collection/${slug}/stats`;

  const fetchCollectionStats = async () => {
    const response = await fetch(api3, options);
    const data = await response.json();
    setCollectionStats(data.stats);
    console.log(data.stats)
  };

  useEffect(() => {
    fetchCollectionStats();
    // console.log(collectionStats)
  }, [api3, slug, setCollectionStats]);

  function increaseNum() {
    setPageNumber(pageNumber + 50);
  }

  // grey image is used if an image is not found
  let grey_image = "/nft-spotter/imgs/grey.png";
  let {
    floor_price,
    num_owners,
    count,
    seven_day_volume,
    one_day_sales,
    average_price,
    seven_day_sales,
    one_day_volume,
  } = collectionStats && collectionStats;

  const {
    banner_image_url,
    image_url,
    name,
    safelist_request_status,
    description,
  } = singleAsset;

  // adds a period to the proper place using regex
  const addCommas = (number: number | null) => {
    return number !== null
      ? String(number).match(/^-?\d+(?:\.\d{0,2})?/)
      : "undefined";
  };

  seven_day_volume = addCommas(seven_day_volume);
  one_day_volume = addCommas(one_day_volume);
  average_price = addCommas(average_price);

  floor_price && String(floor_price).match(/^-?\d+(?:\.\d{0,4})?/);
  // converts markdown syntax into html
  const converter = new showdown.Converter();
  const newDescription = converter.makeHtml(description);

  // displays top display (banner, collection image, name and description)
  let topDisplay = (
    <div className={styles.mainWrapper}>
      <div className={styles.bannerDiv}>
        <img
          src={banner_image_url !== null ? banner_image_url : grey_image}
          className={styles.bannerImage}
          alt="banner"
        />
      </div>
      <div className={styles.collectionDiv}>
        <div style={{ position: "relative" }}>
          <img src={image_url} className={styles.collectionImage} alt="" />
          <img
            src="/nft-spotter/imgs/verified-user.png"
            alt=""
            style={{
              display:
                safelist_request_status === "verified" ? "block" : "none",
              width: "35px",
              position: "absolute",
              bottom: 0,
              right: 0,
            }}
          />
        </div>

        <h2 style={{ fontWeight: "bold", margin: "10px", fontSize: "2.5rem" }}>
          {name}
        </h2>

        <p
          style={{ width: "60%", padding: "10px", textAlign: "center" }}
          dangerouslySetInnerHTML={{ __html: newDescription }}
        ></p>
      </div>
    </div>
  );

  // functions for filters

  const handleOrder = (order: string) => {
    setOrderBy(order);
    setFilteredApi(true);
  };

  const handleFilter = (filter: string) => {
    setPageNumber(50);
    setSales(filter);
    setFilteredApi(true);
  };

  const removeFilters = () => {
    setFilteredApi(false);
  };

  // functions for setting search token input

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const handleSubmit = () => {
    history.push(`/assets/${tokenAddress}/${input}`);
  };

  // maps out all cards
  let nftDisplay =
    collectionArray &&
    collectionArray.map((item: ICollectionArr) => {
      let { id, image_url, token_id } = item;
      return (
        <Link to={`/assets/${tokenAddress}/${token_id}`} key={id}>
          <div key={id} className={`card ${styles.colCard}`}>
            <img
              src={image_url === "" ? grey_image : image_url}
              className={`card-img-top ${styles.image}`}
              alt=""
            />
            <div className="card-body">
              <div className={styles.name}>{name}</div>
              <div className="tokenId"># {token_id}</div>
            </div>
          </div>
        </Link>
      );
    });

  return (
    <>
      <NavigationBar />

      {topLoading ? (
        <TopSkeleton />
      ) : (
        <>
          {topDisplay}
          <PriceDisplay
            count={count}
            num_owners={num_owners}
            floor_price={floor_price}
            average_price={average_price}
            one_day_volume={one_day_volume}
            one_day_sales={one_day_sales}
            seven_day_sales={seven_day_sales}
            seven_day_volume={seven_day_volume}
          />

          <Filter
            handleOrder={handleOrder}
            handleFilter={handleFilter}
            removeFilters={removeFilters}
            handleChange={handleChange}
            orderBy={orderBy}
            filteredApi={filteredApi}
            sales={sales}
            handleSubmit={handleSubmit}
          />
        </>
      )}

      <div className="container-fluid">
        {cardLoading ? (
          <CardSkeleton />
        ) : (
          <div className={styles.cardDisplay}>{nftDisplay}</div>
        )}
      </div>

      <div className="d-flex justify-content-center my-3">
        <button
          onClick={increaseNum}
          className={`btn btn-secondary ${styles.bottomButton}`}
          type="button"
        >
          Load More
        </button>
      </div>
      <Footer />
    </>
  );
}
