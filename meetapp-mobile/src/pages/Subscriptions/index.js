import React, { useState, useEffect, useCallback } from 'react';
import { StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { withNavigationFocus } from 'react-navigation';

import api from '~/services/api';
import { Background, Meetup } from '~/components';

import { Container, SubscriptionsList, Loading, Empty } from './styles';

function Subscriptions({ isFocused }) {
  const [subscriptions, setSubscriptions] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [viewable, setViewable] = useState([]);

  const handleViewableChanged = useCallback(({ changed }) => {
    setViewable(changed.map(({ item }) => item.id));
  }, []);

  async function loadPage(pageNumber = page, shouldRefresh = false) {
    if (total && pageNumber > total) return;

    setLoading(true);

    const response = await api.get('subscriptions', {
      params: {
        page: pageNumber,
      },
    });
    const totalItems = response.headers['x-total-count'];

    setTotal(Math.ceil(totalItems / 10));
    setSubscriptions(
      shouldRefresh ? response.data : [...subscriptions, ...response.data]
    );
    setPage(pageNumber + 1);
    setLoading(false);
  }

  useEffect(() => {
    if (isFocused) {
      loadPage();
    }
  }, [isFocused]); // eslint-disable-line

  async function handleCancelSubscription(subscriptionId) {
    await api.delete(`subscriptions/${subscriptionId}`);

    setSubscriptions(
      subscriptions.filter(subscription => subscription.id !== subscriptionId)
    );
  }

  return (
    <Background>
      <StatusBar barStyle="light-content" backgroundColor="#000" />

      <Container>
        <SubscriptionsList
          data={subscriptions}
          keyExtractor={item => String(item.id)}
          onEndReachedThreshold={0.1}
          onViewableItemsChanged={handleViewableChanged}
          viewabilityConfig={{ viewAreaCoveragePercentThreshold: 20 }}
          ListFooterComponent={loading && <Loading />}
          ListEmptyComponent={
            <Empty>Nenhum meetup nesta data</Empty>
          }
          renderItem={({ item }) => (
            <Meetup
              data={item.Meetup}
              action="Cancelar inscrição"
              onPress={() => handleCancelSubscription(item.id)}
              visible={viewable.includes(item.id)}
            />
          )}
        />
      </Container>
    </Background>
  );
}

Subscriptions.propTypes = {
  isFocused: PropTypes.bool.isRequired,
};

export default withNavigationFocus(Subscriptions);
