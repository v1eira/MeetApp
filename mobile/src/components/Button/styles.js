import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

/**
 * Border attributes are not working on Android
 *
 * See: https://github.com/kmagiera/react-native-gesture-handler/issues/477
 */
const outline = css`
  background: transparent;
  border-width: 1px;
  border-color: #f94d6a;
`;

export const Container = styled(RectButton)`
  height: 50px;
  background: #f94d6a;
  border-radius: 4px;

  align-items: center;
  justify-content: center;

  ${props => props.outline && outline}
`;

export const Text = styled.Text`
  color: ${props => (props.outline ? '#f94d6a' : '#fff')};
  font-weight: bold;
  font-size: 18px;
`;

export const Loading = styled.ActivityIndicator.attrs({
  size: 'small',
  color: '#fff',
})``;
