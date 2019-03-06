class CreateBodyParts < ActiveRecord::Migration[5.2]
  def change
    create_table :body_parts do |t|
      t.string :name
      t.integer :muscle_group

      t.timestamps
    end
  end
end
