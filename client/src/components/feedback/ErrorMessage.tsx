import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../theme/colors';
import { borderRadius, spacing } from '../../theme/spacing';

export function ErrorMessage({ message }: { message: string }) {
  if (!message) return null;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.errorLight,
    borderColor: colors.error,
    borderRadius: borderRadius.md,
    borderWidth: 1,
    marginVertical: spacing.sm,
    padding: spacing.md,
  },
  text: {
    color: colors.error,
    fontSize: 13,
    fontWeight: '600',
  },
});
