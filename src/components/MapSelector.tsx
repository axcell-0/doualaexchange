"use client";

import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import { useState } from "react";
import { motion } from "framer-motion";

function ClickHandler({ onClick }: { onClick: (lat: number, lng: number) => void }) {
  useMapEvents({
    click(e) {
      onClick(e.latlng.lat, e.latlng.lng);
    },
  });

  return null;
}

export default function MapSelector() {
  const [position, setPosition] = useState<[number, number]>([4.0511, 9.7679]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-xl overflow-hidden h-48 border"
    >
      <MapContainer
        center={position}
        zoom={13}
        className="h-full w-full"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        <Marker position={position} />

        <ClickHandler
          onClick={(lat, lng) => setPosition([lat, lng])}
        />
      </MapContainer>
    </motion.div>
  );
}
