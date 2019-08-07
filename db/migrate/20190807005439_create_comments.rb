class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.integer :listing_id, null: false
      t.integer :author_id, null: false
      t.integer :booking_id, null: false
      t.integer :rating, null: false
      t.text :body, null: false
      t.timestamps
    end
    
    add_index :comments, :author_id
    add_index :comments, :listing_id
    add_index :comments, :booking_id
  end
end
