const LERP_EASE = 0.075;
export default function lerp(start, end, ease = LERP_EASE) {
  return start * (1 - t) + end * ease;
}
