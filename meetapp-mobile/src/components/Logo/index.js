import styled from 'styled-components';
import PropTypes from 'prop-types';

import logo from '~/assets/images/logo/logo.png';

const Logo = styled.Image.attrs({
  source: logo,
})`
  height: ${props => props.size};
  width: ${props => props.size};
`;

Logo.propTypes = {
  size: PropTypes.number,
};

Logo.defaultProps = {
  size: 42,
};

export default Logo;
