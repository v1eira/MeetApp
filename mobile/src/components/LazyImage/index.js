import React, { useState, useEffect } from 'react';
import { Animated, Image } from 'react-native';
import PropTypes from 'prop-types';

import { Small, Original } from './styles';

const OriginalAnimated = Animated.createAnimatedComponent(Original);

function LazyImage({ smallSource, source, shouldLoad, style }) {
  const opacity = new Animated.Value(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (shouldLoad) {
      setTimeout(() => {
        setLoaded(true);
      }, 2000);
    }
  }, [shouldLoad]);

  function handleAnimate() {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }

  return (
    <Small source={smallSource} resizeMode="cover" blurRadius={2} style={style}>
      {loaded && (
        <OriginalAnimated
          style={[{ opacity }, style]}
          source={source}
          resizeMode="cover"
          onLoadEnd={handleAnimate}
        />
      )}
    </Small>
  );
}

LazyImage.propTypes = {
  smallSource: PropTypes.shape({
    uri: PropTypes.string,
  }).isRequired,
  source: PropTypes.shape({
    uri: PropTypes.string,
  }).isRequired,
  shouldLoad: PropTypes.bool,
  style: Image.propTypes.style,
};

LazyImage.defaultProps = {
  shouldLoad: true,
  style: {},
};

export default LazyImage;
