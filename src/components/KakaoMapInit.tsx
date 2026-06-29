'use client';
import Script from 'next/script';

declare global {
  interface Window { kakao: any; }
}

const MAP_CONFIGS = [
  { id: 'kakao-map-main',    lat: 37.4843094649164,   lng: 127.019035446922,   itemId: '810324978', label: '법무법인 서평' },
  { id: 'kakao-map-gangbuk', lat: 37.56669974900133,  lng: 127.00759507453515, itemId: '16035597',  label: '법무법인 서평 강북분사무소' },
  { id: 'kakao-map-ilsan',   lat: 37.6531972,         lng: 126.775988,         itemId: '340358944', label: '법무법인 서평 일산분사무소' },
];

function initAllMaps() {
  MAP_CONFIGS.forEach(({ id, lat, lng, itemId, label }) => {
    const el = document.getElementById(id);
    if (!el) return;
    const latlng = new window.kakao.maps.LatLng(lat, lng);
    const map = new window.kakao.maps.Map(el, { center: latlng, level: 4 });
    const marker = new window.kakao.maps.Marker({ map, position: latlng });
    marker.setMap(map);
    const content =
      `<div class="customoverlay">` +
      `<a href="http://map.kakao.com/link/map/${itemId}" target="_blank">` +
      `<span class="title">${label}</span></a></div>`;
    new window.kakao.maps.CustomOverlay({ map, position: latlng, content, yAnchor: 0.3 });
    map.addControl(new window.kakao.maps.MapTypeControl(), window.kakao.maps.ControlPosition.TOPRIGHT);
    map.addControl(new window.kakao.maps.ZoomControl(), window.kakao.maps.ControlPosition.RIGHT);
  });
}

export default function KakaoMapInit() {
  return (
    <Script
      src="//dapi.kakao.com/v2/maps/sdk.js?appkey=b36253d2fe67d0211c0055b24168feef&autoload=false"
      strategy="afterInteractive"
      onLoad={() => window.kakao.maps.load(initAllMaps)}
    />
  );
}
