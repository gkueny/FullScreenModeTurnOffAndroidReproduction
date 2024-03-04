import React, {useCallback, useRef} from 'react';
import {StyleSheet, View} from 'react-native';
import Video, {
  OnVideoErrorData,
  ResizeMode,
  VideoRef,
} from 'react-native-video';

function App(): React.JSX.Element {
  const videoRef = useRef<VideoRef>();

  const onError = useCallback((error: OnVideoErrorData) => {
    console.log({error});
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.videoContainer}>
        <Video
          ref={videoRef}
          source={{
            uri: 'https://brenopolanski.github.io/html5-video-webvtt-example/MIB2.mp4',
          }}
          onError={onError}
          style={styles.backgroundVideo}
          resizeMode={ResizeMode.CONTAIN}
          controls
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
  videoContainer: {
    width: '100%',
    height: 500,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default App;
