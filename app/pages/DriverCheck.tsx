import {
  Entypo,
  FontAwesome5,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles'; // 스타일은 동일하게 유지

export default function DriverCheck() {
  const [permission, requestPermission] = useCameraPermissions();
  const [heartRate, setHeartRate] = useState('--');
  const [respirationRate, setRespirationRate] = useState('--');
  const [spo2, setSpo2] = useState('--');
  const [ear, setEAR] = useState('--');
  const [earComment, setEARComment] = useState('');
  const [isDanger, setIsDanger] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!permission) return;
    if (!permission.granted) requestPermission();

    if (permission?.granted) {
      setTimeout(() => {
        const hr = getBiometric('hr');
        const rr = getBiometric('rr');
        const sp = getBiometric('spo2');
        const earVal = parseFloat((Math.random() * 0.2 + 0.2).toFixed(3));

        setHeartRate(`${hr} bpm`);
        setRespirationRate(`${rr} rpm`);
        setSpo2(`${sp}%`);
        setEAR(earVal.toFixed(3));

        const earState =
          earVal < 0.25 ? '위험' : earVal < 0.28 ? '주의' : '정상';
        setEARComment(earState);

        const danger =
          hr > 110 || rr <= 5 || rr >= 25 || sp <= 90 || earState === '위험';
        setIsDanger(danger);
      }, 5000);
    }
  }, [permission]);

  const getBiometric = (type: string) => {
    const isDanger = Math.random() < 0.2;
    if (type === 'hr')
      return isDanger ? getRandom(111, 120) : getRandom(65, 90);
    if (type === 'rr')
      return isDanger
        ? [5, 25, 26][Math.floor(Math.random() * 3)]
        : getRandom(13, 20);
    if (type === 'spo2')
      return isDanger ? getRandom(85, 90) : getRandom(96, 100);
    return 0;
  };

  const getRandom = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  if (!permission) return <Text>카메라 권한 요청 중...</Text>;
  if (!permission.granted) return <Text>카메라 접근이 거부되었습니다.</Text>;

  return (
    <SafeAreaView style={styles.container}>
      {/* 상단 바 */}
      <View style={styles.topBar}>
        <TouchableOpacity
          style={styles.topBarLeft}
          onPress={() => router.push('/IDCardScanner')}
        >
          <Text style={styles.topBarIcon}>←</Text>
          <Text style={styles.topBarText}>뒤로가기</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.replace('/')}>
          <Text style={styles.topBarIcon}>✕</Text>
        </TouchableOpacity>
      </View>

      {/* 헤더 */}
      <View style={styles.header}>
        <Text style={styles.title}>운전자 생체 확인</Text>
        <Text style={styles.sub}>안전을 위한 간편 인증</Text>
      </View>

      {/* 메인 카드 */}
      <View style={styles.mainCard}>
        {/* 카메라 */}
        <View style={styles.cameraBox}>
          <CameraView style={styles.camera} facing="front" />
        </View>

        {/* 생체 정보 */}
        <View style={styles.bioWrapper}>
          <View style={styles.bioCard}>
            <MaterialCommunityIcons
              name="heart-pulse"
              size={24}
              color="#00AEEF"
            />
            <Text style={styles.label}>맥박</Text>
            <Text style={styles.value}>{heartRate}</Text>
          </View>
          <View style={styles.bioCard}>
            <Entypo name="air" size={24} color="#00AEEF" />
            <Text style={styles.label}>호흡률</Text>
            <Text style={styles.value}>{respirationRate}</Text>
          </View>
          <View style={styles.bioCard}>
            <FontAwesome5 name="tint" size={24} color="#00AEEF" />
            <Text style={styles.label}>SpO₂</Text>
            <Text style={styles.value}>{spo2}</Text>
          </View>
          <View style={styles.bioCard}>
            <MaterialCommunityIcons name="eye" size={24} color="#00AEEF" />
            <Text style={styles.label}>EAR</Text>
            <Text
              style={[
                styles.value,
                {
                  color:
                    earComment === '위험'
                      ? 'red'
                      : earComment === '주의'
                      ? 'orange'
                      : 'black', // ← 하늘색 대신 검정색
                },
              ]}
            >
              {earComment}
            </Text>
          </View>
        </View>

        {/* 기준표 */}
        <View style={styles.guideline}>
          <Text style={styles.guideTitle}>생체 기준표</Text>

          <View style={styles.tableWrapper}>
            <View style={styles.tableHeader}>
              <Text style={styles.th}>항목</Text>
              <Text style={styles.th}>정상</Text>
              <Text style={styles.th}>주의</Text>
              <Text style={styles.th}>위험</Text>
            </View>
            {[
              {
                label: '맥박',
                normal: '65 ~ 110 ',
                warning: '111 ~ 120',
                danger: '120≤',
              },
              {
                label: '호흡률',
                normal: '13 ~ 24 ',
                warning: '≤12 / ≥25',
                danger: '≤5 / ≥30',
              },
              {
                label: '스트레스',
                normal: '4.0 ~ 5.0',
                warning: '≤3.0 / ≥6.0',
                danger: '≤2.5 / ≥7.0',
              },
              {
                label: 'SpO₂',
                normal: '95 ~ 100%',
                warning: '90 ~ 94%',
                danger: '≥90%',
              },
              {
                label: 'EAR',
                normal: '≥0.28',
                warning: '0.25 ~ 0.27',
                danger: '≤0.24',
              },
            ].map((row, idx) => (
              <View key={idx} style={styles.tableRow}>
                <Text style={styles.td}>{row.label}</Text>
                <Text style={styles.td}>{row.normal}</Text>
                <Text style={styles.td}>{row.warning}</Text>
                <Text style={styles.td}>{row.danger}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* 운행 버튼 */}
        <TouchableOpacity
          disabled={isDanger}
          style={[styles.startButton, isDanger && styles.disabled]}
          onPress={() => router.push('/pages/DrivingScreen')}
        >
          <Text style={styles.startText}>
            {isDanger ? '운행 불가' : '운행 시작'}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
