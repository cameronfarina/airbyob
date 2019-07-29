class CreateListings < ActiveRecord::Migration[5.2]
  def change
    create_table :listings do |t|
      t.string :address, null: false
      t.string :city, null: false
      t.string :state
      t.string :country, null: false
      t.float :latitude, null: false
      t.float :longitude, null: false
      t.float :price, null: false
      t.boolean :furnished, null: false
      t.integer :user_id, null: false
      t.text :description, null: false

      t.timestamps
    end

    add_index :listings, :user_id
    add_index :listings, :address
    add_index :listings, :city
    add_index :listings, :price
    add_index :listings, :furnished
  end
end
