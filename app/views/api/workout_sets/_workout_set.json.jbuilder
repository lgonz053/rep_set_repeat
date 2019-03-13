json.id workout_set.id
json.workout_id workout_set.workout_id
json.exercise_id workout_set.exercise_id
json.groups workout_set.groups
json.reps workout_set.reps
json.weight workout_set.weight
json.total_volume workout_set.total_volume

json.exercise do
  json.partial! workout_set.exercise, partial: 'api/exercises/exercise', as: :exercise
end
