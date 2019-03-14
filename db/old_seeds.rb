# BodyCorrelation.create!([
#   {body_part_id: 1, exercise_id: 1},
#   {body_part_id: 2, exercise_id: 1},
#   {body_part_id: 12, exercise_id: 1},
#   {body_part_id: 7, exercise_id: 2},
#   {body_part_id: 13, exercise_id: 2},
#   {body_part_id: 20, exercise_id: 2},
#   {body_part_id: 20, exercise_id: 3},
#   {body_part_id: 13, exercise_id: 3},
#   {body_part_id: 14, exercise_id: 3},
#   {body_part_id: 5, exercise_id: 3},
#   {body_part_id: 21, exercise_id: 4},
#   {body_part_id: 23, exercise_id: 4},
#   {body_part_id: 22, exercise_id: 4},
#   {body_part_id: 10, exercise_id: 4},
#   {body_part_id: 9, exercise_id: 4},
#   {body_part_id: 11, exercise_id: 4},
#   {body_part_id: 2, exercise_id: 5},
#   {body_part_id: 12, exercise_id: 5},
#   {body_part_id: 19, exercise_id: 5},
#   {body_part_id: 15, exercise_id: 5},
#   {body_part_id: 11, exercise_id: 5}
# ])
# BodyPart.create!([
#   {name: "Quads", muscle_group: "Legs"},
#   {name: "Hamstrings", muscle_group: "Legs"},
#   {name: "External Obliques", muscle_group: "Abs"},
#   {name: "Front Abdomen", muscle_group: "Abs"},
#   {name: "Upper Chest", muscle_group: "Chest"},
#   {name: "Lower Chest", muscle_group: "Chest"},
#   {name: "Mid Chest", muscle_group: "Chest"},
#   {name: "Center Chest", muscle_group: "Chest"},
#   {name: "Traps", muscle_group: "Back"},
#   {name: "Lats", muscle_group: "Back"},
#   {name: "Lower Back", muscle_group: "Back"},
#   {name: "Glutes", muscle_group: "Legs"},
#   {name: "Front Deltoid", muscle_group: "Shoulders"},
#   {name: "Side Deltoid", muscle_group: "Shoulders"},
#   {name: "Back Deltoid", muscle_group: "Shoulders"},
#   {name: "Lateral Head", muscle_group: "Triceps"},
#   {name: "Medial Head", muscle_group: "Triceps"},
#   {name: "Long Head", muscle_group: "Triceps"},
#   {name: "Biceps", muscle_group: "Biceps"},
#   {name: "Whole Tricep", muscle_group: "Triceps"},
#   {name: "Legs", muscle_group: "Legs"},
#   {name: "Chest", muscle_group: "Chest"},
#   {name: "Abs", muscle_group: "Abs"}
# ])
# Exercise.create!([
#   {name: "Squats", description: "To begin, first set the bar on a rack just above shoulder level. Once the correct height is chosen and the bar is loaded, step under the bar and place the back of your shoulders (slightly below the neck) across it.", video_url: nil, volume_per_exercise: nil},
#   {name: "Bench Press", description: "Lie back on a flat bench. Using a medium width grip (a grip that creates a 90-degree angle in the middle of the movement between the forearms and the upper arms), lift the bar from the rack and hold it straight over you with your arms locked. This will be your starting position.\nFrom the starting position, breathe in and begin coming down slowly until the bar touches your middle chest.\nAfter a brief pause, push the bar back to the starting position as you breathe out. Focus on pushing the bar using your chest muscles.", video_url: nil, volume_per_exercise: nil},
#   {name: "Standing Military Press", description: "Start by placing a barbell that is about chest high on a squat rack. Once you have selected the weights, grab the barbell using a pronated (palms facing forward) grip. Make sure to grip the bar wider than shoulder width apart from each other.\nSlightly bend the knees and place the barbell on your collar bone. Lift the barbell up keeping it lying on your chest. Take a step back and position your feet shoulder width apart from each other.\nOnce you pick up the barbell with the correct grip length, lift the bar up over your head by locking your arms. Hold at about shoulder level and slightly in front of your head. This is your starting position.\nLower the bar down to the collarbone slowly as you inhale.\nLift the bar back up to the starting position as you exhale.\nRepeat for the recommended amount of repetitions.", video_url: nil, volume_per_exercise: nil},
#   {name: "Deadlift", description: "Approach the bar so that it is centered over your feet. Your feet should be about hip-width apart. Bend at the hip to grip the bar at shoulder-width allowing your shoulder blades to protract. Typically, you would use an alternating grip.\nWith your feet and your grip set, take a big breath and then lower your hips and flex the knees until your shins contact the bar. Look forward with your head. Keep your chest up and your back arched, and begin driving through the heels to move the weight upward.\nAfter the bar passes the knees aggressively pull the bar back, pulling your shoulder blades together as you drive your hips forward into the bar.\nLower the bar by bending at the hips and guiding it to the floor.", video_url: nil, volume_per_exercise: nil},
#   {name: "Bent Over Row", description: "Holding a barbell with a pronated grip (palms facing down), bend your knees slightly and bring your torso forward, by bending at the waist, while keeping the back straight until it is almost parallel to the floor. Tip: Make sure that you keep the head up. The barbell should hang directly in front of you as your arms hang perpendicular to the floor and your torso. This is your starting position.\nNow, while keeping the torso stationary, breathe out and lift the barbell to you. Keep the elbows close to the body and only use the forearms to hold the weight. At the top contracted position, squeeze the back muscles and hold for a brief pause.\nThen inhale and slowly lower the barbell back to the starting position.\nRepeat for the recommended amount of repetitions.\nCaution: This exercise is not recommended for people with back problems. A Low Pulley Row is a better choice for people with back issues.\n\nAlso, just like with the bent knee dead-lift, if you have a healthy back, ensure perfect form and never slouch the back forward as this can cause back injury.\n\nBe cautious as well with the weight used; in case of doubt, use less weight rather than more.\n\nVariations: You can perform the same exercise using a supinated (palms facing you) grip", video_url: nil, volume_per_exercise: nil}
# ])
# User.create!([
#   {name: "Leo", email: "leo@gmail.com", password_digest: "$2a$10$zcnM1VoMCNNiRzdtjy/CLe4uCcc.CV.Z8h3M7tV/YmJB51kwTokVe", admin: true}
# ])
# Workout.create!([
#   {user_id: 1, muscle_group: "Legs", time_limit: "1.0"},
#   {user_id: 1, muscle_group: "Chest", time_limit: "1.15"},
#   {user_id: 1, muscle_group: "Back", time_limit: "2.0"}
# ])
# WorkoutSet.create!([
#   {workout_id: 1, exercise_id: 1, groups: 1, reps: 10, weight: 135, total_volume: 1350},
#   {workout_id: 1, exercise_id: 1, groups: 1, reps: 8, weight: 155, total_volume: 1240},
#   {workout_id: 1, exercise_id: 1, groups: 1, reps: 6, weight: 185, total_volume: 1110}
# ])
