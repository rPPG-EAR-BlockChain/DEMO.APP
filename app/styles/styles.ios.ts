import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  // 기본 컨테이너
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 16,
  },
  // 최상단 TopBar
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingBottom: 4,
    paddingTop: 8,
  },

  topBarLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  topBarIcon: {
    fontSize: 18,
    color: '#666',
    marginRight: 4,
  },

  topBarText: {
    fontSize: 14,
    color: '#666',
  },
  // 헤더 영역
  header: {
    paddingVertical: 10,
    width: '85%',
    paddingLeft: 18,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#222',
    textAlign: 'left',
  },
  sub: {
    fontSize: 13,
    color: '#666',
    marginTop: 2,
    textAlign: 'left',
  },

  // 카드 메인 박스
  mainCard: {
    backgroundColor: '#fff',
    borderRadius: 50,
    paddingVertical: 25,
    paddingHorizontal: 28,
    width: '93%',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
    marginBottom: 15,
  },

  // 섹션 구분선
  divider: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 16,
  },

  // 카메라 박스
  cameraBox: {
    width: '100%',
    aspectRatio: 1.3,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#000',
  },

  camera: {
    flex: 1,
  },

  guideText: {
    textAlign: 'center',
    color: '#555',
    fontSize: 14,
    marginBottom: 10,
  },

  // 생체 데이터 카드
  bioWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
    marginBottom: 10,
  },

  bioCard: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 12,
    marginHorizontal: 4,

    // 그림자 효과
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },

  label: {
    fontSize: 14,
    color: '#333',
    marginBottom: 4,
  },

  value: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#000000ff',
  },

  // 기준표 영역
  guideline: {
    marginTop: 5,
    width: '100%',
  },

  guideTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000000ff',
    marginBottom: 8,
  },

  // 표 구성
  tableWrapper: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    overflow: 'hidden',
  },

  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#f6f6f6',
    paddingVertical: 8,
  },

  tableRow: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: '#eee',
    paddingVertical: 6,
  },

  th: {
    flex: 1,
    fontWeight: '600',
    fontSize: 13,
    textAlign: 'center',
    color: '#333',
  },

  td: {
    flex: 1,
    fontSize: 13,
    textAlign: 'center',
    color: '#444',
  },

  // 하단 버튼
  startButton: {
    marginTop: 20,
    backgroundColor: '#00AEEF',
    paddingVertical: 15,
    width: '100%',
    borderRadius: 15,
    alignItems: 'center',
  },

  disabled: {
    backgroundColor: '#ccc',
  },

  startText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },

  // 🔷 하단 코멘트
  comment: {
    fontSize: 13,
    color: '#666',
    textAlign: 'center',
    marginTop: 8,
  },
});
