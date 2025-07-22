import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const carImage = require('../../assets/images/sonata.png');

const DriveControl = () => {
  const router = useRouter();
  const [isReturned, setIsReturned] = useState(false);

  const handleReturn = () => {
    setIsReturned(true);
    setTimeout(() => {
      router.replace('/');
    }, 4000);
  };

  return (
    <View style={styles.container}>
      {/* 상단 정보 */}
      <ScrollView style={styles.infoArea}>
        <Text style={styles.headerLabel}>이용시간 1시간 6분 남음</Text>
        <View style={styles.divider} />
        <Text style={styles.title}>안전운전하세요.</Text>

        {/* 자동차 이미지 삽입 */}
        <View style={styles.carImageWrapper}>
          <ImageBackground
            source={carImage}
            style={styles.carImage}
            imageStyle={{ borderRadius: 12 }}
          ></ImageBackground>
        </View>
      </ScrollView>

      {/* 반납 완료 메시지 */}
      {isReturned && (
        <View style={styles.returnMessageWrapper}>
          <Text style={styles.returnMessage}>반납되었습니다.</Text>
        </View>
      )}

      {/* 하단 영역 */}
      <View style={styles.bottomSection}>
        <View style={styles.divider} />

        {/* 반납 장소 및 시간 정보 */}
        <View style={styles.rentalInfo}>
          <View style={styles.infoRow}>
            <MaterialCommunityIcons name="map-marker" size={20} color="#888" />
            <Text style={styles.infoLabel}>반납 장소 :</Text>
            <Text style={styles.infoValue}>서울시 강남구 역삼동 123-4</Text>
          </View>
          <View style={styles.infoRow}>
            <MaterialCommunityIcons
              name="clock-outline"
              size={20}
              color="#888"
            />
            <Text style={styles.infoLabel}>반납 시각 : </Text>
            <Text style={styles.infoValue}>21:30</Text>
            <TouchableOpacity style={styles.extendButton}>
              <Text style={styles.extendButtonText}>연장하기</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* 스마트키 컨트롤 */}
        <View style={styles.smartKeyPanel}>
          <Text style={styles.smartKeyStatus}>스마트키 ON</Text>

          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.keyButton}>
              <MaterialCommunityIcons name="car-door" size={26} color="black" />
              <Text style={styles.keyLabel}>도어 열기</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.keyButton}>
              <MaterialCommunityIcons
                name="car-door-lock"
                size={26}
                color="black"
              />
              <Text style={styles.keyLabel}>도어 잠금</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.keyButton}>
              <MaterialCommunityIcons
                name="alarm-light"
                size={26}
                color="black"
              />
              <Text style={styles.keyLabel}>비상등</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.returnButton} onPress={handleReturn}>
            <Text style={styles.returnButtonText}>반납하기</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1d23',
    justifyContent: 'space-between',
  },
  infoArea: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  headerLabel: {
    color: '#00AEEF',
    fontSize: 20,
    marginTop: 15,
    marginBottom: 15,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 6,
  },
  carImageWrapper: {
    width: '100%',
    height: 160,
    marginTop: 80,
    marginBottom: 20,
    borderRadius: 12,
    overflow: 'hidden',
  },
  carImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradientOverlay: {
    ...StyleSheet.absoluteFillObject,
  },
  bottomSection: {
    paddingHorizontal: 20,
    paddingBottom: 16,
  },
  rentalInfo: {
    marginBottom: 12,
    backgroundColor: '#1f2229',
    padding: 14,
    borderRadius: 12,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  infoLabel: {
    color: '#aaa',
    fontSize: 15,
    marginLeft: 6,
    marginRight: 6,
  },
  infoValue: {
    color: '#fff',
    fontSize: 15,
    flexShrink: 1,
  },
  extendButton: {
    marginLeft: 'auto',
    backgroundColor: '#333',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
  },
  extendButtonText: {
    color: '#00AEEF',
    fontSize: 12,
  },
  smartKeyPanel: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 20,
    marginBottom: 16,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  smartKeyStatus: {
    textAlign: 'center',
    fontSize: 14,
    color: '#00AEEF',
    marginBottom: 12,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  keyButton: {
    flex: 1,
    alignItems: 'center',
  },
  keyLabel: {
    marginTop: 4,
    fontSize: 13,
    color: '#333',
  },
  returnButton: {
    marginTop: 20,
    backgroundColor: '#00AEEF',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
  },
  returnButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  returnMessageWrapper: {
    position: 'absolute',
    top: '50%',
    left: 0,
    right: 0,
    alignItems: 'center',
    transform: [{ translateY: -30 }],
  },
  returnMessage: {
    fontSize: 22,
    color: '#fff',
    backgroundColor: '#000',
    padding: 16,
    borderRadius: 12,
    fontWeight: 'bold',
  },
  divider: {
    height: 1,
    backgroundColor: '#2c2f36',
    marginVertical: 12,
  },
});

export default DriveControl;
