import React from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';
import { noop } from '@babel/types';
import PlaylistDetailItem from '../ListItem/PlaylistDetailItem';

const PlayListDetail = ({
  onPress, tracks,
}) => (
  <>
    <FlatList
      removeClippedSubviews
      data={tracks}
      style={{ flex: 1 }}
      maxToRenderPerBatch={10}
      // updateCellsBatchingPeriod={20}
      initialNumToRender={5}
      keyExtractor={(item, index) => index.toString()}
      windowSize={10}

      renderItem={(el) => (
        <PlaylistDetailItem
          name={el?.item?.track?.name || ''}
          source={el?.item?.track?.album?.images[0].url}
          artists={el?.item?.track?.artists}
          onPress={() => onPress(el.item)}
        />
      )}
    />
  </>
);

PlayListDetail.propTypes = {
  onPress: PropTypes.func,
  tracks: PropTypes.array,
};
PlayListDetail.defaultProps = {
  onPress: noop,
  tracks: [],
};

export default PlayListDetail;
