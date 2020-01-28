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
      getItemLayout={getItemLayout}
      renderItem={(el) => (
        <PlaylistItem
          keyExtractor={(item) => item.key}
          playlistName={el.playlistName}
          onPress={onPress}
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
