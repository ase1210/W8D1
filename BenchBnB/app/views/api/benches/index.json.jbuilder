@benches.each do |bench|
  json.partial! 'show', bench: bench
end