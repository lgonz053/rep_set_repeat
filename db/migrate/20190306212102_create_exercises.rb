class CreateExercises < ActiveRecord::Migration[5.2]
  def change
    create_table :exercises do |t|
      t.string :name
      t.text :description
      t.string :video_url
      t.integer :volume_per_exercise

      t.timestamps
    end
  end
end
