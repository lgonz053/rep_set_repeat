class CreateWorkouts < ActiveRecord::Migration[5.2]
  def change
    create_table :workouts do |t|
      t.integer :user_id
      t.integer :muscle_group
      t.decimal :time_limit

      t.timestamps
    end
  end
end
