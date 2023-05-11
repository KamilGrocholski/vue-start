type Result<T> = {
  success: true;
  data: T;
} | {
  success: false;
  error: unknown;
};

export function parseJSON(data: string): Result<unknown> {
  try {
    const parsed = JSON.parse(data) as unknown;
    return {
      success: true,
      data: parsed,
    };
  } catch (error) {
    return {
      success: false,
      error,
    };
  }
}

export function stringifyJSON<T>(data: T): Result<string> {
  try {
    const stringified = JSON.stringify(data);
    return {
      success: true,
      data: stringified,
    };
  } catch (error) {
    return {
      success: false,
      error,
    };
  }
}
