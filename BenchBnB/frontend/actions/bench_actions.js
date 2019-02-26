import * as BenchAPIUtil from '../util/bench_api_util';

export const RECEIVE_ALL_BENCHES = "RECEIVE_ALL_BENCHES"
export const RECEIVE_BENCH = "RECEIVE_BENCH"
// export const RECEIVE_BENCH_ERROR = "RECEIVE_BENCH_ERROR"

const receiveBenches = (benches) => ({
  type: RECEIVE_ALL_BENCHES,
  benches
})

const receiveBench = bench => ({
  type: RECEIVE_BENCH,
  bench
})

export const fetchBenches = () => dispatch => (
  BenchAPIUtil.fetchBenches()
  .then(benches => dispatch(receiveBenches(benches))
  )
)

export const postBench = (bench) => dispatch => (
  BenchAPIUtil.postBench(bench)
  .then(bench => dispatch(receiveBench(bench)))
)