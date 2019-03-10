class Workout < ApplicationRecord
  belongs_to :user
  has_many :workout_sets
  has_many :exercises, through: :workout_sets
  has_many :body_correlations, through: :exercises
  has_many :body_parts, through: :body_correlations

  enum muscle_group: { Legs: 1, Chest: 2, Back: 3, Shoulders: 4, Biceps: 5, Triceps: 6, Abs: 7, Cardio: 8 }

  def uniq_body_parts
    body_parts.uniq
  end
end