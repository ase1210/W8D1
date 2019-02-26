export const fetchBenches = () => (
  $.ajax ({
    method: 'GET',
    url: '/api/benches',
    dataType: 'json'
  })
)

export const postBench = (bench) => (
  $.ajax ({
    method: 'Post',
    url: `/api/benches`,
    dataType: 'json',
    data: {bench}
  })
)