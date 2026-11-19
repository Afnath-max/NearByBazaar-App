import { AppError } from '../utils/AppError.js';

export function validateCartItemInput(quantity: unknown, substitute?: unknown) {
  if (quantity !== undefined) {
    const q = Number(quantity);
    if (!Number.isInteger(q) || q < 1) {
      throw new AppError('Quantity must be an integer greater than 0', 400);
    }
  }

  if (substitute !== undefined && typeof substitute !== 'string') {
    throw new AppError('Substitute preference must be a valid string', 400);
  }
}

export function validateCheckoutInput(body: {
  pickupSlotId?: unknown;
  checkoutKey?: unknown;
  pickupNote?: unknown;
  paymentMethod?: unknown;
}) {
  if (!body.pickupSlotId || typeof body.pickupSlotId !== 'string') {
    throw new AppError('Valid pickup slot ID is required for checkout', 400);
  }

  if (body.checkoutKey && typeof body.checkoutKey !== 'string') {
    throw new AppError('Checkout idempotency key must be a string', 400);
  }

  if (body.pickupNote && typeof body.pickupNote !== 'string') {
    throw new AppError('Pickup note must be a string', 400);
  }
}
