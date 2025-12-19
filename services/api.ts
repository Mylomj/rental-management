export async function simulateNetwork<T>(data: T, delayMs = 500): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), delayMs);
  });
}


