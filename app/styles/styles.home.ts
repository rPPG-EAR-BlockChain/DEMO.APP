// styles/styles.home.ts
import { StyleSheet } from 'react-native';

export const homeStyles = StyleSheet.create({
  // 🔷 기본 컨테이너
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    paddingHorizontal: 16,
  },

  // 🔷 상단바
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 70,
    paddingBottom: 16,
    alignItems: 'center',
  },
  logo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#00AEEF',
  },
  iconGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 16,
  },

  // 🔷 상단 단일 카드
  fullCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 50,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#333',
    marginBottom: 4,
  },
  cardSub: {
    fontSize: 13,
    color: '#666',
    marginTop: 4,
    textAlign: 'center',
  },

  // 🔷 듀얼 카드 (여기로 부르기, 한 달 이상)
  dualCardBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    width: '48%',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },

  // 🔷 트리플 카드 (킥보드, 차+KTX, 자전거)
  tripleCardBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  iconCard: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 14,
    width: '30%',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },

  // 🔷 출석체크 배너
  banner: {
    backgroundColor: '#00AEEF',
    padding: 18,
    borderRadius: 12,
    marginBottom: 20,
  },
  bannerText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },

  transportContainer: {
    marginBottom: 20,
  },
  transportTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#222',
  },
  transportCard: {
    width: 150,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 50,
    marginRight: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // 🔷 하단 가이드 (이용 가이드 + 아이콘 4개)
  guideContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  guideRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  guideTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 4,
  },
  guideSub: {
    fontSize: 13,
    color: '#666',
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconBox: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '22%',
  },
  iconLabel: {
    marginTop: 6,
    fontSize: 12,
    color: '#444',
    textAlign: 'center',
  },
});
