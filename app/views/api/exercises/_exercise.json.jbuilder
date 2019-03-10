json.id exercise.id
json.name exercise.name
json.description exercise.description
json.video_url exercise.video_url

json.body_parts do
  json.array! exercise.body_parts, partial: 'api/body_parts/body_part', as: :body_part
end