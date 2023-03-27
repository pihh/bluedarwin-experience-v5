const LERP_EASE = 0.075;
export default function lerp(start, end, ease = LERP_EASE) {
  return start + ease * (end - start);
}

// function lerp( a, b, alpha ) {
//   return a + alpha * ( b — a )
//  }
