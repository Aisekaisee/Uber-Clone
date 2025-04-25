import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useRef } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { useSelector } from 'react-redux';
import { selectDestination, selectOrigin } from '../slices/NavSlice';
import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_MAPS_APIKEY } from '@env';

const Map = () => {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const MapRef = useRef(null);

  useEffect(() => {
    console.log('Origin State:', origin);
  }, [origin]);

  useEffect(() => {
    console.log('Destination State:', destination);
  }, [destination]);

  useEffect(() => {
    if (!origin || !destination) return;

    // Zoom and fit to markers
    MapRef.current.fitToSuppliedMarkers(['origin', 'destination'], {
      edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
    });
  }, [origin, destination]);

  return (
    // <MapView
    //   ref={MapRef}
    //   className="flex-1"
    //   mapType="standard"
    //   initialRegion={{
    //     latitude: origin?.location?.lat || 37.78825,
    //     longitude: origin?.location?.lng || -122.4324,
    //     latitudeDelta: 0.005,
    //     longitudeDelta: 0.005,
    //   }}
    // >

      <MapView
        ref={MapRef}
        style={{ flex: 1, height: '100%' }}  // Add specific height
        className="flex-1"
        mapType="standard"
        initialRegion={{
          latitude: origin?.location?.lat || 37.78825,
          longitude: origin?.location?.lng || -122.4324,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
      >
    
      {/* {origin && destination && (
        <MapViewDirections
          origin={origin.description}
          destination={destination.description}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={3}
          strokeColor="black"
        />
      )} */}

      {origin?.location && destination?.location && (
        <MapViewDirections
          origin={{
            latitude: origin.location.lat,
            longitude: origin.location.lng
          }}
          destination={{
            latitude: destination.location.lat,
            longitude: destination.location.lng
          }}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={3}
          strokeColor="black"
        />
      )}

      {origin?.location && (
        <Marker
          coordinate={{
            latitude: (() => {
              const lat = origin.location.lat;
              console.log('Origin Latitude:', lat);
              return lat;
            })(),
            longitude: (() => {
              const lng = origin.location.lng;
              console.log('Origin Longitude:', lng);
              return lng;
            })(),
          }}
          title="Origin"
          description={origin.description}
          identifier="origin"
        />
      )}

      {destination?.location && (
        <Marker
          coordinate={{
            latitude: (() => {
              const lat = destination.location.lat;
              console.log('Destination Latitude:', lat);
              return lat;
            })(),
            longitude: (() => {
              const lng = destination.location.lng;
              console.log('Destination Longitude:', lng);
              return lng;
            })(),
          }}
          title="Destination"
          description={destination.description}
          identifier="destination"
        />
      )}
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({});