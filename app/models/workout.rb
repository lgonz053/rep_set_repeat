class Workout < ApplicationRecord
  belongs_to :user
  has_many :workout_sets
  has_many :exercises, through: :workout_sets
  has_many :body_correlations, through: :exercises
  has_many :body_parts, through: :body_correlations

  enum muscle_group: { legs: 1, chest: 2, back: 3, shoulders: 4, biceps: 5, triceps: 6, abs: 7, cardio: 8 }

  # def uniq_body_parts
  #   body_parts.uniq
  # end
end
