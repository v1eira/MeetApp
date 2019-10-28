import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const DateControl = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const DateButton = styled.TouchableOpacity``;

export const DateSelected = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  margin: 0 15px;
`;

export const MeetupsList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingHorizontal: 20,
  },
})`
  margin-top: 15px;
`;

export const Loading = styled.ActivityIndicator.attrs({
  size: 'small',
})`
  margin: 30px 0;
`;

export const Empty = styled.Text`
  display: flex;
  align-content: center;
  justify-content: center;
  align-self: center;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  top: 50px;
`;
