"use client";

import { useEffect } from "react";

type KakaoMap = {
  addControl: (control: unknown, position: unknown) => void;
};

declare global {
  interface Window {
    kakao?: {
      maps?: {
        load?: (callback: () => void) => void;
        LatLng: new (lat: number, lng: number) => unknown;
        Map: new (container: HTMLElement, options: { center: unknown; level: number }) => KakaoMap;
        Marker: new (options: { map: KakaoMap; position: unknown }) => { setMap: (map: KakaoMap) => void };
        CustomOverlay: new (options: {
          map: KakaoMap;
          position: unknown;
          content: string;
          yAnchor: number;
        }) => unknown;
        MapTypeControl: new () => unknown;
        ZoomControl: new () => unknown;
        ControlPosition: {
          TOPRIGHT: unknown;
          RIGHT: unknown;
        };
      };
    };
  }
}

const MAP_CONFIGS = [
  {
    id: "kakao-map-main",
    lat: 37.4843094649164,
    lng: 127.019035446922,
    itemId: "810324978",
    label: "법무법인 서평",
  },
  {
    id: "kakao-map-gangbuk",
    lat: 37.56669974900133,
    lng: 127.00759507453515,
    itemId: "16035597",
    label: "법무법인 서평 강북분사무소",
  },
  {
    id: "kakao-map-ilsan",
    lat: 37.6531972,
    lng: 126.775988,
    itemId: "340358944",
    label: "법무법인 서평 일산분사무소",
  },
];

function initAllMaps() {
  const kakaoMaps = window.kakao?.maps;
  if (!kakaoMaps) return;

  MAP_CONFIGS.forEach(({ id, lat, lng, itemId, label }) => {
    const el = document.getElementById(id);
    if (!el || el.dataset.kakaoMapInitialized === "true") return;

    const latlng = new kakaoMaps.LatLng(lat, lng);
    const map = new kakaoMaps.Map(el, { center: latlng, level: 4 });
    const marker = new kakaoMaps.Marker({ map, position: latlng });
    marker.setMap(map);

    const content =
      `<div class="customoverlay">` +
      `<a href="https://map.kakao.com/link/map/${itemId}" target="_blank" rel="noopener noreferrer">` +
      `<span class="title">${label}</span></a></div>`;

    new kakaoMaps.CustomOverlay({ map, position: latlng, content, yAnchor: 0.3 });
    map.addControl(new kakaoMaps.MapTypeControl(), kakaoMaps.ControlPosition.TOPRIGHT);
    map.addControl(new kakaoMaps.ZoomControl(), kakaoMaps.ControlPosition.RIGHT);
    el.dataset.kakaoMapInitialized = "true";
  });
}

export default function KakaoMapInit() {
  useEffect(() => {
    let attempts = 0;

    const loadMaps = () => {
      const kakaoMaps = window.kakao?.maps;

      if (!kakaoMaps) {
        attempts += 1;
        if (attempts <= 20) {
          window.setTimeout(loadMaps, 100);
          return;
        }

        console.warn("Kakao Maps SDK did not load. Check the app key and allowed site domains.");
        return;
      }

      if (kakaoMaps.load) {
        kakaoMaps.load(initAllMaps);
      } else {
        initAllMaps();
      }
    };

    loadMaps();
  }, []);

  return null;
}
