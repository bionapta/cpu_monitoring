import { FC, useEffect, useState } from 'react';

interface GrafanaEmbedProps {
  src: string;
  width: string | number;
  height: string | number;
}

const GrafanaEmbed: FC<GrafanaEmbedProps> = ({ src, width, height }) => {
  const [iframeKey, setIframeKey] = useState(0);

  useEffect(() => {
    // Refresh iframe ketika src berubah
    setIframeKey((prevKey) => prevKey + 1);
  }, [src]);

  return (
    <div className="grafana-embed mt-8">
      <iframe
        key={iframeKey}
        src={src}
        width={width}
        height={height}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default GrafanaEmbed;
