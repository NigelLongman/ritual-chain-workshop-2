export const successfulResponse = {
  status: 200,
  body: {
    price: 2500,
    symbol: "ETH",
  },
};

export const lowerPriceResponse = {
  status: 200,
  body: {
    price: 1800,
    symbol: "ETH",
  },
};

export const emptyResponse = {
  status: 200,
  body: {},
};

export const serverErrorResponse = {
  status: 500,
  body: {
    error: "server error",
  },
};

export const malformedResponse = {
  status: 200,
  body: "not-json",
};

export function responseValue(
  response: {
    status: number;
    body: unknown;
  },
  key: string,
): unknown {
  if (
    response.body === null ||
    typeof response.body !== "object"
  ) {
    return undefined;
  }

  return (
    response.body as Record<
      string,
      unknown
    >
  )[key];
}

export function isSuccessful(
  response: {
    status: number;
  },
): boolean {
  return (
    response.status >= 200 &&
    response.status < 300
  );
}
