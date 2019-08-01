class AddBedsAndBathroomsToListings < ActiveRecord::Migration[5.2]
  def change
    add_column :listings, :beds, :integer
    add_column :listings, :bathrooms, :integer
  end
end
