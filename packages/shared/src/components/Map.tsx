// 153.433123, -28.026887 Goldie
// 14.443941, 35.891377 Malta
// const defaltCenter = [153.433123, -28.026887];
import React, { useRef, useEffect, useState } from "react";
import { useAppSelector } from "../app/hooks";
import { selectFingerprint } from "../features/system";
import mapboxgl from "mapbox-gl";
import { mapboxConfig } from "../env";
import { Box, Button, Typography } from "@mui/material";
import { Icon } from "../listingslab-shared";
const { accessToken, styleLight } = mapboxConfig;
mapboxgl.accessToken = accessToken;

export default function Map() {
  const id = "mapContainer";
  const zoom = 10;
  const fingerprint = useAppSelector(selectFingerprint);
  const mapContainer = useRef(null);
  const map = useRef(null);
  let isAtStart = true;
  const { ipgeolocation } = fingerprint;
  let latitude = null;
  let longitude = null;
  let countryName = null;
  let city = null;
  if (ipgeolocation) {
    city = ipgeolocation.city;
    countryName = ipgeolocation.country_name;
    latitude = ipgeolocation.latitude;
    longitude = ipgeolocation.longitude;
  }

  React.useEffect(() => {
    if (map.current || !latitude) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: styleLight,
      center: [longitude, latitude],
      zoom: zoom,
      interactive: false,
    });
  });

  const flyTo = (destination) => {
    console.warn("flyTo", destination);
  };

  const flyToMalta = (e) => {
    e.preventDefault();
    const end = [14.443941, 35.891377];
    const start = [153.433123, -28.026887];
    const target = isAtStart ? end : start;
    isAtStart = !isAtStart;
    map.current.flyTo({
      center: target,
      essential: true,
      zoom: 9,
      bearing: 0,
      speed: 0.5,
      curve: 1,
      easing: (t) => t,
    });
  };

  return (
    <Box
      id={`map_${id}`}
      sx={{
        opacity: 1,
        width: "100%",
      }}
    >
      {countryName !== "Malta" ? (
        <Box sx={{ m: 1 }}>
          <Typography
            variant="body2"
            sx={
              {
                /*fontWeight:"lighter"*/
              }
            }
          >
            Where to from {city}?
          </Typography>

          <Button
            variant="text"
            color="primary"
            onClick={(e) => {
              e.preventDefault();
              flyTo("Malta");
            }}
          >
            <Icon icon="fly" />
            <span style={{ marginLeft: 8, marginRight: 8 }}>Malta</span>
          </Button>

          <Button
            variant="text"
            color="primary"
            onClick={(e) => {
              e.preventDefault();
              flyTo("Goldie");
            }}
          >
            <Icon icon="fly" />
            <span style={{ marginLeft: 8, marginRight: 8 }}>The Goldie</span>
          </Button>

          <Button
            variant="text"
            color="primary"
            onClick={(e) => {
              e.preventDefault();
              flyTo("China");
            }}
          >
            <Icon icon="fly" />
            <span style={{ marginLeft: 8, marginRight: 8 }}>China</span>
          </Button>
        </Box>
      ) : null}

      <Box
        sx={{ height: 425, m: 1 }}
        ref={mapContainer}
        className="map-container"
      />
    </Box>
  );
}
