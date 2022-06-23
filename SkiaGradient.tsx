import React from 'react';
import {Canvas, Rect, vec, LinearGradient} from '@shopify/react-native-skia';

export const SkiaGradient = ({
  width,
  height,
}: {
  width: number;
  height: number;
}) => {
  return (
    <Canvas style={{flex: 1}}>
      <Rect x={0} y={0} width={width} height={height}>
        <LinearGradient
          start={vec(0, 0)}
          end={vec(width, 0)}
          colors={['red', 'cyan', 'lime']}
        />
      </Rect>
    </Canvas>
  );
};
