import { load} from '@2gis/mapgl';
import React, { useEffect, memo } from 'react';

export const LocationMap = () => {
    const MapWrapper = React.memo(
        () => {
            return <div id="map-container" style={{ width: '100%', height: '100%' }}></div>;
        },
        () => true,
    );
    useEffect(() => {
        let map;
        load().then((mapglAPI) => {
            map = new mapglAPI.Map('map-container', {
                center: [55.31878, 25.23584],
                zoom: 13,
                key: 'Your API access key',
            });
        });

        // Destroy the map on unmount
        return () => map && map.destroy();
    }, []);

    return (
        <div style={{ width: '100%', height: '100%' }}>
            <MapWrapper />
        </div>
    );
};

