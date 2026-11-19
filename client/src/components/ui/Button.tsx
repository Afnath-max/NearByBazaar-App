import { StyleSheet, Text, TouchableOpacity, type TouchableOpacityProps } from 'react-native';
import { colors } from '../../theme/colors';
import { borderRadius, spacing } from '../../theme/spacing';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'danger';

type ButtonProps = TouchableOpacityProps & {
  label: string;
  variant?: ButtonVariant;
};

export function Button({ label, variant = 'primary', style, ...props }: ButtonProps) {
  const variantStyle = styles[variant] ?? styles.primary;
  const labelStyle = variant === 'outline' ? styles.outlineLabel : styles.label;

  return (
    <TouchableOpacity
      accessibilityRole="button"
      activeOpacity={0.8}
      {...props}
      style={[styles.button, variantStyle, props.disabled && styles.disabled, style]}
    >
      <Text style={[styles.label, labelStyle]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderRadius: borderRadius.md,
    minHeight: 48,
    justifyContent: 'center',
    paddingHorizontal: spacing.xl,
  },
  primary: {
    backgroundColor: colors.primary,
  },
  secondary: {
    backgroundColor: colors.secondary,
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderColor: colors.primary,
  },
  danger: {
    backgroundColor: colors.error,
  },
  disabled: {
    opacity: 0.5,
  },
  label: {
    color: colors.textInverse,
    fontSize: 16,
    fontWeight: '700',
  },
  outlineLabel: {
    color: colors.primary,
  },
});
