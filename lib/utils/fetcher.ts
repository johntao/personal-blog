export default async function Fetcher(input: RequestInfo | URL, init?: RequestInit) {
  const res = await fetch(input, init)
  return res.json()
}
