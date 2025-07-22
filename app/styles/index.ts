import { Platform } from 'react-native';
import { styles as androidStyles } from './styles.android';
import { styles as iosStyles } from './styles.ios';

export const styles = Platform.OS === 'ios' ? iosStyles : androidStyles;
