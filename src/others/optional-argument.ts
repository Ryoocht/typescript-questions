type Auth =
  | {
      type: "LOG_IN";
      payload: {
        userId: string;
      };
    }
  | {
      type: "SIGN_OUT";
    };

// const sendAuth = (eventType: Auth['type'], payload?: any) => {}

const sendAuth = <T extends Auth['type']>(
    ...args: Extract<Auth, {type: T}> extends {payload: infer TPayload}
    ? [type: T, payload: TPayload]
    : [type: T]
) => {}

sendAuth('SIGN_OUT')
sendAuth('LOG_IN', {userId: '123'})