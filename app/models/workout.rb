class Workout < ApplicationRecord
  belongs_to :user
  has_many :workout_sets
  has_many :exercises, through: :workout_sets
  has_many :body_correlations, through: :exercises
  has_many :body_parts, through: :body_correlations

  def uniq_body_parts
    body_parts.uniq
  end
end
