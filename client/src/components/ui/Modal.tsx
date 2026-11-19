import { Modal as RNModal, StyleSheet, TouchableOpacity, View, type ModalProps } from 'react-native';
import { colors } from '../../theme/colors';
import { borderRadius, spacing } from '../../theme/spacing';

type CustomModalProps = ModalProps & {
  isOpen: boolean;
  onClose: () => void;
};

export function Modal({ isOpen, onClose, children, ...props }: CustomModalProps) {
  return (
    <RNModal
      animationType="slide"
      transparent
      visible={isOpen}
      onRequestClose={onClose}
      {...props}
    >
      <View style={styles.overlay}>
        <TouchableOpacity style={styles.backdrop} activeOpacity={1} onPress={onClose} />
        <View style={styles.content}>{children}</View>
      </View>
    </RNModal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  content: {
    backgroundColor: colors.surface,
    borderTopLeftRadius: borderRadius.xl,
    borderTopRightRadius: borderRadius.xl,
    maxHeight: '85%',
    padding: spacing.xl,
  },
});
