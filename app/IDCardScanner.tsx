import { CameraView, useCameraPermissions } from 'expo-camera';
import { useRouter } from 'expo-router';
import React, { useEffect, useRef, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const IDCardScanner = () => {
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef(null);
  const router = useRouter();
  const [isDetecting, setIsDetecting] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!permission) return;

    if (!permission.granted) {
      requestPermission();
      return;
    }

    // 단순 5초후 이동
    setIsDetecting(true);
    let timeout: ReturnType<typeof setTimeout>;
    timeout = setTimeout(() => {
      router.replace('/pages/DriverCheck');
    }, 5000);

    // cleanup
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [permission]);

  if (!permission || !permission.granted) {
    return <Text>카메라 권한이 필요합니다.</Text>;
  }

  return (
    <View style={styles.fullScreenContent}>
      <SafeAreaView style={styles.container}>
        <View style={styles.cameraFrame}>
          <CameraView ref={cameraRef} style={styles.camera} facing="back">
            {/* 어두운 오버레이 */}
            <View style={[styles.overlayPart, styles.topOverlay]} />
            <View style={[styles.overlayPart, styles.bottomOverlay]} />
            <View style={[styles.overlayPart, styles.leftOverlay]} />
            <View style={[styles.overlayPart, styles.rightOverlay]} />

            {/* 가이드 박스 */}
            <View style={styles.guideBox}>
              <View style={[styles.corner, styles.topLeft]} />
              <View style={[styles.corner, styles.topRight]} />
              <View style={[styles.corner, styles.bottomLeft]} />
              <View style={[styles.corner, styles.bottomRight]} />
              {!isDetecting && (
                <Text style={styles.overlayText}>
                  신분증을 사각형 안에 맞춰주세요.{'\n'}자동으로 인식됩니다.
                </Text>
              )}
            </View>
          </CameraView>
        </View>
      </SafeAreaView>

      {/* 취소 버튼 */}
      <View style={styles.bottomArea}>
        <TouchableOpacity
          style={styles.cancelBtn}
          onPress={() => router.replace('/')}
        >
          <Text style={styles.cancelText}>취소</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default IDCardScanner;

const styles = StyleSheet.create({
  fullScreenContent: {
    flex: 1,
    backgroundColor: 'black',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraFrame: {
    width: '90%',
    aspectRatio: 1.586,
    overflow: 'hidden',
    borderRadius: 8,
  },
  camera: {
    flex: 1,
  },
  overlayPart: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    zIndex: 10,
  },
  topOverlay: {
    top: 0,
    left: 0,
    right: 0,
    height: '10%',
  },
  bottomOverlay: {
    bottom: 0,
    left: 0,
    right: 0,
    height: '10%',
  },
  leftOverlay: {
    top: '10%',
    bottom: '10%',
    left: 0,
    width: '5%',
  },
  rightOverlay: {
    top: '10%',
    bottom: '10%',
    right: 0,
    width: '5%',
  },
  guideBox: {
    position: 'absolute',
    top: '10%',
    left: '5%',
    width: '90%',
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 20,
  },
  overlayText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 6,
    borderRadius: 6,
    marginTop: 10,
  },
  corner: {
    position: 'absolute',
    width: 30,
    height: 30,
    borderColor: '#fdfdfdff',
  },
  topLeft: {
    top: 0,
    left: 0,
    borderTopWidth: 4,
    borderLeftWidth: 4,
  },
  topRight: {
    top: 0,
    right: 0,
    borderTopWidth: 4,
    borderRightWidth: 4,
  },
  bottomLeft: {
    bottom: 0,
    left: 0,
    borderBottomWidth: 4,
    borderLeftWidth: 4,
  },
  bottomRight: {
    bottom: 0,
    right: 0,
    borderBottomWidth: 4,
    borderRightWidth: 4,
  },
  bottomArea: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    paddingHorizontal: 16,
    paddingBottom: 24,
    backgroundColor: 'transparent',
  },
  cancelBtn: {
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    borderRadius: 12,
    width: '100%',
    height: 60,
  },
  cancelText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
