// In Production
import React from 'react';
import PrefixGenerator from '@/utils/PrefixGenerator';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function AvatarWidget({ avatarUrl, w, h, text, owner }) {
  return (
    <div
      className="rounded-full bg-transparent relative"
      style={{ width: w, height: h }}
    >
      {avatarUrl ? (
        <LazyLoadImage
          alt={''}
          effect="blur"
          src={process.env.NEXT_PUBLIC_BASE_URL + avatarUrl}
          className="rounded-full  w-full h-full object-center"
        />
      ) : (
        <PrefixGenerator data={owner} text={text} />
      )}
    </div>
  );
}

export default AvatarWidget;
