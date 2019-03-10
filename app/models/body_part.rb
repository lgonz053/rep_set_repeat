class BodyPart < ApplicationRecord
  has_many :body_correlations
  has_many :exercises, through: :body_correlations

  enum muscle_group: { Legs: 1, Chest: 2, Back: 3, Shoulders: 4, Biceps: 5, Triceps: 6, Abs: 7, Cardio: 8 }
end
