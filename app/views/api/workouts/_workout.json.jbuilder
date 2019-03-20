json.id workout.id
json.user_id workout.user_id
json.muscle_group workout.muscle_group
json.time_limit workout.time_limit
json.created_at workout.created_at

json.workout_sets do
  json.array! workout.workout_sets, partial: 'api/workout_sets/workout_set', as: :workout_set
end

json.formatted do
  json.time_limit workout.friendly_time_limit
end 