class AddColumnToInterest < ActiveRecord::Migration
  def change
    add_column :interests, :topic_id, :integer
    add_column :interests, :user_id, :integer
  end
end
