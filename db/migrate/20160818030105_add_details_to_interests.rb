class AddDetailsToInterests < ActiveRecord::Migration
  def change
    add_column :interests, :interest_description, :text
    add_column :interests, :experience_level, :integer
  end
end
