export interface Payload<T> {
	payload: T;
}

export const toPayload = <T>(payload: T): Payload<T> => ({ payload });
