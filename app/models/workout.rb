class Workout < ApplicationRecord
  belongs_to :user
  has_many :workout_sets, dependent: :destroy
  has_many :exercises, through: :workout_sets
  has_many :body_correlations, through: :exercises
  has_many :body_parts, through: :body_correlations

  validates :time_limit, presence: true, numericality: { greater_than: 0 }

  enum muscle_group: { Legs: 1, Chest: 2, Back: 3, Shoulders: 4, Biceps: 5, Triceps: 6, Abs: 7, Cardio: 8 }

  def friendly_time_limit
    time_message = ''
    minutes = ((time_limit % 1) * 60).to_i
    hours = time_limit.floor

    time_message += "#{hours} #{'Hour'.pluralize(hours)}" if hours > 0
    time_message += ", " if hours > 0 && minutes > 0
    time_message += "#{minutes} #{"Minute".pluralize(minutes)}" if minutes > 0
    time_message
  end
end