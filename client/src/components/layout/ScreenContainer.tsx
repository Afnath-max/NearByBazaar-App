import { SafeAreaView, StatusBar, StyleSheet, View, type ViewProps } from 'react-native';
import { colors } from '../../theme/colors';

export function ScreenContainer({ style, children, ...props }: ViewProps) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
      <View style={[styles.container, style]} {...props}>
        {children}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: colors.background,
    flex: 1,
  },
  container: {
    backgroundColor: colors.background,
    flex: 1,
  },
});
