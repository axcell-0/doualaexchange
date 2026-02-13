export async function fetchRate(from: string, to: string) {
  const res = await fetch(
    `https://api.exchangerate.host/convert?from=${from}&to=${to}`
  );
  const data = await res.json();
  return data.result;
}
