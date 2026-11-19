import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../theme/colors';
import { borderRadius, spacing } from '../../theme/spacing';

export type BadgeVariant = 'success' | 'warning' | 'error' | 'info' | 'default';

type BadgeProps = {
  label: string;
  variant?: BadgeVariant;
};

export function Badge({ label, variant = 'default' }: BadgeProps) {
  const bgStyle = styles[`bg_${variant}`] ?? styles.bg_default;
  const textStyle = styles[`text_${variant}`] ?? styles.text_default;

  return (
    <View style={[styles.badge, bgStyle]}>
      <Text style={[styles.text, textStyle]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    alignSelf: 'flex-start',
    borderRadius: borderRadius.full,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
  },
  text: {
    fontSize: 11,
    fontWeight: '700',
  },
  bg_default: { backgroundColor: colors.borderLight },
  text_default: { color: colors.textSecondary },
  bg_success: { backgroundColor: colors.successLight },
  text_success: { color: colors.success },
  bg_warning: { backgroundColor: colors.warningLight },
  text_warning: { color: colors.warning },
  bg_error: { backgroundColor: colors.errorLight },
  text_error: { color: colors.error },
  bg_info: { backgroundColor: colors.infoLight },
  text_info: { color: colors.info },
});
