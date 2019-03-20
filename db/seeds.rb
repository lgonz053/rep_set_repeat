
User.create!([
  {name: "Leo", email: "leo@gmail.com", password_digest: "$2a$10$zcnM1VoMCNNiRzdtjy/CLe4uCcc.CV.Z8h3M7tV/YmJB51kwTokVe", admin: true},
  {name: "patty hwang", email: "patty@gmail.com", password_digest: "$2a$10$7flkZmHHg3G.3yv5/q4qMupim.54sd2hhwnG7Q2xA6P5YvaxO.tNS", admin: false}
])
Workout.create!([
  {user_id: 1, muscle_group: "Legs", time_limit: "1.5"},
  {user_id: 1, muscle_group: "Shoulders", time_limit: "1.0"},
  {user_id: 1, muscle_group: "Shoulders", time_limit: "0.45"},
  {user_id: 1, muscle_group: "Back", time_limit: "2.0"},
  {user_id: 1, muscle_group: "Cardio", time_limit: "1.0"},
  {user_id: 1, muscle_group: "Biceps", time_limit: "2.0"}
])
WorkoutSet.create!([
  {workout_id: 1, exercise_id: 1, groups: 1, reps: 10, weight: 135, total_volume: 1350},
  {workout_id: 1, exercise_id: 1, groups: 1, reps: 8, weight: 155, total_volume: 1240},
  {workout_id: 1, exercise_id: 1, groups: 1, reps: 6, weight: 185, total_volume: 1110},
  {workout_id: 4, exercise_id: 3, groups: 1, reps: 10, weight: 110, total_volume: 1100},
  {workout_id: 1, exercise_id: 4, groups: 1, reps: 10, weight: 200, total_volume: 2000},
  {workout_id: 1, exercise_id: 4, groups: 1, reps: 5, weight: 235, total_volume: 1175},
  {workout_id: 1, exercise_id: 4, groups: 1, reps: 5, weight: 240, total_volume: 1200},
  {workout_id: 5, exercise_id: 172, groups: 1, reps: 10, weight: 45, total_volume: 450}
])

BodyCorrelation.create!([
  {body_part_id: 1, exercise_id: 1},
  {body_part_id: 2, exercise_id: 1},
  {body_part_id: 12, exercise_id: 1},
  {body_part_id: 7, exercise_id: 2},
  {body_part_id: 13, exercise_id: 2},
  {body_part_id: 20, exercise_id: 2},
  {body_part_id: 20, exercise_id: 3},
  {body_part_id: 13, exercise_id: 3},
  {body_part_id: 14, exercise_id: 3},
  {body_part_id: 5, exercise_id: 3},
  {body_part_id: 21, exercise_id: 4},
  {body_part_id: 23, exercise_id: 4},
  {body_part_id: 22, exercise_id: 4},
  {body_part_id: 10, exercise_id: 4},
  {body_part_id: 9, exercise_id: 4},
  {body_part_id: 11, exercise_id: 4},
  {body_part_id: 2, exercise_id: 5},
  {body_part_id: 12, exercise_id: 5},
  {body_part_id: 19, exercise_id: 5},
  {body_part_id: 15, exercise_id: 5},
  {body_part_id: 11, exercise_id: 5}
])
BodyPart.create!([
  {name: "Quads", muscle_group: "Legs"},
  {name: "Hamstrings", muscle_group: "Legs"},
  {name: "External Obliques", muscle_group: "Abs"},
  {name: "Front Abdomen", muscle_group: "Abs"},
  {name: "Upper Chest", muscle_group: "Chest"},
  {name: "Lower Chest", muscle_group: "Chest"},
  {name: "Mid Chest", muscle_group: "Chest"},
  {name: "Center Chest", muscle_group: "Chest"},
  {name: "Traps", muscle_group: "Back"},
  {name: "Lats", muscle_group: "Back"},
  {name: "Lower Back", muscle_group: "Back"},
  {name: "Glutes", muscle_group: "Legs"},
  {name: "Front Deltoid", muscle_group: "Shoulders"},
  {name: "Side Deltoid", muscle_group: "Shoulders"},
  {name: "Back Deltoid", muscle_group: "Shoulders"},
  {name: "Lateral Head", muscle_group: "Triceps"},
  {name: "Medial Head", muscle_group: "Triceps"},
  {name: "Long Head", muscle_group: "Triceps"},
  {name: "Biceps", muscle_group: "Biceps"},
  {name: "Whole Tricep", muscle_group: "Triceps"},
  {name: "Legs", muscle_group: "Legs"},
  {name: "Chest", muscle_group: "Chest"},
  {name: "Abs", muscle_group: "Abs"}
])
