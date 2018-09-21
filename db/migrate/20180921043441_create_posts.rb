class CreatePosts < ActiveRecord::Migration[5.1]
  def change
    create_table :posts do |t|
      t.string :attachment
      t.string :attachment2
      t.string :attachment3
      t.timestamps
    end
  end
end
