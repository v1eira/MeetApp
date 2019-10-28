import styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';

const Background = styled(LinearGradient).attrs({
  colors: ['#22202c', '#402845'],
})`
  flex: 1;
`;

export default Background;
