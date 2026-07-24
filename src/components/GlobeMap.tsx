import React, { useMemo } from "react";
import { ComposableMap, Geographies, Geography, Marker, Line, Graticule } from "react-simple-maps";
import { motion } from "framer-motion";

// High quality TopoJSON map of the world
const geoUrl = "https://unpkg.com/world-atlas@2.0.2/countries-110m.json";

interface GlobeMapProps {
  userLocation: { lat: number; lng: number } | null;
  hqLocation: { lat: number; lng: number };
}

export function GlobeMap({ userLocation, hqLocation }: GlobeMapProps) {
  // Calculate midpoint for rotation
  const rotation = useMemo<[number, number, number]>(() => {
    if (!userLocation) {
      // Default rotation centered on HQ
      return [-hqLocation.lng, -hqLocation.lat, 0];
    }
    
    // Simple midpoint calculation for visual framing
    let midLng = (hqLocation.lng + userLocation.lng) / 2;
    let midLat = (hqLocation.lat + userLocation.lat) / 2;
    
    // Handle anti-meridian crossing if needed (very basic check)
    if (Math.abs(hqLocation.lng - userLocation.lng) > 180) {
      midLng += midLng > 0 ? -180 : 180;
    }

    // Offset latitude slightly down to account for the UI overlaid on top
    return [-midLng, -midLat - 10, 0];
  }, [userLocation, hqLocation]);

  return (
    <div className="w-full h-full relative cursor-crosshair">
      <ComposableMap
        projection="geoOrthographic"
        projectionConfig={{
          scale: 280, // Default scale/zoom
          rotate: rotation,
        }}
        className="w-full h-full animate-in fade-in duration-1000"
        style={{
          width: "100%",
          height: "100%",
          transition: "transform 1.5s ease-in-out",
        }}
      >
        <Graticule stroke="rgba(var(--color-primary), 0.1)" strokeWidth={0.5} />
        
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="hsl(var(--muted))"
                stroke="hsl(var(--background))"
                strokeWidth={0.5}
                style={{
                  default: { outline: "none" },
                  hover: { fill: "hsl(var(--muted-foreground))", outline: "none" },
                  pressed: { outline: "none" },
                }}
              />
            ))
          }
        </Geographies>

        {/* HQ Marker */}
        <Marker coordinates={[hqLocation.lng, hqLocation.lat]}>
          <circle r={6} fill="hsl(var(--primary))" opacity={0.3} className="animate-ping" />
          <circle r={4} fill="hsl(var(--primary))" />
        </Marker>

        {/* User Marker and Connection Line */}
        {userLocation && (
          <>
            <Marker coordinates={[userLocation.lng, userLocation.lat]}>
              <circle r={6} fill="hsl(var(--success))" opacity={0.3} className="animate-ping" />
              <circle r={4} fill="hsl(var(--success))" />
            </Marker>

            {/* Great Circle Connection Line */}
            <Line
              from={[hqLocation.lng, hqLocation.lat]}
              to={[userLocation.lng, userLocation.lat]}
              stroke="hsl(var(--primary))"
              strokeWidth={2}
              strokeLinecap="round"
              strokeDasharray="4 4"
              className="animate-in fade-in duration-1000"
              style={{ strokeDasharray: "4 4", strokeDashoffset: 0, animation: "dash 2s linear infinite" }}
            />
          </>
        )}
      </ComposableMap>
      
      {/* Decorative gradient overlay to make the globe blend into the card */}
      <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent pointer-events-none" />
      
      <style>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -8;
          }
        }
      `}</style>
    </div>
  );
}

// Utility: Haversine distance in Kilometers
export function calculateDistanceKm(lat1: number, lon1: number, lat2: number, lon2: number) {
  const R = 6371; // Radius of the earth in km
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c; // Distance in km
  return Math.round(d);
}

function deg2rad(deg: number) {
  return deg * (Math.PI / 180);
}
