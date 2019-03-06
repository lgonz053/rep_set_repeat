class CreateBodyCorrelations < ActiveRecord::Migration[5.2]
  def change
    create_table :body_correlations do |t|
      t.integer :body_part_id
      t.integer :exercise_id

      t.timestamps
    end
  end
end
