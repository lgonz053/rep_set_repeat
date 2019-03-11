class WorkoutSet < ApplicationRecord
  belongs_to :workout
  belongs_to :exercise

  def initialize(input_options)
    super
    calculate_total_volume
  end

  def calculate_total_volume
    self.total_volume = reps * weight
  end
end
