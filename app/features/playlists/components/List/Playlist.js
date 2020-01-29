import React from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';
import { noop } from '@babel/types';
import PlaylistItem from '../ListItem/Playlistitem';

const getItemLayout = (data, index) => ({
  length: 30,
  offset: 44 * index,
  index,
});
const Playlist = ({
  onPress, playlistData = [],
}) => (
  <>
    <FlatList
      removeClippedSubviews
      data={playlistData}
      maxToRenderPerBatch={10}
      updateCellsBatchingPeriod={20}
      initialNumToRender={5}
      keyExtractor={(item, index) => index.toString()}
      windowSize={10}
      // getItemLayout={getItemLayout}
      renderItem={(el) => (
        <PlaylistItem
          source={el.item.images[0]?.url}
          keyExtractor={(item) => item.key}
          name={el.item.name}
          onPress={() => {
            onPress(el.item);
          }}
          songCount={el.item.tracks.total}
        />
      )}
    />

  </>
);

Playlist.propTypes = {
  onPress: PropTypes.func,
  playlistData: PropTypes.array,
};
Playlist.defaultProps = {
  onPress: noop,
  playlistData: [],
};

export default Playlist;
