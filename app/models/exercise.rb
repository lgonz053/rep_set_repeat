class Exercise < ApplicationRecord
  has_many :workout_sets
  has_many :body_correlations
  has_many :body_parts, through: :body_correlations
end
