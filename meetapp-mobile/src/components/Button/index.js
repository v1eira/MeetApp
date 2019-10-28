import React from 'react';
import PropTypes from 'prop-types';

import { Container, Text, Loading } from './styles';

function Button({ children, loading, outline, ...rest }) {
  return (
    <Container outline={outline} {...rest}>
      {loading ? <Loading /> : <Text outline={outline}>{children}</Text>}
    </Container>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  outline: PropTypes.bool,
};

Button.defaultProps = {
  loading: false,
  outline: false,
};

export default Button;
