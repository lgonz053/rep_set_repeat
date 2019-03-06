class CreateWorkoutSets < ActiveRecord::Migration[5.2]
  def change
    create_table :workout_sets do |t|
      t.integer :workout_id
      t.integer :exercise_id
      t.integer :groups
      t.integer :reps
      t.integer :weight
      t.integer :total_volume

      t.timestamps
    end
  end
end
