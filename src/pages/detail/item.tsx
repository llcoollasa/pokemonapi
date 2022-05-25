import axios from "axios";
import React, { FC, useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Error } from "../../components/Error";
import { LoadingContext } from "../../context/loadingContext";
import { PokeDetail } from "./interface";
import { getPokeDetail } from "./service";

import "./index.css";

export const Item: FC = () => {
  const params = useParams();
  const [pokeDetail, setPokeDetail] = useState<PokeDetail>();
  const [error, setError] = useState(false);
  const { isLoading } = useContext(LoadingContext);

  useEffect(() => {
    isLoading(true); 
    params.id &&
      getPokeDetail(params.id)
        .then(({ data }) => {
          setPokeDetail(data);
          isLoading(false);
        })
        .catch((err) => {
          setError(true);
          isLoading(false);
        });
  }, [params.id]);

  if (error || !pokeDetail) {
    return (
      <div>
        <Error title="Poke Unavailable" message="Could not find the pokemon">
          <Link to="/">Home</Link>
        </Error>
      </div>
    );
  }

  return (
    <div className="detail-view">
      <h1 className="heading" data-testid="pokemon-name">{pokeDetail.name.toUpperCase()}</h1>
      <div className="basic">
        <div>
          <strong>Height : </strong>
          {pokeDetail.height}
        </div>
        <div>
          <strong>Default : </strong>
          {pokeDetail.is_default ? "Yes" : "No"}
        </div>
        <div>
          <strong>Weight : </strong>
          {pokeDetail.weight}
        </div>
        <div>
          <strong>Order : </strong>
          {pokeDetail.order}
        </div>
        <div>
          <strong>Location Area Encounters : </strong>
          {pokeDetail.location_area_encounters}
        </div>
      </div>

      {pokeDetail.sprites && (
        <div className="sprites">
          {pokeDetail.sprites.back_default && (
            <div className="sprite">
              <img src={pokeDetail.sprites.back_default} alt="" />
            </div>
          )}
          {pokeDetail.sprites.back_female && (
            <div className="sprite">
              <img src={pokeDetail.sprites.back_female} alt="" />
            </div>
          )}
          {pokeDetail.sprites.back_shiny && (
            <div className="sprite">
              <img src={pokeDetail.sprites.back_shiny} alt="" />
            </div>
          )}
          {pokeDetail.sprites.back_shiny_female && (
            <div className="sprite">
              <img src={pokeDetail.sprites.back_shiny_female} alt="" />
            </div>
          )}
          {pokeDetail.sprites.front_default && (
            <div className="sprite">
              <img src={pokeDetail.sprites.front_default} alt="" />
            </div>
          )}
          {pokeDetail.sprites.front_female && (
            <div className="sprite">
              <img src={pokeDetail.sprites.front_female} alt="" />
            </div>
          )}
          {pokeDetail.sprites.front_shiny && (
            <div className="sprite">
              <img src={pokeDetail.sprites.front_shiny} alt="" />
            </div>
          )}
          {pokeDetail.sprites.front_shiny_female && (
            <div className="sprite">
              <img src={pokeDetail.sprites.front_shiny_female} alt="" />
            </div>
          )}
        </div>
      )}

      {pokeDetail.abilities && (
        <div className="abilities">
          <div className="heading">Abilities</div>

          {pokeDetail?.abilities &&
            pokeDetail?.abilities.map((item, index) => (
              <div key={index}>
                <p>
                  {item.ability.name} : {item.ability.url}
                </p>
              </div>
            ))}
        </div>
      )}

      <div className="abilities">
        <div className="heading">Forms</div>
        {pokeDetail?.forms &&
          pokeDetail?.forms.map((item, index) => (
            <div key={index}>
              <p>
                {item.name} : {item.url}
              </p>
            </div>
          ))}
      </div>

      <div className="species">
        <div className="heading">Species</div>
        {pokeDetail.species &&(
          <div>
            <p>
              {pokeDetail?.species.name} : {pokeDetail?.species.url}
            </p>
          </div>
        )}
      </div>

      <div className="types">
        <div className="heading">Types</div>
        {pokeDetail?.types &&
          pokeDetail?.types.map((item, index) => (
            <div key={index}>
              <p>
                {item.type.name} : {item.type.url}
              </p>
            </div>
          ))}
      </div>

      <div className="go-home">
        <Link to="/">Home</Link>
      </div>
      
    </div>
  );
};
