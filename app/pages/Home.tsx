import { Feather, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useEffect, useRef, useState } from 'react';
import {
  Animated,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { homeStyles as styles } from '../styles/styles.home';
let hasSeenSplash = false;
const HomeScreen = () => {
  const router = useRouter();

  // Splash 애니메이션 상태
  const [showSplash, setShowSplash] = useState(true);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (hasSeenSplash) {
      setShowSplash(false); // 🔹 한 번 본 사람은 바로 통과
      return;
    }
    hasSeenSplash = true; // 🔹 첫 진입자에만 splash 보여줌

    // 1. 페이드 인
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start(() => {
      // 2. 페이드 인 완료 후 1초 유지
      setTimeout(() => {
        // 3. 페이드 아웃
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }).start(() => {
          // 4. 스플래시 종료
          setShowSplash(false);
        });
      }, 1000);
    });
  }, []);

  if (showSplash) {
    return (
      <View style={splashStyles.container}>
        <Animated.Text style={[splashStyles.logoText, { opacity: fadeAnim }]}>
          SHARE
        </Animated.Text>
        <Animated.Text style={[splashStyles.subText, { opacity: fadeAnim }]}>
          모두를 위한 안전 공유 플랫폼
        </Animated.Text>
      </View>
    );
  }

  return (
    <ScrollView style={[styles.container, { backgroundColor: '#fff' }]}>
      {/* 🔹 TopBar */}
      <View style={styles.topBar}>
        <Text style={styles.logo}>SHARE</Text>
        <View style={styles.iconGroup}>
          <Feather name="bell" size={23} color="#666" style={styles.icon} />
          <Feather name="menu" size={25} color="#666" />
        </View>
      </View>

      {/* 🔹 상단 카드 - 가지러 가기 */}
      <TouchableOpacity style={styles.fullCard}>
        <Text style={styles.cardTitle}>가지러 가기</Text>
        <Text style={styles.cardSub}>가까운 공유존 찾기</Text>
      </TouchableOpacity>

      {/* 🔹 듀얼 카드 - 여기로 부르기, 한 달 이상 */}
      <View style={styles.dualCardBox}>
        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardTitle}>여기로 부르기</Text>
          <Text style={styles.cardSub}>원하는 장소로 차량 요청</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardTitle}>한 달 이상</Text>
          <Text style={styles.cardSub}>장기 렌탈 요금제</Text>
        </TouchableOpacity>
      </View>

      {/* 🔹 트리플 카드 - 킥보드, 자동차, 자전거 */}
      <View style={styles.tripleCardBox}>
        <TouchableOpacity
          style={styles.iconCard}
          onPress={() =>
            router.push({
              pathname: '/IDCardScanner',
              params: { vehicle: '킥보드' },
            })
          }
        >
          <FontAwesome5 name="motorcycle" size={24} color="#00AEEF" />
          <Text style={styles.cardSub}>킥보드</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconCard}
          onPress={() =>
            router.push({
              pathname: '/IDCardScanner',
              params: { vehicle: '자동차' },
            })
          }
        >
          <FontAwesome5 name="car" size={22} color="#00AEEF" />
          <Text style={styles.cardSub}>자동차</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconCard}
          onPress={() =>
            router.push({
              pathname: '/IDCardScanner',
              params: { vehicle: '자전거' },
            })
          }
        >
          <FontAwesome5 name="bicycle" size={24} color="#00AEEF" />
          <Text style={styles.cardSub}>자전거</Text>
        </TouchableOpacity>
      </View>

      {/* 🔹 출석체크 배너 */}
      <View style={styles.banner}>
        <Text style={styles.bannerText}>
          📅 7월 출석체크 참여하고 크레딧 받기!
        </Text>
      </View>

      {/* 🔹 교통수단 추천 카드 리스트 */}
      <View style={styles.transportContainer}>
        <Text style={styles.transportTitle}>어떤 이동 수단이 필요하세요?</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.transportCard}>
            <Text style={styles.cardTitle}>킥보드</Text>
            <Text style={styles.cardSub}>가볍게 근거리 이동</Text>
          </View>
          <View style={styles.transportCard}>
            <Text style={styles.cardTitle}>자동차</Text>
            <Text style={styles.cardSub}>편하게 장거리 주행</Text>
          </View>
          <View style={styles.transportCard}>
            <Text style={styles.cardTitle}>자전거</Text>
            <Text style={styles.cardSub}>가볍고 효율적인 중거리용</Text>
          </View>
        </ScrollView>
      </View>

      {/* 🔹 하단 가이드 섹션 */}
      <View style={styles.guideContainer}>
        <View style={styles.guideRow}>
          <View>
            <Text style={styles.guideTitle}>이용 가이드</Text>
            <Text style={styles.guideSub}>차를 처음 예약하시나요?</Text>
          </View>
          <MaterialIcons name="info" size={24} color="#00AEEF" />
        </View>

        <View style={styles.iconRow}>
          <TouchableOpacity style={styles.iconBox}>
            <Feather name="help-circle" size={24} color="#555" />
            <Text style={styles.iconLabel}>고객센터</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBox}>
            <Feather name="file-text" size={24} color="#555" />
            <Text style={styles.iconLabel}>이용내역</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBox}>
            <Feather name="credit-card" size={24} color="#555" />
            <Text style={styles.iconLabel}>결제수단</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBox}>
            <Feather name="refresh-cw" size={24} color="#555" />
            <Text style={styles.iconLabel}>내 크레딧</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const splashStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1d23',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#00AEEF',
    marginBottom: 20,
  },
  subText: {
    fontSize: 16,
    color: '#ccc',
  },
});
